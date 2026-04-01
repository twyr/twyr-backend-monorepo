/**
 * Imports for this file
 *
 * @category REST API Server/Domains/System Admin
 * @subcategory Session Manager
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { BaseBoundedContext } from 'baseclass:bounded-context';
import { Mutex } from 'async-mutex';

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Session Manager
 *
 * @class
 * @name SessionManager
 * @extends BaseBoundedContext
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The SessionManager bounded context class.
 */
class SessionManager extends BaseBoundedContext {
	// #region Constructor

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Startup / Shutdown
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager
	 *
	 * @memberof SessionManager
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {Promise<void>} Resolves when the bounded context has loaded.
	 *
	 * @description Loads, initializes, and starts the bounded context artifacts.
	 */
	async load() {
		await super.load?.();
		return;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager
	 *
	 * @memberof SessionManager
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {Promise<void>} Resolves when the bounded context has unloaded.
	 *
	 * @description Shuts down and unloads the bounded context artifacts.
	 */
	async unload() {
		await super.unload?.();
		return;
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Session Manager
 *
 * @class
 * @name SessionManagerBoundedContextFactory
 * @extends EVASBaseFactory
 *
 * @classdesc Factory for the SessionManager bounded context class.
 */
export default class SessionManagerBoundedContextFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager
	 *
	 * @memberof SessionManagerBoundedContextFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<SessionManager>} Resolves to the SessionManager instance.
	 */
	static async createInstances(domainInterface) {
		return await SessionManagerBoundedContextFactory.#mutex?.runExclusive?.(
			async () => {
				if (
					!SessionManagerBoundedContextFactory.#sessionManagerInstance
				) {
					const sessionManagerInstance = new SessionManager(
						SessionManagerBoundedContextFactory['$disk_unc'],
						domainInterface
					);

					await sessionManagerInstance?.load?.();
					SessionManagerBoundedContextFactory.#sessionManagerInstance =
						sessionManagerInstance;
				}

				return SessionManagerBoundedContextFactory
					.#sessionManagerInstance;
			}
		);
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager
	 *
	 * @memberof SessionManagerBoundedContextFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves when the cached instance is cleared.
	 *
	 * @description Destroys the cached SessionManager instance.
	 */
	static async destroyInstances() {
		await SessionManagerBoundedContextFactory.#mutex?.runExclusive?.(
			async () => {
				await SessionManagerBoundedContextFactory.#sessionManagerInstance?.unload?.();
				SessionManagerBoundedContextFactory.#sessionManagerInstance =
					undefined;

				return;
			}
		);
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager
	 *
	 * @memberof SessionManagerBoundedContextFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name BoundedContextName
	 *
	 * @returns {string} Name of this bounded context.
	 *
	 * @description
	 * Returns the bounded context name: `SessionManager`.
	 */
	static get BoundedContextName() {
		return 'SessionManager';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #sessionManagerInstance = undefined;
	// #endregion
}
