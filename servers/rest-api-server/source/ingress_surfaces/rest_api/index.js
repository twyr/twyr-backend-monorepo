/**
 * Imports for this file
 *
 * @category REST API Server/Ingress Surfaces
 * @subcategory REST API
 *
 * @ignore
 */
import http from 'node:http';
import networkInterfaces from 'node:os';

import { Mutex } from 'async-mutex';
import safeJsonStringify from 'safe-json-stringify';
// import helmet from 'koa-helmet';

import { v4 as uuidv4 } from 'uuid';

import { EVASBaseIngressSurface } from '@twyr/framework-classes';
import { EVASBaseFactory } from '@twyr/framework-classes';

import { createAuditLogMiddleware } from './koa-middlewares/audit-log.js';
import { createErrorLogMiddleware } from './koa-middlewares/error-log.js';

/**
 * Magic Number constants
 *
 * @category REST API Server/Ingress Surfaces
 * @subcategory REST API
 *
 * @ignore
 */
// const DEFAULT_MAX_EVENT_LOOP_DELAY = 10_000; // 10 seconds
const DEFAULT_MAX_PAYLOAD_SIZE = '10mb';
const DEFAULT_POWERED_BY = 'Twyr';

// const DEFAULT_RATE_LIMIT_INTERVAL = 5 * 60 * 1000; // 5 minutes
// const DEFAULT_RATE_LIMIT_MAX_REQUESTS = 30;

const DEFAULT_SESSION_DOMAIN = '127.0.0.1';
const DEFAULT_SESSION_ENCRYPTION_KEY = 'Th1s!sTheTwyrEntityAggregateServer';
const DEFAULT_SESSION_KEY = 'twyr.entity.aggregate.server';
const DEFAULT_SESSION_MAX_AGE = 86_400_000;
const DEFAULT_SERVER_PORT = 9090;

const DEFAULT_MAX_API_VERSION = 1;

/**
 * @category REST API Server/Ingress Surfaces
 * @subcategory REST API
 *
 * @class
 * @name RestApi
 * @extends EVASBaseIngressSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [iocContainer] - IoC module providing DI repositories
 * @param {object} [configuration] - requested repository configuration
 *
 * @classdesc The RestApi Repository Class.
 */
