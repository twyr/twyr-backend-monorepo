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
 * @name Locale
 * @extends MedicoBaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Locale Surface for the Medico Profile Context.
 */
export class Locale extends MedicoBaseSurface {
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
	 * @memberof Locale
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
	 * @memberof Locale
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
			handler: this.#getLocale?.bind?.(this)
		});
		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/:localeId',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#getLocale?.bind?.(this)
		});

		return baseRoutes;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof Locale
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
	 * @memberof Locale
	 * @async
	 * @instance
	 * @private
	 * @override
	 * @function
	 * @name #getLocale
	 *
	 * @returns {null} - Nothing
	 *
	 * @description Retrieves the locale data associated with the logged in user.
	 * @example
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt ${base_url}/api/v1/users/profile/locale/
	 *
	 * @example
	 * $ curl -X GET -H "Content-Type: application/json" -b ./cookies.txt ${base_url}/api/v1/users/profile/locale/${localeId}
	 */
	async #getLocale(ctxt) {
		const apiRegistry = this?.domainInterface?.apiRegistry;
		const localeStatus = await apiRegistry?.execute?.('READ_LOCALE', {
			user: ctxt?.state?.user,
			localeId: ctxt?.params?.localeId,
			locale: ctxt?.locale
		});

		ctxt.status = localeStatus?.status;
		ctxt.body = localeStatus?.body;
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Surfaces/Query
 *
 * @class
 * @name LocaleSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Medico Domain Profile Locales Query Surface Class Factory.
 */
export default class LocaleSurfaceFactory extends EVASBaseFactory {
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
	 * @memberof LocaleSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Locale} - The Locale surface instance.
	 */
	static async createInstances(domainInterface) {
		return await LocaleSurfaceFactory.#mutex?.runExclusive?.(async () => {
			if (!LocaleSurfaceFactory.#localeInstance) {
				const localeInstance = new Locale(
					LocaleSurfaceFactory['$disk_unc'],
					domainInterface
				);

				await localeInstance?.load?.();
				LocaleSurfaceFactory.#localeInstance = localeInstance;
			}

			return LocaleSurfaceFactory.#localeInstance;
		});
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof LocaleSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the Locale instance
	 */
	static async destroyInstances() {
		await LocaleSurfaceFactory.#mutex?.runExclusive?.(async () => {
			await LocaleSurfaceFactory.#localeInstance?.unload?.();
			LocaleSurfaceFactory.#localeInstance = undefined;
			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Query
	 *
	 * @memberof LocaleSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name SurfaceName
	 *
	 * @returns {string} - Name of this surface.
	 *
	 * @description
	 * Returns the name of this surface - Locale
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
