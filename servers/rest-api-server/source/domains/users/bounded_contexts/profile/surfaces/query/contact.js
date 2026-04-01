/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Surfaces/Query
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { MedicoBaseSurface } from 'baseclass:surface';
import { Mutex } from 'async-mutex';

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Surfaces/Query
 *
 * @class
 * @name Contact
 * @extends MedicoBaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Contact Surface for the Medico Profile Context.
 */
export class Contact extends MedicoBaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Lifecycle Methods
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Sets the user role in the request headers for access control purposes
	 * by passing it in to the base class load method
	 */
	async load() {
		await super.load?.();
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _registerSurface
	 *
	 * @returns {null} - The routes to be added to the Rest API Router
	 *
	 * @description
	 * Adds the route definitions and handlers for this surface to
	 * the Rest API Router
	 */
	async _registerSurface() {
		const baseRoutes = await super._registerSurface?.();

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#getContact?.bind?.(this)
		});
		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/:contactId',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#getContact?.bind?.(this)
		});

		return baseRoutes;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _unregisterSurface
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Removes the route definitions and handlers for this surface from
	 * the Rest API Router
	 */
	async _unregisterSurface() {
		await super._unregisterSurface?.();
		return;
	}
	// #endregion

	// #region Route Handlers
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @private
	 * @override
	 * @function
	 * @name #getContact
	 *
	 * @returns {null} - Nothing
	 *
	 * @description Retrieves the contact data associated with the logged in user.
	 * @example
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt ${base_url}/api/v1/users/profile/contact/
	 *
	 * @example
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt ${base_url}/api/v1/users/profile/contact/${contactId}
	 */
	async #getContact(ctxt) {
		const apiRegistry = this?.domainInterface?.apiRegistry;
		const contactStatus = await apiRegistry?.execute?.('READ_CONTACT', {
			user: ctxt?.state?.user,
			contactId: ctxt?.params?.contactId,
			locale: ctxt?.locale
		});

		ctxt.status = contactStatus?.status;
		ctxt.body = contactStatus?.body;
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Surfaces/Query
 *
 * @class
 * @name ContactSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Medico Domain Profile Contacts Query Surface Class Factory.
 */
export default class ContactSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Query
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
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof ContactSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Contact} - The Contact surface instance.
	 */
	static async createInstances(domainInterface) {
		return await ContactSurfaceFactory.#mutex?.runExclusive?.(async () => {
			if (!ContactSurfaceFactory.#contactInstance) {
				const contactInstance = new Contact(
					ContactSurfaceFactory['$disk_unc'],
					domainInterface
				);

				await contactInstance?.load?.();
				ContactSurfaceFactory.#contactInstance = contactInstance;
			}

			return ContactSurfaceFactory.#contactInstance;
		});
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof ContactSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the Contact instance
	 */
	static async destroyInstances() {
		await ContactSurfaceFactory.#mutex?.runExclusive?.(async () => {
			await ContactSurfaceFactory.#contactInstance?.unload?.();
			ContactSurfaceFactory.#contactInstance = undefined;
			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof ContactSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name SurfaceName
	 *
	 * @returns {string} - Name of this surface.
	 *
	 * @description
	 * Returns the name of this surface - Contact
	 */
	static get SurfaceName() {
		return 'Contact';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #contactInstance = undefined;
	// #endregion
}