class RestApi extends EVASBaseIngressSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @ignore
	 */
	constructor(location, iocContainer, configuration) {
		super(location, iocContainer, configuration);
	}
	// #endregion

	// #region Lifecycle Methods
	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof RestApi
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * To be overridden by artifact implementations - for implementing custom
	 * start logic
	 */
	async load() {
		await super.load?.();

		const cache = await this?.iocContainer?.resolve?.('Cache');

		/**
		 * Step 1: Setup the configuration
		 *
		 * @category REST API Server/Ingress Surfaces
		 * @subcategory REST API
		 *
		 * @ignore
		 */
		let configuration = this.configuration;
		if (!configuration) {
			const configRepository =
				await this?.iocContainer?.resolve?.('Configuration');

			configuration = await configRepository?.getConfig?.(this?.name);
		}

		const sessionConfig = {
			keys: configuration?.['SESSION_KEYS'] ?? [
				DEFAULT_SESSION_ENCRYPTION_KEY
			],
			autoCommit: true,
			domain: configuration?.['SESSION_DOMAIN'] ?? DEFAULT_SESSION_DOMAIN,
			key: configuration?.['SESSION_KEY'] ?? DEFAULT_SESSION_KEY,
			maxAge:
				configuration?.['SESSION_MAX_AGE'] ?? DEFAULT_SESSION_MAX_AGE,
			overwrite: true,
			httpOnly: true,
			signed: true,
			rolling: true,
			renew: true
		};
		sessionConfig.genid = function () {
			return `${
				configuration?.['SESSION_KEY'] ?? DEFAULT_SESSION_KEY
			}.${uuidv4()?.replaceAll('-', '')}`;
		};

		/**
		 * Step 2: Setup Koa Application.
		 *
		 * @category REST API Server/Ingress Surfaces
		 * @subcategory REST API
		 *
		 * @ignore
		 */

		// Step 2.1: Instantiate Koa
		let Koa = await import('koa');
		Koa = Koa?.['default'];

		this.#koaApp = new Koa();
		this.#koaApp?.on?.('error', this.#handleKoaAppError.bind(this));

		this.#koaApp.keys = sessionConfig?.keys;
		this.#koaApp.proxy = global.serverEnvironment === 'production';

		// Step 2.2: The audit log hook...
		this.#koaApp?.use?.(
			createAuditLogMiddleware({
				iocContainer: this?.iocContainer
			})
		);

		// Step 2.3: The Global Error Handler
		this.#koaApp?.use?.(
			createErrorLogMiddleware({
				iocContainer: this?.iocContainer,
				configuration: configuration
			})
		);

		// Step 2.4: Assign each request an id to enable
		// distributed tracing...
		let requestId = await import('koa-requestid');
		requestId = requestId?.['default'];
		this.#koaApp?.use?.(
			requestId({
				expose: 'X-Request-Id',
				header: 'X-Request-Id',
				query: 'requestId'
			})
		);

		// Step 2.5: Hide the powered-by header to
		// prevent external entities from easily
		// guessing the stack
		this.#koaApp?.use?.(async (ctxt, next) => {
			ctxt?.request?.socket?.setNoDelay?.(true);

			ctxt?.set?.('X-Request-Id', ctxt?.state?.id);
			ctxt?.set?.(
				'X-Powered-By',
				configuration?.['POWERED_BY'] ?? DEFAULT_POWERED_BY
			);

			await next();
		});

		// Step 2.6: Add in the device identifier
		let device = await import('device');
		device = device?.['default'];

		this.#koaApp?.use?.(async (ctxt, next) => {
			ctxt.state.device = device?.(ctxt?.headers?.['user-agent'] ?? '');
			await next();
		});

		// Step 2.7: Sessions
		let koaSessionRedisStore = await import('koa-redis');
		koaSessionRedisStore = koaSessionRedisStore?.['default'];

		sessionConfig.store = koaSessionRedisStore?.({
			client: cache,
			duplicate: false
		});

		let koaSession = await import('koa-session');
		koaSession = koaSession?.['default']?.(sessionConfig, this.#koaApp);
		koaSession?.on?.(
			'session:missed',
			this.#handleKoaSessionEvents?.bind?.(this)
		);

		koaSession?.on?.(
			'session:invalid',
			this.#handleKoaSessionEvents?.bind?.(this)
		);

		koaSession?.on?.(
			'session:expired',
			this.#handleKoaSessionEvents?.bind?.(this)
		);

		this.#koaApp.use?.(koaSession);

		// Step 2.8: Passport based authentication...
		const authRepository = await this?.iocContainer?.resolve?.('Auth');

		this.#koaApp?.use?.(authRepository?.initialize?.());
		this.#koaApp?.use?.(authRepository?.session?.());

		// Step 2.9: Set locale for this request
		const i18nRepository =
			await this?.iocContainer?.resolve?.('MessageI18N');
		this.#koaApp?.use?.(async (ctxt, next) => {
			const localeId =
				ctxt?.query?.lang ??
				ctxt?.state?.user?.['primary_locale'] ??
				'en-IN';

			const isLocaleSupported =
				await i18nRepository?.supportedLocales?.includes?.(localeId);

			if (!isLocaleSupported) {
				ctxt.status = 406;
				ctxt.body = {
					error: `Locale ${localeId} is not supported`
				};

				return;
			}

			ctxt.locale = localeId;
			await next();
		});

		// Step 2.10: The body parsers...
		const bodyParserConfig = {
			jsonLimit:
				configuration?.['MAX_PAYLOAD_SIZE'] ?? DEFAULT_MAX_PAYLOAD_SIZE,
			textLimit:
				configuration?.['MAX_PAYLOAD_SIZE'] ?? DEFAULT_MAX_PAYLOAD_SIZE,
			xmlLimit:
				configuration?.['MAX_PAYLOAD_SIZE'] ?? DEFAULT_MAX_PAYLOAD_SIZE,
			enableTypes: ['json', 'text', 'xml'],
			extendTypes: {
				json: ['application/x-javascript', 'application/vnd.api+json']
			},
			onError: this.#handleKoaBodyParserError?.bind?.(this)
		};

		let koaBodyParser = await import('koa-bodyparser');
		koaBodyParser = koaBodyParser?.['default'];

		this.#koaApp?.use?.(koaBodyParser(bodyParserConfig));

		// Finally, add in the router for each allowed version...
		let Router = await import('@koa/router');
		Router = Router?.['default'];

		for (
			let apiVersionIdx = 1;
			apiVersionIdx <=
			(configuration?.['MAX_API_VERSION'] ?? DEFAULT_MAX_API_VERSION);
			apiVersionIdx++
		) {
			const apiVersionRouter = new Router({
				prefix: `/api/v${apiVersionIdx}`
			});

			this.#koaApp?.use?.(apiVersionRouter.routes());
			this.#koaApp?.use?.(apiVersionRouter.allowedMethods());

			this.#routers?.set?.(`v${apiVersionIdx}`, apiVersionRouter);
		}
	}

	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof RestApi
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * To be overridden by artifact implementations - for implementing custom
	 * stop logic
	 */
	async unload() {
		await super.unload?.();
		await this?.stop?.();
	}
	// #endregion

	// #region Interface API
	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof RestApi
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name start
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Starts listening on the configured port.
	 */
	async start() {
		if (this.#protocolServer) return;

		const networkList = networkInterfaces?.networkInterfaces?.();

		let configuration = this.configuration;
		if (!configuration) {
			const configRepository =
				await this?.iocContainer?.resolve?.('Configuration');

			configuration = await configRepository?.getConfig?.(this?.name);
		}

		// Step 1: Create the Server
		this.#protocolServer = http?.createServer?.(this.#koaApp?.callback?.());

		// Step 2: Start listening to events
		this.#protocolServer?.on?.(
			'connection',
			this.#serverConnection?.bind?.(this)
		);

		this.#protocolServer?.on?.(
			'error',
			this.#handleProtocolServerError?.bind?.(this)
		);

		// Step 3: Listen on configured port...
		const listenPort = Number?.(
			configuration?.['SERVER_PORT'] ?? DEFAULT_SERVER_PORT
		);

		return new Promise((resolve, reject) => {
			this.#protocolServer?.listen?.(listenPort, () => {
				try {
					if (global.serverEnvironment === 'production') {
						resolve?.();
						return;
					}

					const routerStack = [];
					this.#routers?.forEach?.((router) => {
						const thisStack = router?.stack
							?.map?.((route) => {
								const routeMethodPaths = route?.methods
									?.map((method) => {
										if (method === 'HEAD') return;
										return `${method} ${route?.path}`;
									})
									?.filter((routeMethodPath) => {
										return !!routeMethodPath;
									});

								return routeMethodPaths?.length > 1
									? routeMethodPaths
									: routeMethodPaths?.shift?.();
							})
							?.filter((route) => {
								return !!route;
							});

						routerStack.push(...thisStack);
					});

					console?.info?.(
						`\n${this?.name}::start: ${safeJsonStringify?.(
							routerStack,
							undefined,
							'\t'
						)}`
					);

					const forPrint = [];
					Object.keys(networkList).forEach((networkName) => {
						const networkInterfaceAddresses =
							// eslint-disable-next-line security/detect-object-injection
							networkList?.[networkName];

						for (const address of networkInterfaceAddresses)
							forPrint.push({
								Interface: networkName,
								Protocol: address.family,
								Address: address.address,
								Port: listenPort
							});
					});

					console?.table?.(forPrint);
					resolve?.();
				} catch (error) {
					reject?.(error);
				}
			});
		});
	}

	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof RestApi
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name stop
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Stops listening on the configured port.
	 */
	async stop() {
		if (!this.#protocolServer) return;

		this.#protocolServer.off(
			'error',
			this.#handleProtocolServerError.bind(this)
		);

		this.#protocolServer.off(
			'connection',
			this.#serverConnection.bind(this)
		);

		this.#protocolServer?.closeAllConnections?.();
		this.#protocolServer?.close?.();
		this.#protocolServer = undefined;

		this.#koaApp.off('error', this.#handleKoaAppError.bind(this));
		this.#koaApp = undefined;

		this.#routers?.forEach?.((router) => {
			router.stack.length = 0;
		});

		this.#routers?.clear?.();
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * Exposes the registered routers and lifecycle controls for the REST ingress surface.
	 *
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof RestApi
	 * @instance
	 * @readonly
	 * @member {object}
	 * @name interface
	 * @returns {object} Router collection and bound start/stop methods.
	 */
	get interface() {
		return {
			routers: this.#routers,

			start: this?.start?.bind?.(this),
			stop: this?.stop?.bind?.(this)
		};
	}
	// #endregion

	// #region Private Methods
	/**
	 * Logs each new socket connection accepted by the HTTP server.
	 *
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof RestApi
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #serverConnection
	 *
	 * @param {object} socket - Node.js socket instance for the connection.
	 * @returns {Promise<void>} Resolves after the connection count is logged.
	 */
	async #serverConnection(socket) {
		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.debug?.(`Server Connections: ${socket?._server?._connections}`);
	}

	/**
	 * Logs protocol-server errors raised by the HTTP server.
	 *
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof RestApi
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #handleProtocolServerError
	 *
	 * @returns {Promise<void>} Resolves after the error is logged.
	 */
	async #handleProtocolServerError() {
		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.error?.(
			`Server Error: ${safeJsonStringify?.(arguments, undefined, '\t')}`
		);
	}

	/**
	 * Logs errors emitted directly by the Koa application.
	 *
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof RestApi
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #handleKoaAppError
	 *
	 * @returns {Promise<void>} Resolves after the error is logged.
	 */
	async #handleKoaAppError() {
		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.error?.(
			`Koa App Error: ${safeJsonStringify?.(arguments, undefined, '\t')}`
		);
	}

	/**
	 * Logs Koa session lifecycle events emitted by the session middleware.
	 *
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof RestApi
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #handleKoaSessionEvents
	 *
	 * @returns {Promise<void>} Resolves after the event is logged.
	 */
	async #handleKoaSessionEvents() {
		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.info?.(
			`Koa Session Event: ${safeJsonStringify?.(
				arguments,
				undefined,
				'\t'
			)}`
		);
	}

	/**
	 * Logs request-body parsing errors raised by the body-parser middleware.
	 *
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof RestApi
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #handleKoaBodyParserError
	 *
	 * @returns {Promise<void>} Resolves after the error is logged.
	 */
	async #handleKoaBodyParserError() {
		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.error?.(
			`Koa Body Parser Error: ${safeJsonStringify?.(
				arguments,
				undefined,
				'\t'
			)}`
		);
	}
	// #endregion

	// #region Private Fields
	#routers = new Map();

	#koaApp = undefined;
	#protocolServer = undefined;
	// #endregion
}

