/**
 * Imports for this file
 *
 * @category REST API Server/Bounded Contexts
 * @subcategory Health/Surfaces/Query
 *
 * @ignore
 */
import { Mutex } from 'async-mutex';

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
	 * @subcategory Health/Surfaces/Query
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

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Health/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @public
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {Promise<void>} Resolves after unloading completes.
	 *
	 * @description
	 * Unloads the surface infrastructure.
	 */
	async unload() {
		await super.unload();
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
			middlewares: [],
			handler: this.#ok.bind(this)
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
	 * @subcategory Health/Surfaces/Query
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #ok
	 *
	 * @param {object} ctxt - Koa context for `GET /`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `GET /`.
	 * Writes HTTP 200 to indicate that the REST server is responding.
	 *
	 * @example
	 * // Invocation configuration [./servers/curl_example_data/api_v1_health.curl]:
	 * $ curl -X GET -H "Content-Type: application/json" "${base_url}/api/v1/health/"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_health.curl "${base_url}/api/v1/health/"
	 */
	async #ok(ctxt) {
		// Return a successful health-check status.
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
	 * @subcategory Health/Surfaces/Query
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
	 * @subcategory Health/Surfaces/Query
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
	 * @subcategory Health/Surfaces/Query
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
