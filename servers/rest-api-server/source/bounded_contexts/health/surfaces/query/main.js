/**
 * Imports for this file
 *
 * @category REST API Server/Bounded Contexts
 * @subcategory Health/Surfaces/Query
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { BaseSurface } from 'baseclass:surface';

/**
 * @category REST API Server/Bounded Contexts
 * @subcategory Health/Surfaces/Query
 *
 * @class
 * @name Main
 * @extends BaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Main Query Surface for the Health Module.
 */
export class Main extends BaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health/Surfaces/Query
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
	 * @subcategory Health/Surfaces/Query
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
	 * Calls the base class load method
	 */
	async load() {
		await super.load?.();
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Cleanup on unload
	 */
	async unload() {
		await super.unload?.();
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health/Surfaces/Query
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
			path: '/',
			middlewares: [],
			handler: this.#ok?.bind?.(this)
		});

		return baseRoutes;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health/Surfaces/Query
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
	 * @subcategory Health/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #ok
	 *
	 * @param {object} ctxt - The Koa context object
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Returns HTTP status 200 for health checks
	 *
	 * @example
	 * $ curl -X GET -H "Content-Type: application/json" ${base_url}/api/v1/health/
	 */
	async #ok(ctxt) {
		ctxt.status = 200;
	}
	// #endregion
}

/**
 * @category REST API Server/Bounded Contexts
 * @subcategory Health/Surfaces/Query
 *
 * @class
 * @name MainSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Health Module Main Query Surface Class Factory.
 */
export default class MainSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health/Surfaces/Query
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
	 * @subcategory Health/Surfaces/Query
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
		if (!MainSurfaceFactory.#mainInstance) {
			const mainInstance = new Main(
				MainSurfaceFactory['$disk_unc'],
				domainInterface
			);

			await mainInstance?.load?.();
			MainSurfaceFactory.#mainInstance = mainInstance;
		}

		return MainSurfaceFactory.#mainInstance;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health/Surfaces/Query
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
		await MainSurfaceFactory.#mainInstance?.unload?.();
		MainSurfaceFactory.#mainInstance = undefined;

		return;
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health/Surfaces/Query
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
	static #mainInstance = undefined;
	// #endregion
}
