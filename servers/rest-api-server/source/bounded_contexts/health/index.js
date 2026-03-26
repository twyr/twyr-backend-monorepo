/**
 * Imports for this file
 *
 * @category REST API Server/Bounded Contexts
 * @subcategory Health
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { BaseBoundedContext } from 'baseclass:bounded-context';

/**
 * @category REST API Server/Bounded Contexts
 * @subcategory Health
 *
 * @class
 * @name Health
 * @extends BaseBoundedContext
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Health BoundedContext Class.
 */
class Health extends BaseBoundedContext {
	// #region Constructor
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Startup / Shutdown
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health
	 *
	 * @memberof Health
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {null} - Nothing.
	 *
	 * @description Loads / Initializes / Starts-up sub-artifacts.
	 */
	async load() {
		await super.load?.();
		return;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health
	 *
	 * @memberof Health
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {null} - Nothing.
	 *
	 * @description Shuts-down / Un-initializes / Un-loads sub-artifacts.
	 */
	async unload() {
		await super.unload?.();
		return;
	}
	// #endregion
}

/**
 * @category REST API Server/Bounded Contexts
 * @subcategory Health
 *
 * @class
 * @name HealthBoundedContextFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Health BoundedContext Class Factory.
 */
export default class HealthBoundedContextFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health
	 *
	 * @memberof HealthBoundedContextFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Health} - The Health module instance.
	 */
	static async createInstances(domainInterface) {
		if (!HealthBoundedContextFactory.#healthInstance) {
			const healthInstance = new Health(
				HealthBoundedContextFactory['$disk_unc'],
				domainInterface
			);

			await healthInstance?.load?.();
			HealthBoundedContextFactory.#healthInstance = healthInstance;
		}

		return HealthBoundedContextFactory.#healthInstance;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health
	 *
	 * @memberof HealthBoundedContextFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the Health instance
	 */
	static async destroyInstances() {
		await HealthBoundedContextFactory.#healthInstance?.unload?.();
		HealthBoundedContextFactory.#healthInstance = undefined;

		return;
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health
	 *
	 * @memberof HealthBoundedContextFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name BoundedContextName
	 *
	 * @returns {string} - Name of this bounded context.
	 *
	 * @description
	 * Returns the name of this bounded context - Health
	 */
	static get BoundedContextName() {
		return 'Health';
	}
	// #endregion

	// #region Private Static Members
	static #healthInstance = undefined;
	// #endregion
}
