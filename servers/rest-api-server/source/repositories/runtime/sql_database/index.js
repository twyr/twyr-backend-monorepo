/**
 * Imports for this file
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory SQL Database
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

import { Mutex } from 'async-mutex';

import { errorSerializer } from '@twyr/error-serializer';
import { EVASBaseRepository } from '@twyr/framework-classes';
import { EVASBaseFactory } from '@twyr/framework-classes';

/**
 * Magic Number constants
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory SQL Database
 *
 * @ignore
 */
const DEFAULT_SQLDB_CLIENT = 'pg';
const DEFAULT_SQLDB_DEBUG = false;
const DEFAULT_SQLDB_ASYNC_STACK_TRACES = true;

const DEFAULT_SQLDB_HOST = '127.0.0.1';
const DEFAULT_SQLDB_PORT = 5432;
const DEFAULT_SQLDB_USER = 'postgres';
const DEFAULT_SQLDB_PASSWORD = 'postgres';
const DEFAULT_SQLDB_DATABASE = 'postgres';

const DEFAULT_SQLDB_MIN_POOL_SIZE = 0;
const DEFAULT_SQLDB_MAX_POOL_SIZE = 2;

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory SQL Database
 *
 * @class
 * @name SQLDatabase
 * @extends EVASBaseRepository
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [iocContainer] - IoC module providing DI repositories
 * @param {object} [configuration] - requested repository configuration
 *
 * @classdesc The SQLDatabase Repository Class.
 */
class SQLDatabase extends EVASBaseRepository {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory SQL Database
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
	 * @subcategory SQL Database
	 *
	 * @memberof SQLDatabase
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
		let pgError = await import('pg-error');
		pgError = pgError?.['default'];

		const defaultConfiguration = {
			debug: DEFAULT_SQLDB_DEBUG,
			asyncStackTraces: DEFAULT_SQLDB_ASYNC_STACK_TRACES,

			client: DEFAULT_SQLDB_CLIENT,

			connection: {
				host: DEFAULT_SQLDB_HOST,
				port: DEFAULT_SQLDB_PORT,

				user: DEFAULT_SQLDB_USER,
				password: DEFAULT_SQLDB_PASSWORD,

				database: DEFAULT_SQLDB_DATABASE
			},

			pool: {
				min: DEFAULT_SQLDB_MIN_POOL_SIZE,
				max: DEFAULT_SQLDB_MAX_POOL_SIZE,

				afterCreate: (connection, done) => {
					connection.connection.parseE = pgError.parse;
					connection.connection.parseN = pgError.parse;
					connection.connection.on('PgError', (error) => {
						switch (error.severity) {
							case 'ERROR':
							case 'FATAL':
							case 'PANIC':
								return this.emit('error', error);
							default:
								return this.emit('notice', error);
						}
					});

					connection.on('notice', this.#databaseNotice?.bind?.(this));
					done(null, connection);
				}
			}
		};

		const configuration =
			await this?._mergeConfiguration?.(defaultConfiguration);

		// Step 2: Setup the client
		let Knex = await import('knex');
		Knex = Knex?.['default'];

		this.#knex = Knex?.(configuration);

		this.#knex?.on?.('query', this.#databaseQuery?.bind?.(this));
		this.#knex?.on?.(
			'query-response',
			this.#databaseQueryResponse?.bind?.(this)
		);
		this.#knex?.on?.('query-error', this.#databaseQueryError?.bind?.(this));
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory SQL Database
	 *
	 * @memberof SQLDatabase
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
		if (!this.#knex) return;

		await this.#knex?.destroy?.();
		this.#knex = undefined;

		await super.unload?.();
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * Exposes the configured Knex client instance.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory SQL Database
	 *
	 * @memberof SQLDatabase
	 * @instance
	 * @readonly
	 * @member {object}
	 * @name interface
	 * @returns {object} The configured Knex client.
	 */
	get interface() {
		return this.#knex;
	}
	// #endregion

	// #region Private Methods
	/**
	 * Normalizes SQL text before it is logged or inspected.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory SQL Database
	 *
	 * @memberof SQLDatabase
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #databaseQuery
	 *
	 * @param {object} queryData - Knex query event payload.
	 * @returns {Promise<void>} Resolves after the query text is normalized.
	 */
	async #databaseQuery(queryData) {
		queryData.sql = queryData?.sql
			?.replaceAll('\\t', ' ')
			?.replaceAll('\\n', ' ')
			?.replaceAll('\t', ' ')
			?.replaceAll('\n', ' ')
			?.replace(/\s\s+/g, ' ');

		// const logger = await this?.iocContainer?.resolve?.('Logger');
		// logger?.debug?.(
		// 	`${this?.name}#databaseQuery: ${safeJsonStringify?.(
		// 		queryData,
		// 		undefined,
		// 		'\t'
		// 	)}`
		// );
	}

