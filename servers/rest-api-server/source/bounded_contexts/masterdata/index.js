/**
 * Imports for this file
 *
 * @category REST API Server/Bounded Contexts
 * @subcategory Masterdata
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { BaseBoundedContext } from 'baseclass:bounded-context';
import { Mutex } from 'async-mutex';

/**
 * @category REST API Server/Bounded Contexts
 * @subcategory Masterdata
 *
 * @class
 * @name Masterdata
 * @extends BaseBoundedContext
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Masterdata BoundedContext Class.
 */
class Masterdata extends BaseBoundedContext {
	// #region Constructor
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata
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
	 * @subcategory Masterdata
	 *
	 * @memberof Masterdata
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
	 * @subcategory Masterdata
	 *
	 * @memberof Masterdata
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
 * @subcategory Masterdata
 *
 * @class
 * @name BoundedContextFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Masterdata BoundedContext Class Factory.
 */
export default class BoundedContextFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata
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
	 * @subcategory Masterdata
	 *
	 * @memberof BoundedContextFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Masterdata} - The Masterdata module instance.
	 */
	static async createInstances(domainInterface) {
		return await BoundedContextFactory.#mutex?.runExclusive?.(async () => {
			if (!BoundedContextFactory.#masterdataInstance) {
				const masterdataInstance = new Masterdata(
					BoundedContextFactory['$disk_unc'],
					domainInterface
				);

				await masterdataInstance?.load?.();
				BoundedContextFactory.#masterdataInstance = masterdataInstance;
			}

			return BoundedContextFactory.#masterdataInstance;
		});
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata
	 *
	 * @memberof BoundedContextFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the Masterdata instance
	 */
	static async destroyInstances() {
		await BoundedContextFactory.#mutex?.runExclusive?.(async () => {
			await BoundedContextFactory.#masterdataInstance?.unload?.();
			BoundedContextFactory.#masterdataInstance = undefined;

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata
	 *
	 * @memberof BoundedContextFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name BoundedContextName
	 *
	 * @returns {string} - Name of this bounded context.
	 *
	 * @description
	 * Returns the name of this bounded context - Masterdata
	 */
	static get BoundedContextName() {
		return 'Masterdata';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #masterdataInstance = undefined;
	// #endregion
}
