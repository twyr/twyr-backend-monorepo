/**
 * Imports for this file
 *
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Surfaces/Query
 *
 * @ignore
 */
import { Mutex } from 'async-mutex';

import { EVASBaseFactory } from '@twyr/framework-classes';

import { SystemAdminBaseSurface } from 'baseclass:surface';

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Surfaces/Query
 *
 * @class
 * @name Contact
 * @extends SystemAdminBaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Contact Surface for the System Admin Profile Context.
 */
export class Contact extends SystemAdminBaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Contact
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {Contact} A new Contact instance.
	 *
	 * @description
	 * Initializes the Contact surface using its base class.
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Lifecycle Methods
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Contact
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
	 * Loads the inherited surface infrastructure for Contact.
	 */
	async load() {
		await super.load();
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _registerSurface
	 *
	 * @returns {Promise<object[]>} Resolves to the route definitions exposed by the surface.
	 *
	 * @description
	 * Returns inherited and local route definitions, including their handlers
	 * and any authorization middleware.
	 */
	async _registerSurface() {
		// Step 1: Get the routes supplied by the base surface.
		const baseRoutes = await super._registerSurface();

		// Step 2: Add the routes and request middleware exposed by this surface.
		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/',
			middlewares: [await this._rbac('registered')],
			handler: this.#getContact.bind(this)
		});
		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/:contactId',
			middlewares: [await this._rbac('registered')],
			handler: this.#getContact.bind(this)
		});

		return baseRoutes;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _unregisterSurface
	 *
	 * @returns {Promise<void>} Resolves after registration changes complete.
	 *
	 * @description
	 * Removes the route definitions and handlers for this surface from
	 * the Rest API Router
	 */
	async _unregisterSurface() {
		await super._unregisterSurface();
		return;
	}
	// #endregion

	// #region Route Handlers
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getContact
	 *
	 * @param {object} ctxt - Koa context for `GET /` or `GET /:contactId`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `GET /` and `GET /:contactId`.
	 * Reads contact data for the authenticated system admin and serializes the result.
	 * The optional contactId path parameter selects one record; omitting it lists records.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Invocation configuration [./servers/curl_example_data/api_v1_system_admin_profile_contact_read.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/system-admin/profile/contact/"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_system_admin_profile_contact_read.curl "${base_url}/api/v1/system-admin/profile/contact/"
	 *
	 * // Invocation configuration [./servers/curl_example_data/api_v1_system_admin_profile_contact_by_contact_id.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/system-admin/profile/contact/${contactId}"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_system_admin_profile_contact_by_contact_id.curl "${base_url}/api/v1/system-admin/profile/contact/${contactId}"
	 */
	async #getContact(ctxt) {
		// Step 1: Fetch the requested data through the middleware API.
		const apiRegistry = this.domainInterface.apiRegistry;
		const contactStatus = await apiRegistry.execute('READ_CONTACT', {
			user: ctxt.state.user,
			contactId: ctxt.params.contactId,
			locale: ctxt.locale
		});

		// Step 2: Serialize the middleware result for the response.
		const responseBody =
			await this.domainInterface.serializer.serializeAsync(
				'system_admin_contact',
				contactStatus.body
			);

		// Step 3: Write the HTTP response using the serialized result.
		ctxt.status = contactStatus.status;
		ctxt.body = responseBody;
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Surfaces/Query
 *
 * @class
 * @name ContactSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The System Admin Domain Profile Contacts Query Surface Class Factory.
 */
export default class ContactSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof ContactSurfaceFactory
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @returns {ContactSurfaceFactory} A new ContactSurfaceFactory instance.
	 *
	 * @description
	 * Initializes the ContactSurfaceFactory factory using its base class.
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof ContactSurfaceFactory
	 * @async
	 * @static
	 * @public
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<Contact>} Resolves to the loaded Contact surface instance.
	 *
	 * @description
	 * Creates and loads the surface instance on first use, then reuses it.
	 * Serializes access to the cached instance with the factory mutex.
	 */
	static async createInstances(domainInterface) {
		// Create or reuse the loaded instance under the factory lock.
		return await ContactSurfaceFactory.#mutex.runExclusive(async () => {
			if (!ContactSurfaceFactory.#contactInstance) {
				const contactInstance = new Contact(
					ContactSurfaceFactory['$disk_unc'],
					domainInterface
				);

				await contactInstance.load();
				ContactSurfaceFactory.#contactInstance = contactInstance;
			}

			return ContactSurfaceFactory.#contactInstance;
		});
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof ContactSurfaceFactory
	 * @async
	 * @static
	 * @public
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves after the cached instance is unloaded and released.
	 *
	 * @description
	 * Unloads the cached surface instance and clears the factory reference
	 * under the factory mutex.
	 */
	static async destroyInstances() {
		// Unload and release cached instances under the factory lock.
		await ContactSurfaceFactory.#mutex.runExclusive(async () => {
			await ContactSurfaceFactory.#contactInstance?.unload();
			ContactSurfaceFactory.#contactInstance = undefined;
			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof ContactSurfaceFactory
	 * @static
	 * @public
	 * @override
	 * @readonly
	 * @function
	 * @name SurfaceName
	 *
	 * @returns {string} - Name of this surface.
	 *
	 * @description
	 * Returns the registered surface name: `Contact`.
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
