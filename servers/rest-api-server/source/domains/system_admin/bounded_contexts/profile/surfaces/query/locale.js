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
 * @name Locale
 * @extends SystemAdminBaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Locale Surface for the System Admin Profile Context.
 */
export class Locale extends SystemAdminBaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Locale
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {Locale} A new Locale instance.
	 *
	 * @description
	 * Initializes the Locale surface using its base class.
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
	 * @memberof Locale
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
	 * Loads the inherited surface infrastructure for Locale.
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
	 * @memberof Locale
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
			handler: this.#getLocale.bind(this)
		});
		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/:localeId',
			middlewares: [await this._rbac('registered')],
			handler: this.#getLocale.bind(this)
		});

		return baseRoutes;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Locale
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
	 * @memberof Locale
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getLocale
	 *
	 * @param {object} ctxt - Koa context for `GET /` or `GET /:localeId`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `GET /` and `GET /:localeId`.
	 * Reads locale data for the authenticated system admin and serializes the result.
	 * The optional localeId path parameter selects one record; omitting it lists records.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Invocation configuration [./servers/curl_example_data/api_v1_system_admin_profile_locale_read.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/system-admin/profile/locale/"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_system_admin_profile_locale_read.curl "${base_url}/api/v1/system-admin/profile/locale/"
	 *
	 * // Invocation configuration [./servers/curl_example_data/api_v1_system_admin_profile_locale_by_locale_id.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/system-admin/profile/locale/${localeId}"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_system_admin_profile_locale_by_locale_id.curl "${base_url}/api/v1/system-admin/profile/locale/${localeId}"
	 */
	async #getLocale(ctxt) {
		// Step 1: Fetch the requested data through the middleware API.
		const apiRegistry = this.domainInterface.apiRegistry;
		const localeStatus = await apiRegistry.execute('READ_LOCALE', {
			user: ctxt.state.user,
			localeId: ctxt.params.localeId,
			locale: ctxt.locale
		});

		// Step 2: Serialize the middleware result for the response.
		const responseBody =
			await this.domainInterface.serializer.serializeAsync(
				'system_admin_locale',
				localeStatus.body
			);

		// Step 3: Write the HTTP response using the serialized result.
		ctxt.status = localeStatus.status;
		ctxt.body = responseBody;
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Surfaces/Query
 *
 * @class
 * @name LocaleSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The System Admin Domain Profile Locales Query Surface Class Factory.
 */
export default class LocaleSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof LocaleSurfaceFactory
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @returns {LocaleSurfaceFactory} A new LocaleSurfaceFactory instance.
	 *
	 * @description
	 * Initializes the LocaleSurfaceFactory factory using its base class.
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
	 * @memberof LocaleSurfaceFactory
	 * @async
	 * @static
	 * @public
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<Locale>} Resolves to the loaded Locale surface instance.
	 *
	 * @description
	 * Creates and loads the surface instance on first use, then reuses it.
	 * Serializes access to the cached instance with the factory mutex.
	 */
	static async createInstances(domainInterface) {
		// Create or reuse the loaded instance under the factory lock.
		return await LocaleSurfaceFactory.#mutex.runExclusive(async () => {
			if (!LocaleSurfaceFactory.#localeInstance) {
				const localeInstance = new Locale(
					LocaleSurfaceFactory['$disk_unc'],
					domainInterface
				);

				await localeInstance.load();
				LocaleSurfaceFactory.#localeInstance = localeInstance;
			}

			return LocaleSurfaceFactory.#localeInstance;
		});
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof LocaleSurfaceFactory
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
		await LocaleSurfaceFactory.#mutex.runExclusive(async () => {
			await LocaleSurfaceFactory.#localeInstance?.unload();
			LocaleSurfaceFactory.#localeInstance = undefined;
			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof LocaleSurfaceFactory
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
	 * Returns the registered surface name: `Locale`.
	 */
	static get SurfaceName() {
		return 'Locale';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #localeInstance = undefined;
	// #endregion
}