	/**
	 * Normalizes SQL text and attaches row-oriented response data after query execution.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory SQL Database
	 *
	 * @memberof SQLDatabase
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #databaseQueryResponse
	 *
	 * @param {object} queryResponse - Raw response emitted by Knex.
	 * @param {object} query - Knex query event payload.
	 * @returns {Promise<void>} Resolves after the query metadata is normalized.
	 */
	async #databaseQueryResponse(queryResponse, query) {
		query.response = query?.response?.rows;
		query.sql = query?.sql
			?.replaceAll('\\t', ' ')
			?.replaceAll('\\n', ' ')
			?.replaceAll('\t', ' ')
			?.replaceAll('\n', ' ')
			?.replace(/\s\s+/g, ' ');

		// const logger = await this?.iocContainer?.resolve?.('Logger');
		// logger?.debug?.(
		// 	`${this?.name}#databaseQueryResponse: ${safeJsonStringify?.(
		// 		query,
		// 		undefined,
		// 		'\t'
		// 	)}`
		// );
	}

	/**
	 * Logs SQL query failures with serialized error details.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory SQL Database
	 *
	 * @memberof SQLDatabase
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #databaseQueryError
	 *
	 * @param {Error} error - Query error emitted by Knex.
	 * @param {object} query - Knex query event payload.
	 * @returns {Promise<void>} Resolves after the error is logged.
	 */
	async #databaseQueryError(error, query) {
		const queryLog = Object?.assign?.({}, query);
		queryLog.error = errorSerializer?.(error);

		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.error?.(
			`${this.name}::#databaseQueryError:\nQuery: ${safeJsonStringify?.(
				queryLog,
				undefined,
				'\t'
			)}`
		);
	}

	/**
	 * Logs PostgreSQL notices emitted by the connection pool.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory SQL Database
	 *
	 * @memberof SQLDatabase
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #databaseNotice
	 *
	 * @param {object} notice - Database notice emitted by PostgreSQL.
	 * @returns {Promise<void>} Resolves after the notice is logged.
	 */
	async #databaseNotice(notice) {
		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.info?.(
			`${this?.name}#databaseNotice: ${safeJsonStringify?.(
				notice,
				undefined,
				'\t'
			)}`
		);
	}
	// #endregion

	// #region Private Fields
	#knex = undefined;
	// #endregion
}

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory SQL Database
 *
 * @class
 * @name SQLDatabaseRepositoryFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The SQLDatabase Repository Class Factory.
 */
export default class SQLDatabaseRepositoryFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory SQL Database
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
	 * @subcategory SQL Database
	 *
	 * @memberof SQLDatabaseRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [configuration] - requested repository configuration
	 * @param {object} [iocContainer] - IoC Container providing DI Repositories
	 *
	 * @returns {SQLDatabase} - The SQLDatabase repository instance.
	 */
	static async createInstances(configuration, iocContainer) {
		const repositoryKey = Buffer?.from?.(
			safeJsonStringify?.(configuration ?? {})
		)?.toString?.('base64');

		await SQLDatabaseRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (
				!SQLDatabaseRepositoryFactory.#sqldbInstances?.has(
					repositoryKey
				)
			) {
				const sqldbInstance = new SQLDatabase(
					SQLDatabaseRepositoryFactory['$disk_unc'],
					iocContainer,
					configuration
				);

				await sqldbInstance?.load?.();
				SQLDatabaseRepositoryFactory.#sqldbInstances?.set?.(
					repositoryKey,
					sqldbInstance
				);
			}
		});

		return SQLDatabaseRepositoryFactory.#sqldbInstances?.get(repositoryKey)
			?.interface;
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory SQL Database
	 *
	 * @memberof SQLDatabaseRepositoryFactory
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
	 * @description Clears the cached {SQLDatabase} instances
	 */
	static async destroyInstances(configuration) {
		await SQLDatabaseRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (configuration) {
				const repositoryKey = Buffer?.from?.(
					safeJsonStringify?.(configuration)
				)?.toString?.('base64');

				if (
					!SQLDatabaseRepositoryFactory.#sqldbInstances?.has(
						repositoryKey
					)
				)
					return;

				const sqldbInstance =
					SQLDatabaseRepositoryFactory.#sqldbInstances?.get(
						repositoryKey
					);
				await sqldbInstance?.unload?.();

				SQLDatabaseRepositoryFactory.#sqldbInstances?.delete?.(
					repositoryKey
				);
				return;
			}

			const destroyResolutions = [];
			SQLDatabaseRepositoryFactory.#sqldbInstances?.forEach?.(
				(sqlDatabaseInstance) => {
					destroyResolutions?.push?.(sqlDatabaseInstance?.unload?.());
				}
			);

			await Promise?.allSettled?.(destroyResolutions);
			SQLDatabaseRepositoryFactory.#sqldbInstances?.clear?.();

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory SQL Database
	 *
	 * @memberof SQLDatabaseRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name RepositoryName
	 *
	 * @returns {string} - Name of this repository.
	 *
	 * @description
	 * Returns the name of this repository - SQLDatabase
	 */
	static get RepositoryName() {
		return 'SQLDatabase';
	}
	// #endregion

	// #region Private Static Members
	static #sqldbInstances = new Map();
	static #mutex = new Mutex();
	// #endregion
}
