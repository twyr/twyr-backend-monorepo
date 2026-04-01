/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Session Manager/Surfaces/Query
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { MedicoBaseSurface } from '../../../../base_classes/surface.js';
import { Mutex } from 'async-mutex';

/**
 * @category REST API Server/Domains/Users
 * @subcategory Session Manager/Surfaces/Query
 *
 * @class
 * @name Main
 * @extends MedicoBaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The main query surface for user session management.
 */
export class Main extends MedicoBaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Query
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
	 * @subcategory Session Manager/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {Promise<void>} Resolves when the surface has loaded.
	 *
	 * @description Loads the surface and its inherited route infrastructure.
	 */
	async load() {
		await super.load?.();
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {Promise<void>} Resolves when the surface has unloaded.
	 *
	 * @description Unloads the surface and releases inherited resources.
	 */
	async unload() {
		await super.unload?.();
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _registerSurface
	 *
	 * @returns {Promise<Array>} Routes to be added to the REST API router.
	 *
	 * @description Registers the `GET /validate-session` route for user sessions.
	 */
	async _registerSurface() {
		const baseRoutes = await super._registerSurface?.();

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'GET',
			path: '/validate-session',
			handler: this.#validateSession?.bind?.(this)
		});

		return baseRoutes;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _unregisterSurface
	 *
	 * @returns {Promise<void>} Resolves when the surface routes are unregistered.
	 *
	 * @description Removes the query surface routes from the REST API router.
	 */
	async _unregisterSurface() {
		await super._unregisterSurface?.();
		return;
	}
	// #endregion

	// #region Route Handlers
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #validateSession
	 *
	 * @param {object} ctxt - Koa context for `GET /validate-session`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Validates the user session exposed at `GET /validate-session`.
	 * This route accepts no request body and returns the current authenticated
	 * session state based on `ctxt.state.user`.
	 *
	 * @example
	 * $ curl -b ./cookies.txt ${base_url}/api/v1/users/session-manager/validate-session
	 *
	 * Session is authenticated or not authenticated, depending on the active cookie.
	 */
	async #validateSession(ctxt) {
		if (ctxt?.state?.user) {
			ctxt.status = 200;
			ctxt.body = {
				message: 'Session is authenticated',
				authenticated: true,
				user: {
					id: ctxt.state.user.id,
					role: ctxt.state.user.role,
					mobile_no: ctxt.state.user.mobile_no,
					primary_locale: ctxt.state.user.primary_locale
				}
			};
		} else {
			ctxt.status = 400;
			ctxt.body = {
				message: 'Session is not authenticated',
				authenticated: false
			};
		}
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/Users
 * @subcategory Session Manager/Surfaces/Query
 *
 * @class
 * @name MainSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc Factory for the main query surface.
 */
export default class MainSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Query
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
	 * @subcategory Session Manager/Surfaces/Query
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
	 * @returns {Promise<Main>} Resolves to the Main surface instance.
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Query
	 *
	 * @memberof MainSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves when the cached Main instance is cleared.
	 *
	 * @description Destroys the cached Main query surface instance.
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Query
	 *
	 * @memberof MainSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name SurfaceName
	 *
	 * @returns {string} Name of this surface.
	 *
	 * @description
	 * Returns the surface name: `Main`.
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
