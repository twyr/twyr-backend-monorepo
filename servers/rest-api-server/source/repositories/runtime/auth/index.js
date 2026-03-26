/**
 * Imports for this file
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Auth
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

import { Mutex } from 'async-mutex';
import { Buffer } from 'node:buffer';
import { readdir } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

import { EVASBaseRepository } from '@twyr/framework-classes';
import { EVASBaseFactory } from '@twyr/framework-classes';

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Auth
 *
 * @class
 * @name Auth
 * @extends EVASBaseRepository
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [iocContainer] - IoC module providing DI repositories
 * @param {object} [configuration] - requested repository configuration
 *
 * @classdesc The Auth Repository Class.
 */
class Auth extends EVASBaseRepository {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Auth
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
	 * @subcategory Auth
	 *
	 * @memberof Auth
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

		const passport = await import('koa-passport');
		this.#passport = passport?.['default'];

		const authStrategyPath = resolve?.(
			join?.(this?.__dirname, 'strategies')
		);

		// eslint-disable-next-line security/detect-non-literal-fs-filename
		const availableStrategies = await readdir?.(authStrategyPath);
		const cacheRepository = await this?.iocContainer?.resolve?.('Cache');
		const databaseRepository =
			await this?.iocContainer?.resolve?.('SQLDatabase');

		for (const strategyFile of availableStrategies) {
			if (extname?.(strategyFile) !== '.js') continue;
			const thisStrategyPath = join?.(authStrategyPath, strategyFile);

			let thisStrategy = await import(thisStrategyPath);
			thisStrategy = thisStrategy?.['default'];

			if (!thisStrategy) continue;
			await thisStrategy?.(
				this.#passport,
				cacheRepository,
				databaseRepository
			);
		}
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Auth
	 *
	 * @memberof Auth
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
		this.#passport = undefined;
		await super.unload?.();
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * Exposes the configured Passport instance used for authentication.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Auth
	 *
	 * @memberof Auth
	 * @instance
	 * @readonly
	 * @member {object}
	 * @name interface
	 * @returns {object} The configured Passport instance.
	 */
	get interface() {
		return this.#passport;
	}
	// #endregion

	// #region Private Fields
	#passport = undefined;
	// #endregion
}

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Auth
 *
 * @class
 * @name AuthRepositoryFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Auth Repository Class Factory.
 */
export default class AuthRepositoryFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Auth
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
	 * @subcategory Auth
	 *
	 * @memberof AuthRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [configuration] - requested repository configuration
	 * @param {object} [iocContainer] - IoC Container providing DI Repositories
	 *
	 * @returns {Auth} - The Auth repository instance.
	 */
	static async createInstances(configuration, iocContainer) {
		const repositoryKey = Buffer?.from?.(
			safeJsonStringify?.(configuration ?? {})
		)?.toString?.('base64');

		await AuthRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (!AuthRepositoryFactory.#authInstances?.has(repositoryKey)) {
				const authInstance = new Auth(
					AuthRepositoryFactory['$disk_unc'],
					iocContainer,
					configuration
				);

				await authInstance?.load?.();
				AuthRepositoryFactory.#authInstances?.set?.(
					repositoryKey,
					authInstance
				);
			}
		});

		return AuthRepositoryFactory.#authInstances?.get(repositoryKey)
			?.interface;
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Auth
	 *
	 * @memberof AuthRepositoryFactory
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
	 * @description Clears the cached {Auth} instances
	 */
	static async destroyInstances(configuration) {
		await AuthRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (configuration) {
				const repositoryKey = Buffer?.from?.(
					safeJsonStringify?.(configuration)
				)?.toString?.('base64');

				if (!AuthRepositoryFactory.#authInstances?.has(repositoryKey))
					return;

				const authInstance =
					AuthRepositoryFactory.#authInstances?.get(repositoryKey);
				await authInstance?.unload?.();

				AuthRepositoryFactory.#authInstances?.delete?.(repositoryKey);
				return;
			}

			const destroyResolutions = [];
			AuthRepositoryFactory.#authInstances?.forEach?.((authInstance) => {
				destroyResolutions?.push?.(authInstance?.unload?.());
			});

			await Promise?.allSettled?.(destroyResolutions);
			AuthRepositoryFactory.#authInstances?.clear?.();

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Auth
	 *
	 * @memberof AuthRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name RepositoryName
	 *
	 * @returns {string} - Name of this repository.
	 *
	 * @description
	 * Returns the name of this repository - Auth
	 */
	static get RepositoryName() {
		return 'Auth';
	}
	// #endregion

	// #region Private Static Members
	static #authInstances = new Map();
	static #mutex = new Mutex();
	// #endregion
}
