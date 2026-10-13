/**
 * Imports for this file
 *
 * @category REST API Server/Bounded Contexts
 * @subcategory Masterdata/Surfaces/Query
 *
 * @ignore
 */
import { Mutex } from 'async-mutex';

import { EVASBaseFactory } from '@twyr/framework-classes';

import { BaseSurface } from 'baseclass:surface';

/**
 * @category REST API Server/Bounded Contexts
 * @subcategory Masterdata/Surfaces/Query
 *
 * @class
 * @name Main
 * @extends BaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Main Surface for the Session Manager Module.
 */
export class Main extends BaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {Main} A new Main instance.
	 *
	 * @description
	 * Initializes the Main surface using its base class.
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Lifecycle Methods
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
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
	 * Loads the inherited surface infrastructure for Main.
	 */
	async load() {
		await super.load();
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
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
			path: '/contact-types',
			middlewares: [await this._rbac('registered')],
			handler: this.#getContactTypes.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/contact-types/:id',
			middlewares: [await this._rbac('registered')],
			handler: this.#getContactTypes.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/genders',
			handler: this.#getGenders.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/genders/:id',
			handler: this.#getGenders.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/locales',
			middlewares: [],
			handler: this.#getLocales.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/locales/:id',
			middlewares: [],
			handler: this.#getLocales.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/country-codes',
			middlewares: [await this._rbac('registered')],
			handler: this.#getCountryCodes.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/country-codes/:iso_code',
			middlewares: [await this._rbac('registered')],
			handler: this.#getCountryCodes.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/system-messages',
			middlewares: [await this._rbac('registered')],
			handler: this.#getSystemMessages.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'GET',
			path: '/system-messages/:messageCode',
			middlewares: [await this._rbac('registered')],
			handler: this.#getSystemMessages.bind(this)
		});

		return baseRoutes;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
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
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getContactTypes
	 *
	 * @param {object} ctxt - Koa context for `GET /contact-types` or `GET /contact-types/:id`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `GET /contact-types` and `GET /contact-types/:id`.
	 * Fetches localized contact types such as mobile and email. The optional
	 * `id` path parameter selects one contact type.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Invocation configuration [./servers/curl_example_data/api_v1_masterdata_contact_types.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/masterdata/contact-types"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_masterdata_contact_types.curl "${base_url}/api/v1/masterdata/contact-types"
	 *
	 * // Invocation configuration [./servers/curl_example_data/api_v1_masterdata_contact_types_by_id.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/masterdata/contact-types/${id}"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_masterdata_contact_types_by_id.curl "${base_url}/api/v1/masterdata/contact-types/${id}"
	 */
	async #getContactTypes(ctxt) {
		// Step 1: Fetch the requested master data for the request locale.
		const masterdataList = await this.#getMasterdata(
			'CONTACT_TYPE',
			ctxt.params.id,
			ctxt.locale
		);

		// Step 2: Write the middleware result to the HTTP response.
		ctxt.status = masterdataList.status;
		ctxt.body = masterdataList.body;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getGenders
	 *
	 * @param {object} ctxt - Koa context for `GET /genders` or `GET /genders/:id`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `GET /genders` and `GET /genders/:id`.
	 * Fetches localized gender records. The optional `id` path parameter selects
	 * one gender record.
	 *
	 * @example
	 * // Invocation configuration [./servers/curl_example_data/api_v1_masterdata_genders.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" "${base_url}/api/v1/masterdata/genders"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_masterdata_genders.curl "${base_url}/api/v1/masterdata/genders"
	 *
	 * // Invocation configuration [./servers/curl_example_data/api_v1_masterdata_genders_by_id.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" "${base_url}/api/v1/masterdata/genders/${id}"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_masterdata_genders_by_id.curl "${base_url}/api/v1/masterdata/genders/${id}"
	 */
	async #getGenders(ctxt) {
		// Step 1: Fetch the requested master data for the request locale.
		const masterdataList = await this.#getMasterdata(
			'GENDER',
			ctxt.params.id,
			ctxt.locale
		);

		// Step 2: Write the middleware result to the HTTP response.
		ctxt.status = masterdataList.status;
		ctxt.body = masterdataList.body;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getLocales
	 *
	 * @param {object} ctxt - Koa context for `GET /locales` or `GET /locales/:id`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `GET /locales` and `GET /locales/:id`.
	 * Fetches enabled locales and their labels in their own language.
	 * The optional `id` path parameter selects one locale code.
	 *
	 * @example
	 * // Invocation configuration [./servers/curl_example_data/api_v1_masterdata_locales.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" "${base_url}/api/v1/masterdata/locales"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_masterdata_locales.curl "${base_url}/api/v1/masterdata/locales"
	 *
	 * // Invocation configuration [./servers/curl_example_data/api_v1_masterdata_locales_by_id.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" "${base_url}/api/v1/masterdata/locales/${id}"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_masterdata_locales_by_id.curl "${base_url}/api/v1/masterdata/locales/${id}"
	 */
	async #getLocales(ctxt) {
		// Step 1: Fetch the requested master data for the request locale.
		const masterdataList = await this.#getMasterdata(
			'LOCALE',
			ctxt.params.id,
			ctxt.locale
		);

		// Step 2: Write the middleware result to the HTTP response.
		ctxt.status = masterdataList.status;
		ctxt.body = masterdataList.body;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getCountryCodes
	 *
	 * @param {object} ctxt - Koa context for `GET /country-codes` or `GET /country-codes/:iso_code`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `GET /country-codes` and `GET /country-codes/:iso_code`.
	 * Fetches enabled country codes for the request locale. The optional
	 * `iso_code` path parameter selects one country.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Invocation configuration [./servers/curl_example_data/api_v1_masterdata_country_codes.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/masterdata/country-codes"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_masterdata_country_codes.curl "${base_url}/api/v1/masterdata/country-codes"
	 *
	 * // Invocation configuration [./servers/curl_example_data/api_v1_masterdata_country_codes_by_iso_code.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/masterdata/country-codes/${iso_code}"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_masterdata_country_codes_by_iso_code.curl "${base_url}/api/v1/masterdata/country-codes/${iso_code}"
	 */
	async #getCountryCodes(ctxt) {
		// Step 1: Fetch the requested master data for the request locale.
		const masterdataList = await this.#getMasterdata(
			'COUNTRY_CODES',
			ctxt.params.iso_code,
			ctxt.locale
		);

		// Step 2: Write the middleware result to the HTTP response.
		ctxt.status = masterdataList.status;
		ctxt.body = masterdataList.body;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getSystemMessages
	 *
	 * @param {object} ctxt - Koa context for `GET /system-messages` or `GET /system-messages/:messageCode`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `GET /system-messages` and `GET /system-messages/:messageCode`.
	 * Fetches localized system messages. The optional `messageCode` path
	 * parameter is passed to the middleware as the master record identifier.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Invocation configuration [./servers/curl_example_data/api_v1_masterdata_system_messages.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/masterdata/system-messages"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_masterdata_system_messages.curl "${base_url}/api/v1/masterdata/system-messages"
	 *
	 * // Invocation configuration [./servers/curl_example_data/api_v1_masterdata_system_messages_by_message_code.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/masterdata/system-messages/${messageCode}"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_masterdata_system_messages_by_message_code.curl "${base_url}/api/v1/masterdata/system-messages/${messageCode}"
	 */
	async #getSystemMessages(ctxt) {
		// Step 1: Fetch the requested master data for the request locale.
		const masterdataList = await this.#getMasterdata(
			'SYSTEM_MESSAGES',
			ctxt.params.messageCode,
			ctxt.locale
		);

		// Step 2: Write the middleware result to the HTTP response.
		ctxt.status = masterdataList.status;
		ctxt.body = masterdataList.body;
	}

	// #endregion

	// #region Private Methods
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getMasterdata
	 *
	 * @param {string} masterdataType - API registry key to execute.
	 * @param {string} id - Optional record identifier.
	 * @param {string} localeId - Locale used to resolve translated records.
	 * @param {string} extraParameter - Optional extra parameter forwarded to the API.
	 *
	 * @returns {Promise<object>} HTTP response data containing cleaned masterdata records.
	 *
	 * @description
	 * Executes a masterdata API call and strips framework metadata fields from the response.
	 */
	async #getMasterdata(masterdataType, id, localeId, extraParameter) {
		// Step 1: Fetch the requested master data through the API registry.
		const apiRegistry = this.domainInterface.apiRegistry;
		let masterdataList = await apiRegistry.execute(
			masterdataType,
			id,
			localeId,
			extraParameter
		);

		// Step 2: Remove storage timestamps from each record before returning the result.
		masterdataList.body = (masterdataList.body ?? []).map((item) => {
			delete item['created_at'];
			delete item['updated_at'];

			return item;
		});

		return masterdataList;
	}
	// #endregion
}