/**
 * @category REST API Server/Ingress Surfaces
 * @subcategory REST API
 *
 * @class
 * @name IngressSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The RestApi Ingress Surface Class Factory.
 */
export default class IngressSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof IngressSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [configuration] - requested repository configuration
	 * @param {object} [iocContainer] - IoC Container providing DI Repositories
	 *
	 * @returns {RestApi} - The RestApi repository instance.
	 */
	static async createInstances(configuration, iocContainer) {
		await IngressSurfaceFactory.#mutex?.runExclusive?.(async () => {
			if (!IngressSurfaceFactory.#restApiInstance) {
				const restApiInstance = new RestApi(
					IngressSurfaceFactory['$disk_unc'],
					iocContainer,
					configuration
				);

				await restApiInstance?.load?.();
				IngressSurfaceFactory.#restApiInstance = restApiInstance;
			}
		});

		return IngressSurfaceFactory.#restApiInstance?.interface;
	}

	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof IngressSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @param {object} [configuration] - requested repository configuration
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the cached {RestApi} instances
	 */
	// eslint-disable-next-line no-unused-vars
	static async destroyInstances(configuration = 'server') {
		await IngressSurfaceFactory.#mutex?.runExclusive?.(async () => {
			if (!IngressSurfaceFactory.#restApiInstance) return;

			await IngressSurfaceFactory.#restApiInstance?.unload?.();
			IngressSurfaceFactory.#restApiInstance = undefined;

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API
	 *
	 * @memberof IngressSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name IngressSurfaceName
	 *
	 * @returns {string} - Name of this repository.
	 *
	 * @description
	 * Returns the name of this repository - RestApi
	 */
	static get IngressSurfaceName() {
		return 'RestApi';
	}
	// #endregion

	// #region Private Static Members
	static #restApiInstance = undefined;
	static #mutex = new Mutex();
	// #endregion
}
