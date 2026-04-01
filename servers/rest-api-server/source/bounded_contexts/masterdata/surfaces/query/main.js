/**
 * Imports for this file
 *
 * @category REST API Server/Bounded Contexts
 * @subcategory Masterdata/Surfaces/Query
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { BaseSurface } from 'baseclass:surface';
import { Mutex } from 'async-mutex';

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
	 * @ignore
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
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
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
			path: '/contact-types',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#getContactTypes?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/contact-types/:id',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#getContactTypes?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/genders',
			handler: this.#getGenders?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/genders/:id',
			handler: this.#getGenders?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/locales',
			middlewares: [],
			handler: this.#getLocales?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/locales/:id',
			middlewares: [],
			handler: this.#getLocales?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/country-codes',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#getCountryCodes?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/country-codes/:iso_code',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#getCountryCodes?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/system-messages',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#getSystemMessages?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/system-messages/:messageCode',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#getSystemMessages?.bind?.(this)
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
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @override
	 * @function
	 * @name #getContactTypes
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Retrieves the contact types available in the system
	 * mobile, email, fax, landline, etc.
	 *
	 * @example
	 * // Retrieve all contact types
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt ${base_url}/api/v1/masterdata/contact-types/
	 *
	 * Array of contact types
	 * $
	 */
	async #getContactTypes(ctxt) {
		const masterdataList = await this.#getMasterdata?.(
			'CONTACT_TYPE',
			ctxt.params.id,
			ctxt.locale
		);

		ctxt.status = masterdataList?.status;
		ctxt.body = masterdataList?.body;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @override
	 * @function
	 * @name #getGenders
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Retrieves the genders available in the system
	 *
	 * @example
	 * // Retrieve all genders
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt ${base_url}/api/v1/masterdata/genders/
	 *
	 * Array of genders
	 * $
	 */
	async #getGenders(ctxt) {
		const masterdataList = await this.#getMasterdata?.(
			'GENDER',
			ctxt.params.id,
			ctxt.locale
		);

		ctxt.status = masterdataList?.status;
		ctxt.body = masterdataList?.body;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @override
	 * @function
	 * @name #getLocales
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Retrieves the locales available in the system
	 *
	 * @example
	 * // Retrieve all locales
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt ${base_url}/api/v1/masterdata/locales/
	 *
	 * Array of locales
	 * $
	 */
	async #getLocales(ctxt) {
		const masterdataList = await this.#getMasterdata?.(
			'LOCALE',
			ctxt.params.id,
			ctxt.locale
		);

		ctxt.status = masterdataList?.status;
		ctxt.body = masterdataList?.body;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @override
	 * @function
	 * @name #getCountryCodes
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Retrieves the countries available in the system
	 *
	 * @example
	 * // Retrieve all countries
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt ${base_url}/api/v1/masterdata/country-code/
	 *
	 * Array of countries
	 * $
	 */
	async #getCountryCodes(ctxt) {
		const masterdataList = await this.#getMasterdata?.(
			'COUNTRY_CODES',
			ctxt.params.iso_code,
			ctxt.locale
		);

		ctxt.status = masterdataList?.status;
		ctxt.body = masterdataList?.body;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @override
	 * @function
	 * @name #getSystemMessages
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Retrieves the system messages available in the system
	 *
	 * @example
	 * // Retrieve all system messages
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt ${base_url}/api/v1/masterdata/system-messages/
	 *
	 * Array of countries
	 * $
	 */
	async #getSystemMessages(ctxt) {
		const masterdataList = await this.#getMasterdata?.(
			'SYSTEM_MESSAGES',
			ctxt.params.messageCode,
			ctxt.locale
		);

		ctxt.status = masterdataList?.status;
		ctxt.body = masterdataList?.body;
	}

	// #endregion

	// #region Private Methods
	/**
	 * Executes a masterdata API call and strips framework metadata fields from the response.
	 *
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
	 * @returns {Promise<object>} HTTP response data containing cleaned masterdata records.
	 */
	async #getMasterdata(masterdataType, id, localeId, extraParameter) {
		const apiRegistry = this?.domainInterface?.apiRegistry;
		let masterdataList = await apiRegistry?.execute?.(
			masterdataType,
			id,
			localeId,
			extraParameter
		);

		masterdataList.body = (masterdataList?.body ?? [])?.map?.((item) => {
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
	 * @ignore
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
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Main} - The Main surface instance.
	 */
	static async createInstances(domainInterface) {
		return await MainSurfaceFactory.#mutex?.runExclusive?.(async () => {
			if (!MainSurfaceFactory.#mainInstance) {
				const mainInstance = new Main(
					MainSurfaceFactory['$disk_unc'],
					domainInterface
				);

				await mainInstance?.load?.();
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
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the Main instance
	 */
	static async destroyInstances() {
		await MainSurfaceFactory.#mutex?.runExclusive?.(async () => {
			await MainSurfaceFactory.#mainInstance?.unload?.();
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
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name SurfaceName
	 *
	 * @returns {string} - Name of this surface.
	 *
	 * @description
	 * Returns the name of this surface - Main
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
