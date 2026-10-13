/**
 * Imports for this file
 *
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @ignore
 */
import { EVASBaseEventHandler } from '@twyr/framework-classes';

/**
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @class
 * @name BaseEventHandler
 * @extends EVASBaseEventHandler
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Base Class for all Event Handlers.
 */
export class BaseEventHandler extends EVASBaseEventHandler {
	// #region Constructor
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseEventHandler
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {BaseEventHandler} A new BaseEventHandler instance.
	 *
	 * @description
	 * Initializes the BaseEventHandler event handler using its base class.
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Lifecycle Methods
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseEventHandler
	 * @async
	 * @instance
	 * @public
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {Promise<void>} Resolves after loading completes.
	 *
	 * @description
	 * Loads the inherited event handler infrastructure for BaseEventHandler.
	 */
	async load() {
		// Load the base artifact, then register the derived event handlers.
		await super.load();
		await this._registerHandlers();
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseEventHandler
	 * @async
	 * @instance
	 * @public
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {Promise<void>} Resolves after unloading completes.
	 *
	 * @description
	 * Unloads the event handler infrastructure.
	 */
	async unload() {
		// Remove event handlers before releasing the base artifact.
		await this._unregisterHandlers();
		await super.unload();
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseEventHandler
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _registerHandlers
	 *
	 * @returns {Promise<object[]>} Resolves to the inherited registration definitions; empty by default.
	 *
	 * @description
	 * Provides an empty set of registration definitions for derived artifacts to extend.
	 */
	async _registerHandlers() {
		return [];
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseEventHandler
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _unregisterHandlers
	 *
	 * @returns {Promise<void>} Resolves after registration changes complete.
	 *
	 * @description
	 * To be overridden by artifact implementations - for removing their API
	 * from the eventEmitter in the domainInterface
	 */
	async _unregisterHandlers() {
		return;
	}
	// #endregion
}
