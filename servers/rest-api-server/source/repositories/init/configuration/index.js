/**
 * Imports for this file
 *
 * @category REST API Server/Repositories/Init
 * @subcategory Configuration
 *
 * @ignore
 */
import { Mutex } from 'async-mutex';

import { EVASBaseRepository } from '@twyr/framework-classes';
import { EVASBaseFactory } from '@twyr/framework-classes';

/**
 * @category REST API Server/Repositories/Init
 * @subcategory Configuration
 *
 * @class
 * @name Configuration
 * @extends EVASBaseRepository
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [iocContainer] - IoC module providing DI repositories
 * @param {object} [configuration] - requested repository configuration
 *
 * @classdesc The Configuration Repository Class.
 */
class Configuration extends EVASBaseRepository {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Init
	 * @subcategory Configuration
	 *
	 * @ignore
	 */
	constructor(location, iocContainer, configuration) {
		super(location, iocContainer, configuration);
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Repositories/Init
	 * @subcategory Configuration
	 *
	 * @memberof Configuration
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
	}

	/**
	 * @category REST API Server/Repositories/Init
	 * @subcategory Configuration
	 *
	 * @memberof Configuration
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
	}
	// #endregion

	// #region Public API
	/**
	 * @category REST API Server/Repositories/Init
	 * @subcategory Configuration
	 *
	 * @memberof Configuration
	 * @async
	 * @instance
	 * @function
	 * @name getConfig
	 *
	 * @param {string} [artifactName] - name of the artifact that needs configuration
	 *
	 * @returns {object} - Configuration for the requested artifact
	 */
	async getConfig(artifactName) {
		// TODO: MOVE AWAY FROM process.env AND MOVE TOWARDS SOMETHING
		// MORE SOPHISTICATED - DATABASE, REDIS, VAULT, ETC.
		const artifactConfig =
			process?.env?.[artifactName?.toUpperCase?.()] ?? undefined;
		return JSON?.parse?.(artifactConfig ?? '{}');
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * Exposes the configuration lookup interface registered in the IoC container.
	 *
	 * @category REST API Server/Repositories/Init
	 * @subcategory Configuration
	 *
	 * @memberof Configuration
	 * @instance
	 * @readonly
	 * @member {object}
	 * @name interface
	 * @returns {object} Bound configuration lookup methods.
	 */
	get interface() {
		return {
			getConfig: this?.getConfig?.bind?.(this)
		};
	}
	// #endregion
}

/**
 * @category REST API Server/Repositories/Init
 * @subcategory Configuration
 *
 * @class
 * @name ConfigurationRepositoryFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Configuration Repository Class Factory.
 */
export default class ConfigurationRepositoryFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Init
	 * @subcategory Configuration
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Repositories/Init
	 * @subcategory Configuration
	 *
	 * @memberof ConfigurationRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [configuration] - requested repository configuration
	 * @param {object} [iocContainer] - IoC Container providing DI Repositories
	 *
	 * @returns {Configuration} - The configuration repository instance.
	 */
	static async createInstances(configuration, iocContainer) {
		await ConfigurationRepositoryFactory.#mutex?.runExclusive?.(
			async () => {
				if (!ConfigurationRepositoryFactory.#configurationInstance) {
					const configurationInstance = new Configuration(
						ConfigurationRepositoryFactory['$disk_unc'],
						iocContainer,
						configuration
					);

					await configurationInstance?.load?.(configuration);
					ConfigurationRepositoryFactory.#configurationInstance =
						configurationInstance;
				}
			}
		);

		return ConfigurationRepositoryFactory.#configurationInstance?.interface;
	}

	/**
	 * @category REST API Server/Repositories/Init
	 * @subcategory Configuration
	 *
	 * @memberof ConfigurationRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the cached {Configuration} instances
	 */
	static async destroyInstances() {
		await ConfigurationRepositoryFactory.#mutex?.runExclusive?.(
			async () => {
				await ConfigurationRepositoryFactory.#configurationInstance?.unload?.();
				ConfigurationRepositoryFactory.#configurationInstance =
					undefined;

				return;
			}
		);
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Repositories/Init
	 * @subcategory Configuration
	 *
	 * @memberof ConfigurationRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name RepositoryName
	 *
	 * @returns {string} - Name of this repository.
	 *
	 * @description
	 * Returns the name of this repository - Configuration
	 */
	static get RepositoryName() {
		return 'Configuration';
	}
	// #endregion

	// #region Private Static Members
	static #configurationInstance = undefined;
	static #mutex = new Mutex();
	// #endregion
}