/**
 * @category REST API Server/Bounded Contexts
 * @subcategory Masterdata/Surfaces/Query
 *
 * @class
 * @name MainSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Session Manager Module Main Surface Class Factory.
 */
export default class MainSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof MainSurfaceFactory
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @returns {MainSurfaceFactory} A new MainSurfaceFactory instance.
	 *
	 * @description
	 * Initializes the MainSurfaceFactory factory using its base class.
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof MainSurfaceFactory
	 * @async
	 * @static
	 * @public
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<Main>} Resolves to the loaded Main surface instance.
	 *
	 * @description
	 * Creates and loads the surface instance on first use, then reuses it.
	 * Serializes access to the cached instance with the factory mutex.
	 */
	static async createInstances(domainInterface) {
		// Create or reuse the loaded instance under the factory lock.
		return await MainSurfaceFactory.#mutex.runExclusive(async () => {
			if (!MainSurfaceFactory.#mainInstance) {
				const mainInstance = new Main(
					MainSurfaceFactory['$disk_unc'],
					domainInterface
				);

				await mainInstance.load();
				MainSurfaceFactory.#mainInstance = mainInstance;
			}

			return MainSurfaceFactory.#mainInstance;
		});
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof MainSurfaceFactory
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
		await MainSurfaceFactory.#mutex.runExclusive(async () => {
			await MainSurfaceFactory.#mainInstance?.unload();
			MainSurfaceFactory.#mainInstance = undefined;

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof MainSurfaceFactory
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
	 * Returns the registered surface name: `Main`.
	 */
	static get SurfaceName() {
		return 'Main';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #mainInstance = undefined;
	// #endregion
}
