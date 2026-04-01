/**
 * Imports for this file
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Mongodb
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

import { Mutex } from 'async-mutex';

import { EVASBaseRepository } from '@twyr/framework-classes';
import { EVASBaseFactory } from '@twyr/framework-classes';

/**
 * Magic Number constants
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Mongodb
 *
 * @ignore
 */
const DEFAULT_MONGODB_HOST = '127.0.0.1';
const DEFAULT_MONGODB_PORT = 27_017;
const DEFAULT_MONGODB_DATABASE = 'twyr';

const DEFAULT_MONGODB_USER = undefined;
const DEFAULT_MONGODB_PASSWORD = undefined;

const DEFAULT_MONGODB_PROTOCOL_FAMILY = 4;

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Mongodb
 *
 * @class
 * @name MongoDB
 * @extends EVASBaseRepository
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [iocContainer] - IoC module providing DI repositories
 * @param {object} [configuration] - requested repository configuration
 *
 * @classdesc The MongoDB Repository Class.
 */
class MongoDB extends EVASBaseRepository {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Mongodb
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
	 * @subcategory Mongodb
	 *
	 * @memberof MongoDB
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
			host: DEFAULT_MONGODB_HOST,
			port: DEFAULT_MONGODB_PORT,
			dbName: DEFAULT_MONGODB_DATABASE,

			user: DEFAULT_MONGODB_USER,
			pass: DEFAULT_MONGODB_PASSWORD,

			family: DEFAULT_MONGODB_PROTOCOL_FAMILY
		};

		const configuration =
			await this?._mergeConfiguration?.(defaultConfiguration);

		// Step 2: Setup the Client
		let mongoose = await import('mongoose');
		mongoose = mongoose?.['default'];

		const MongooseClass = mongoose?.Mongoose;
		this.#mongooseRoot = new MongooseClass();
		this.#mongooseRoot?.set?.('strictQuery', true);

		// Step 3: Open a connection to the server
		let connectionString = `mongodb://${configuration?.user}:${configuration?.pass}@${configuration?.host}:${configuration?.port}/${configuration?.dbName}?retryWrites=true&w=majority`;
		if (configuration?.authSource) {
			connectionString += `&authSource=${configuration?.authSource}`;
		}
		this.#mongoose =
			await this.#mongooseRoot?.createConnection?.(connectionString);

		// Step 4: Error Handler
		this.#mongoose?.on?.('error', this.#mongoConnectionError.bind(this));
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Mongodb
	 *
	 * @memberof MongoDB
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
		if (!this.#mongoose) return;

		await this.#mongoose?.close?.();
		this.#mongoose = undefined;
		this.#mongooseRoot = undefined;

		await super.unload?.();
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * Exposes the connected Mongoose instance.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Mongodb
	 *
	 * @memberof MongoDB
	 * @instance
	 * @readonly
	 * @member {object}
	 * @name interface
	 * @returns {object} The connected Mongoose instance.
	 */
	get interface() {
		return this.#mongoose;
	}
	// #endregion

	// #region Private Methods
	/**
	 * Logs MongoDB connection errors through the shared logger.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Mongodb
	 *
	 * @memberof MongoDB
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #mongoConnectionError
	 *
	 * @param {Error} error - Connection error emitted by Mongoose.
	 * @returns {Promise<void>} Resolves after the error is logged.
	 */
	async #mongoConnectionError(error) {
		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.error?.(
			`${this.name}::#mongoConnectionError: ${error.message} @\n${error.stack}`
		);
	}
	// #endregion

	// #region Private Fields
	#mongooseRoot = undefined;
	#mongoose = undefined;
	// #endregion
}

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Mongodb
 *
 * @class
 * @name MongoDBRepositoryFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The MongoDB Repository Class Factory.
 */
export default class MongoDBRepositoryFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Mongodb
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
	 * @subcategory Mongodb
	 *
	 * @memberof MongoDBRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [configuration] - requested repository configuration
	 * @param {object} [iocContainer] - IoC Container providing DI Repositories
	 *
	 * @returns {MongoDB} - The MongoDB repository instance.
	 */
	static async createInstances(configuration, iocContainer) {
		const repositoryKey = Buffer?.from?.(
			safeJsonStringify?.(configuration ?? {})
		)?.toString?.('base64');

		await MongoDBRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (
				!MongoDBRepositoryFactory.#mongodbInstances?.has(repositoryKey)
			) {
				const mongodbInstance = new MongoDB(
					MongoDBRepositoryFactory['$disk_unc'],
					iocContainer,
					configuration
				);

				await mongodbInstance?.load?.();
				MongoDBRepositoryFactory.#mongodbInstances?.set?.(
					repositoryKey,
					mongodbInstance
				);
			}
		});

		return MongoDBRepositoryFactory.#mongodbInstances?.get(repositoryKey)
			?.interface;
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Mongodb
	 *
	 * @memberof MongoDBRepositoryFactory
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
	 * @description Clears the cached {MongoDB} instances
	 */
	static async destroyInstances(configuration) {
		await MongoDBRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (configuration) {
				const repositoryKey = Buffer?.from?.(
					safeJsonStringify?.(configuration)
				)?.toString?.('base64');

				if (
					!MongoDBRepositoryFactory.#mongodbInstances?.has(
						repositoryKey
					)
				)
					return;

				const mongodbInstance =
					MongoDBRepositoryFactory.#mongodbInstances?.get(
						repositoryKey
					);
				await mongodbInstance?.unload?.();

				MongoDBRepositoryFactory.#mongodbInstances?.delete?.(
					repositoryKey
				);
				return;
			}

			const destroyResolutions = [];
			MongoDBRepositoryFactory.#mongodbInstances?.forEach?.(
				(MongoDBInstance) => {
					destroyResolutions?.push?.(MongoDBInstance?.unload?.());
				}
			);

			await Promise?.allSettled?.(destroyResolutions);
			MongoDBRepositoryFactory.#mongodbInstances?.clear?.();

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Mongodb
	 *
	 * @memberof MongoDBRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name RepositoryName
	 *
	 * @returns {string} - Name of this repository.
	 *
	 * @description
	 * Returns the name of this repository - MongoDB
	 */
	static get RepositoryName() {
		return 'MongoDB';
	}
	// #endregion

	// #region Private Static Members
	static #mongodbInstances = new Map();
	static #mutex = new Mutex();
	// #endregion
}
