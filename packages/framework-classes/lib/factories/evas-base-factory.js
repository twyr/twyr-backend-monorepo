/**
 * Imports for this file
 *
 * @category Packages/Framework Classes
 * @subcategory Factories
 *
 * @ignore
 */
import { EVASBaseClass } from '../evas-base-class.js';

/**
 * @category Packages/Framework Classes
 * @subcategory Factories
 *
 * @class
 * @name EVASBaseFactory
 * @extends EVASBaseClass
 *
 * @classdesc
 * The Base Class for all Factories in the Server.
 * Typically, one would expect that each Artifact has one
 * to instantiate instances of the Artifact class.
 */
export class EVASBaseFactory extends EVASBaseClass {
	// #region Constructor
	/**
	 * @category Packages/Framework Classes
	 * @subcategory Factories
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category Packages/Framework Classes
	 * @subcategory Factories
	 *
	 * @memberof EVASBaseFactory
	 * @async
	 * @static
	 * @function
	 * @name createInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Returns nothing. Derived classes need to return an instance of whatever they are instantiating
	 */
	static async createInstances() {
		return;
	}

	/**
	 * @category Packages/Framework Classes
	 * @subcategory Factories
	 *
	 * @memberof EVASBaseFactory
	 * @async
	 * @static
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Returns nothing. Derived classes need to unload instances of whatever they are instantiating
	 */
	static async destroyInstances() {
		return;
	}
	// #endregion
}
