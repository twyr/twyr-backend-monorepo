/**
 * Imports for this file
 *
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @ignore
 */
import merge from 'lodash.merge';

import { EVASBaseBoundedContext } from '@twyr/framework-classes';
import { APIRegistry } from '@twyr/api-registry';

/**
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @class
 * @name BaseBoundedContext
 * @extends EVASBaseBoundedContext
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [parentDomainInterface] - Parent domain interface, if any
 *
 * @classdesc A Base Bounded Context for this Server.
 */
export class BaseBoundedContext extends EVASBaseBoundedContext {
	// #region Constructor
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @ignore
	 */
	constructor(location, parentDomainInterface) {
		super(location, parentDomainInterface);
	}
	// #endregion

	// #region Startup / Shutdown
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseBoundedContext
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
		const contextApiRegistry = new APIRegistry(
			this?.name,
			super.domainInterface?.apiRegistry
		);

		this.#domainInterface = merge?.({}, super.domainInterface, {
			apiRegistry: contextApiRegistry
		});

		await super.load?.();
		return;
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseBoundedContext
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
		// Un-instantiate / clean-up references;
		this.#domainInterface = undefined;

		// Finally, Basic un-init
		await super.unload?.();
		return;
	}
	// #endregion

	// #region "Protected" methods
	// #endregion

	// #region Private Methods
	// #endregion

	// #region Getters / Setters
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseDomain
	 * @instance
	 * @override
	 * @member {object} domainInterface
	 *
	 * @returns {object} - Domain Interface
	 *
	 * @description
	 * Returns the domain interface instance that manages
	 * the IoC / API for this Domain
	 */
	get domainInterface() {
		return this.#domainInterface;
	}
	// #endregion

	// #region Private Fields
	#domainInterface = undefined;
	// #endregion
}
