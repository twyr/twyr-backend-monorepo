/**
 * Imports for this file
 *
 * @category Packages/Framework Classes
 * @subcategory Core
 *
 * @ignore
 */

/**
 * @category Packages/Framework Classes
 * @subcategory Core
 *
 * @class
 * @name EVASBaseClass
 *
 * @classdesc
 * The Framework Base Class. All artifacts, in general, across
 * the servers in this monorepo derive from this
 */
export class EVASBaseClass {
	// #region Constructor
	/**
	 * @category Packages/Framework Classes
	 * @subcategory Core
	 *
	 * @ignore
	 */
	constructor() {
		// Intentionally blank
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * @category Packages/Framework Classes
	 * @subcategory Core
	 *
	 * @memberof EVASBaseClass
	 * @instance
	 * @readonly
	 * @member {string} name
	 * @returns {string} Name of the Class.
	 */
	get name() {
		return this?.constructor?.name ?? 'EVASBaseClass';
	}
	// #endregion
}
