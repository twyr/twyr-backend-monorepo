/**
 * Imports for this file
 *
 * @category Packages/Framework Classes
 * @subcategory Base Classes
 *
 * @ignore
 */
import { EVASBaseArtifact } from './evas-base-artifact.js';
import { BoundedContextLifecycleManagerFactory } from '../lifecycle_managers/bounded-context-lifecycle-manager.js';

/**
 * @category Packages/Framework Classes
 * @subcategory Base Classes
 *
 * @class
 * @name EVASBaseBoundedContext
 * @extends EVASBaseArtifact
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc
 * The Base Class for all BoundedContexts.
 */
export class EVASBaseBoundedContext extends EVASBaseArtifact {
	// #region Constructor
	/**
	 * @category Packages/Framework Classes
	 * @subcategory Base Classes
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location);
		this.#domainInterface = domainInterface;
	}
	// #endregion

	// #region Startup / Shutdown
	/**
	 * @category Packages/Framework Classes
	 * @subcategory Base Classes
	 *
	 * @memberof EVASBaseBoundedContext
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {null} - Nothing.
	 *
	 * @description
	 * Loads / Initializes / Starts-up sub-artifacts.
	 */
	async load() {
		// Step 1: Basic init
		await super.load?.();

		// Step 2: Instantiate the loader
		await BoundedContextLifecycleManagerFactory?.createInstances?.(
			this?.__dirname,
			this?.domainInterface
		);

		return;
	}

	/**
	 * @category Packages/Framework Classes
	 * @subcategory Base Classes
	 *
	 * @memberof EVASBaseBoundedContext
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {null} - Nothing.
	 *
	 * @description
	 * Shuts-down / Un-initializes / Un-loads sub-artifacts.
	 */
	async unload() {
		// Step 1: Unload the sub-artifacts
		await BoundedContextLifecycleManagerFactory?.destroyInstances?.(
			this?.__dirname
		);

		// Step 2: Un-instantiate.
		this.#domainInterface = undefined;

		// Step 3: Basic un-init
		await super.unload?.();
		return;
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * @category Packages/Framework Classes
	 * @subcategory Base Classes
	 *
	 * @memberof EVASBaseBoundedContext
	 * @instance
	 * @member {object} domainInterface
	 *
	 * @returns {object} - The Domain's interface
	 *
	 * @description
	 * Returns the interface exposed by this BoundedContext's
	 * Domain to its sub-artifacts
	 */
	get domainInterface() {
		return this.#domainInterface;
	}
	// #endregion

	// #region Private Fields
	#domainInterface = undefined;
	// #endregion
}
