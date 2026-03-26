/* eslint-disable security/detect-object-injection */
/**
 * Imports for this file
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Audit
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

import { Mutex } from 'async-mutex';

import { EVASBaseRepository } from '@twyr/framework-classes';
import { EVASBaseFactory } from '@twyr/framework-classes';

import ModelFactory from './audit-trail-model.js';

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Audit
 *
 * @class
 * @name Audit
 * @extends EVASBaseRepository
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [iocContainer] - IoC module providing DI repositories
 * @param {object} [configuration] - requested repository configuration
 *
 * @classdesc The Audit Repository Class.
 */
class Audit extends EVASBaseRepository {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Audit
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
	 * @subcategory Audit
	 *
	 * @memberof Audit
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

		const configuration = await this?._mergeConfiguration?.({});
		this.#auditEnabled = configuration?.enable ?? false;
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Audit
	 *
	 * @memberof Audit
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

	// #region Interface API
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Audit
	 *
	 * @memberof Audit
	 * @async
	 * @instance
	 * @function
	 * @name publish
	 *
	 * @param {object} auditData - The data to be sent for future auditing.
	 *
	 * @returns {null} Nothing.
	 *
	 * @description
	 * Sends data to an audit server.
	 */
	async publish(auditData) {
		const auditPayload = this.#cleanBeforePublish?.(auditData);

		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.debug?.(
			`Audit Payload: ${safeJsonStringify?.(auditPayload, undefined, '\t')}\n`
		);
		if (!this.#auditEnabled) return;

		auditPayload['start_time'] = new Date(auditPayload?.['start_time']);
		auditPayload['end_time'] = new Date(auditPayload?.['end_time']);

		const connectionInstance =
			await this?.iocContainer?.resolve?.('MongoDB');

		const UserAuditTrailModel =
			await ModelFactory?.createInstance?.(connectionInstance);

		const userAuditTrailModel = new UserAuditTrailModel(auditPayload);

		// NOTE: Deliberately NOT awaiting here
		// No sense wasting time waiting for this
		// and reducing server performance
		userAuditTrailModel?.save?.();

		// TODO: Send to an actual Audit Server
		// The "actual" audit server should take care of
		// storing the audit trail in the chosen log store -
		// ClickHouse
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * Exposes the audit publishing API registered in the IoC container.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Audit
	 *
	 * @memberof Audit
	 * @instance
	 * @readonly
	 * @member {object}
	 * @name interface
	 * @returns {object} Bound audit publishing methods.
	 */
	get interface() {
		return {
			publish: this?.publish?.bind?.(this)
		};
	}
	// #endregion

	// #region Private Methods
	/**
	 * Removes empty fields and masks confidential values before persisting audit data.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Audit
	 *
	 * @memberof Audit
	 * @instance
	 * @private
	 * @function
	 * @name #cleanBeforePublish
	 *
	 * @param {object} auditPayload - Audit payload to sanitize.
	 * @returns {object|undefined} The sanitized payload, or `undefined` if nothing remains.
	 */
	#cleanBeforePublish(auditPayload) {
		if (!auditPayload) return;

		const confidentialKeyList = ['password', 'image', 'random'];

		const keys = Object?.keys?.(auditPayload);
		for (const key of keys) {
			if (!auditPayload?.[key]) {
				delete auditPayload[key];
				continue;
			}

			if (confidentialKeyList?.includes?.(key)) {
				auditPayload[key] = '********';
				continue;
			}

			if (typeof auditPayload?.[key] === 'object') {
				auditPayload[key] = this.#cleanBeforePublish?.(
					auditPayload?.[key]
				);

				if (!auditPayload?.[key]) {
					delete auditPayload?.[key];
					continue;
				}
			}
		}

		if (!Object?.keys?.(auditPayload)?.length) return;
		return auditPayload;
	}
	// #endregion

	// #region Private Fields
	#auditEnabled = false;
	// #endregion
}

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Audit
 *
 * @class
 * @name AuditRepositoryFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Audit Repository Class Factory.
 */
export default class AuditRepositoryFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Audit
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
	 * @subcategory Audit
	 *
	 * @memberof AuditRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [configuration] - requested repository configuration
	 * @param {object} [iocContainer] - IoC Container providing DI Repositories
	 *
	 * @returns {Audit} - The Audit repository instance.
	 */
	static async createInstances(configuration, iocContainer) {
		const scope = configuration ?? 'server';
		await AuditRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (!AuditRepositoryFactory.#auditInstances?.has(scope)) {
				const auditInstance = new Audit(
					AuditRepositoryFactory['$disk_unc'],
					iocContainer,
					scope
				);

				await auditInstance?.load?.();
				AuditRepositoryFactory.#auditInstances?.set?.(
					scope,
					auditInstance
				);
			}
		});

		return AuditRepositoryFactory.#auditInstances?.get(scope)?.interface;
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Audit
	 *
	 * @memberof AuditRepositoryFactory
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
	 * @description Clears the cached {Audit} instances
	 */
	static async destroyInstances(configuration) {
		await AuditRepositoryFactory.#mutex?.runExclusive?.(async () => {
			const scope = configuration ?? 'server';
			if (configuration) {
				if (!AuditRepositoryFactory.#auditInstances?.has(scope)) return;

				const auditInstance =
					AuditRepositoryFactory.#auditInstances?.get(scope);
				await auditInstance?.unload?.();

				AuditRepositoryFactory.#auditInstances?.delete?.(scope);
				return;
			}

			const destroyResolutions = [];
			AuditRepositoryFactory.#auditInstances?.forEach?.(
				(auditInstance) => {
					destroyResolutions?.push?.(auditInstance?.unload?.());
				}
			);

			await Promise?.allSettled?.(destroyResolutions);
			AuditRepositoryFactory.#auditInstances?.clear?.();

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Audit
	 *
	 * @memberof AuditRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name RepositoryName
	 *
	 * @returns {string} - Name of this repository.
	 *
	 * @description
	 * Returns the name of this repository - Audit
	 */
	static get RepositoryName() {
		return 'Audit';
	}
	// #endregion

	// #region Private Static Members
	static #auditInstances = new Map();
	static #mutex = new Mutex();
	// #endregion
}
