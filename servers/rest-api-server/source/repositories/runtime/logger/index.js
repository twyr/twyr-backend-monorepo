/**
 * Imports for this file
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Logger
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

import { Buffer } from 'node:buffer';
import { dirname, join } from 'node:path';

import { Mutex } from 'async-mutex';

import { EVASBaseRepository } from '@twyr/framework-classes';
import { EVASBaseFactory } from '@twyr/framework-classes';

/**
 * Magic Number constants
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Logger
 *
 * @ignore
 */
const DEFAULT_LOGGER_LEVEL = 'info';
const DEFAULT_LOGGER_FORMAT = 'json';
const DEFAULT_LOGGER_TRANSPORTS = [];

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Logger
 *
 * @class
 * @name Logger
 * @extends EVASBaseRepository
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [iocContainer] - IoC module providing DI repositories
 * @param {object} [configuration] - requested repository configuration
 *
 * @classdesc The Logger Repository Class.
 */
class Logger extends EVASBaseRepository {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Logger
	 *
	 * @ignore
	 */
	constructor(location, iocContainer, configuration) {
		super(location, iocContainer, configuration);
	}
	// #endregion

	// #region Lifecycle Methods
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Logger
	 *
	 * @memberof Logger
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

		// Step 1: Setup the configuration
		const defaultConfiguration = {
			loggerLevel: DEFAULT_LOGGER_LEVEL,
			loggerFormat: DEFAULT_LOGGER_FORMAT,
			loggerTransports: DEFAULT_LOGGER_TRANSPORTS
		};

		const configuration =
			await this?._mergeConfiguration?.(defaultConfiguration);

		// Step 2: Setup the client
		let winston = await import('winston');
		winston = winston?.['default'];

		const loggerLevel = configuration?.['loggerLevel'];
		const logDirectory = join?.(
			dirname?.(dirname?.(global.serverFilePath)),
			'logs'
		);

		let loggerFormat = configuration?.['loggerFormat'];
		loggerFormat = winston?.format?.combine?.(
			winston?.format?.timestamp?.(),
			// eslint-disable-next-line security/detect-object-injection
			winston?.format?.[loggerFormat]?.()
		);

		const loggerTransports = configuration?.['loggerTransports']?.map?.(
			(transport) => {
				return new winston.transports[transport?.name](
					transport?.options
				);
			}
		);

		// TODO: Add log rotation to file transports
		if (!loggerTransports?.length) {
			loggerTransports?.push?.(
				new winston.transports.File({
					filename: join?.(logDirectory, 'error.log'),
					format: loggerFormat,
					level: 'error'
				})
			);

			loggerTransports?.push?.(
				new winston.transports.File({
					filename: join?.(logDirectory, 'combined.log'),
					format: loggerFormat
				})
			);

			loggerTransports?.push?.(
				new winston.transports.Console({
					format: winston?.format?.simple?.(),
					forceConsole: true
				})
			);
		}

		const exceptionTransport = new winston.transports.File({
			filename: join?.(logDirectory, 'exceptions.log'),
			format: loggerFormat
		});

		const rejectionTransport = new winston.transports.File({
			filename: join?.(logDirectory, 'rejections.log'),
			format: loggerFormat
		});

		// Step 3: Open the logger instance
		this.#winston = winston?.createLogger?.({
			level: loggerLevel,
			transports: loggerTransports,
			exceptionHandlers: [exceptionTransport],
			rejectionHandlers: [rejectionTransport]
		});
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Logger
	 *
	 * @memberof Logger
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
		this.#winston?.close?.();
		this.#winston?.clear?.();
		this.#winston = undefined;

		await super.unload?.();
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * Exposes the configured Winston logger instance.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Logger
	 *
	 * @memberof Logger
	 * @instance
	 * @readonly
	 * @member {object}
	 * @name interface
	 * @returns {object} The configured Winston logger.
	 */
	get interface() {
		return this.#winston;
	}
	// #endregion

	// #region Private Fields
	#winston = undefined;
	// #endregion
}

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Logger
 *
 * @class
 * @name LoggerRepositoryFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Logger Repository Class Factory.
 */
export default class LoggerRepositoryFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Logger
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Logger
	 *
	 * @memberof LoggerRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [configuration] - requested repository configuration
	 * @param {object} [iocContainer] - IoC Container providing DI Repositories
	 *
	 * @returns {Logger} - The logger repository instance.
	 */
	static async createInstances(configuration, iocContainer) {
		const repositoryKey = Buffer?.from?.(
			safeJsonStringify?.(configuration ?? {})
		)?.toString?.('base64');

		await LoggerRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (!LoggerRepositoryFactory.#loggerInstances?.has(repositoryKey)) {
				const loggerInstance = new Logger(
					LoggerRepositoryFactory['$disk_unc'],
					iocContainer,
					configuration
				);

				await loggerInstance?.load?.();
				LoggerRepositoryFactory.#loggerInstances?.set?.(
					repositoryKey,
					loggerInstance
				);
			}
		});

		return LoggerRepositoryFactory.#loggerInstances?.get(repositoryKey)
			?.interface;
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Logger
	 *
	 * @memberof LoggerRepositoryFactory
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
	 * @description Clears the cached {Logger} instances
	 */
	static async destroyInstances(configuration) {
		await LoggerRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (configuration) {
				const repositoryKey = Buffer?.from?.(
					safeJsonStringify?.(configuration)
				)?.toString?.('base64');

				if (
					!LoggerRepositoryFactory.#loggerInstances?.has(
						repositoryKey
					)
				)
					return;

				const loggerInstance =
					LoggerRepositoryFactory.#loggerInstances?.get(
						repositoryKey
					);
				await loggerInstance?.unload?.();

				LoggerRepositoryFactory.#loggerInstances?.delete?.(
					repositoryKey
				);
				return;
			}

			const destroyResolutions = [];
			LoggerRepositoryFactory.#loggerInstances?.forEach?.(
				(loggerInstance) => {
					destroyResolutions?.push?.(loggerInstance?.unload?.());
				}
			);

			await Promise?.allSettled?.(destroyResolutions);
			LoggerRepositoryFactory.#loggerInstances?.clear?.();

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Logger
	 *
	 * @memberof LoggerRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name RepositoryName
	 *
	 * @returns {string} - Name of this repository.
	 *
	 * @description
	 * Returns the name of this repository - Logger
	 */
	static get RepositoryName() {
		return 'Logger';
	}
	// #endregion

	// #region Private Static Members
	static #loggerInstances = new Map();
	static #mutex = new Mutex();
	// #endregion
}
