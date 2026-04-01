/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Profile
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { BaseBoundedContext } from 'baseclass:bounded-context';
import { Mutex } from 'async-mutex';

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile
 *
 * @class
 * @name Profile
 * @extends BaseBoundedContext
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Profile BoundedContext Class.
 */
class Profile extends BaseBoundedContext {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Startup / Shutdown
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile
	 *
	 * @memberof Profile
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {null} - Nothing.
	 */
	async load() {
		await super.load?.();
		return;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile
	 *
	 * @memberof Profile
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {null} - Nothing.
	 */
	async unload() {
		await super.unload?.();
		return;
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile
 *
 * @class
 * @name ProfileBoundedContextFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Profile BoundedContext Class Factory.
 */
export default class ProfileBoundedContextFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile
	 *
	 * @memberof ProfileBoundedContextFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Profile} - The Profile module instance.
	 */
	static async createInstances(domainInterface) {
		return await ProfileBoundedContextFactory.#mutex?.runExclusive?.(
			async () => {
				if (!ProfileBoundedContextFactory.#profileInstance) {
					const profileInstance = new Profile(
						ProfileBoundedContextFactory['$disk_unc'],
						domainInterface
					);

					await profileInstance?.load?.();
					ProfileBoundedContextFactory.#profileInstance =
						profileInstance;
				}

				return ProfileBoundedContextFactory.#profileInstance;
			}
		);
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile
	 *
	 * @memberof ProfileBoundedContextFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the Profile instance
	 */
	static async destroyInstances() {
		await ProfileBoundedContextFactory.#mutex?.runExclusive?.(async () => {
			await ProfileBoundedContextFactory.#profileInstance?.unload?.();
			ProfileBoundedContextFactory.#profileInstance = undefined;

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile
	 *
	 * @memberof ProfileBoundedContextFactory
	 * @static
	 * @override
	 * @function
	 * @name BoundedContextName
	 *
	 * @returns {string} - Name of this bounded context.
	 *
	 * @description
	 * Returns the name of this bounded context - Profile
	 */
	static get BoundedContextName() {
		return 'Profile';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #profileInstance = undefined;
	// #endregion
}
