/**
 * Imports for this file
 *
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @ignore
 */
import { dirname, join, normalize, relative } from 'node:path';

import { createErrorForPropagation } from '@twyr/error-serializer';
import { EVASBaseSurface } from '@twyr/framework-classes';

/**
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @class
 * @name BaseSurface
 * @extends EVASBaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Base Class for all Surfaces in this Server.
 */
export class BaseSurface extends EVASBaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {BaseSurface} A new BaseSurface instance.
	 *
	 * @description
	 * Initializes the BaseSurface surface using its base class.
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Lifecycle Methods
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
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
	 * Loads the base artifact, registers surface routers, and initializes validation schemas.
	 */
	async load() {
		await super.load();

		// Step 1: Setup the surface router
		await this.#setupRouter();

		// Step 2: Setup Joi validation schemas
		await this._setupValidationSchemas();
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
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
		// Remove surface routes before releasing the base artifact.
		await this._unregisterSurface();
		await super.unload();
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
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
		return [];
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
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
	 * To be overridden by artifact implementations - for un-registering
	 * the routes exposed by this surface
	 */
	async _unregisterSurface() {
		// Clear the registered routes.
		this.#routers.forEach((router) => {
			router.stack.length = 0;
		});

		// Discard the surface routers.
		this.#routers.clear();
		return;
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _rbac
	 *
	 * @param {string} [permission] - A Boolean Expression String with the required User permissions
	 *
	 * @returns {Promise<Function>} - Koa Middleware
	 *
	 * @description
	 * Used by artifact implementations for adding a RBAC middleware
	 * in their route definitions - as part of the _registerSurface
	 * implementation - to check the User permissions before reaching
	 * the actual handler
	 */
	async _rbac(/*permission*/) {
		/**
		 * @category REST API Server/Base Classes
		 * @subcategory Base Classes
		 *
		 * @memberof BaseSurface
		 * @async
		 * @inner
		 * @private
		 * @function
		 * @name permissionCheckerMiddleware
		 *
		 * @param {object} ctxt - Koa request context.
		 * @param {Function} next - Next Koa middleware.
		 *
		 * @returns {Promise<void>} Resolves after downstream middleware completes.
		 *
		 * @description
		 * No-op permission middleware used by the default base implementation.
		 */
		const permissionCheckerMiddleware =
			async function permissionCheckerMiddleware(ctxt, next) {
				await next();
			};

		// Finally, return the middleware...
		return permissionCheckerMiddleware.bind(this);
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _abac
	 *
	 * @returns {Promise<Function>} - Koa Middleware
	 *
	 * @description
	 * Used by artifact implementations for adding a ABAC middleware
	 * in their route definitions - as part of the _registerSurface
	 * implementation - to check the User permissions before reaching
	 * the actual handler
	 *
	 * Unlike the _rbac() method, this has to be a custom implementation
	 * for each domain / bounded context / surface combination - the default
	 * implementation (here) creating the no-op middleware for demo
	 * purposes
	 */
	async _abac() {
		/**
		 * @category REST API Server/Base Classes
		 * @subcategory Base Classes
		 *
		 * @memberof BaseSurface
		 * @async
		 * @inner
		 * @private
		 * @function
		 * @name assetAccessCheckerMiddleware
		 *
		 * @param {object} ctxt - Koa request context.
		 * @param {Function} next - Next Koa middleware.
		 *
		 * @returns {Promise<void>} Resolves after downstream middleware completes.
		 *
		 * @description
		 * No-op asset access middleware used by the default base implementation.
		 */
		const assetAccessCheckerMiddleware =
			async function assetAccessCheckerMiddleware(ctxt, next) {
				await next();
				return;
			};

		return assetAccessCheckerMiddleware.bind(this);
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
	 * @async
	 * @instance
	 * @protected
	 * @function
	 * @name _setupValidationSchemas
	 *
	 * @param {Map} [validationSchemaMap] - Map supplied by a derived surface.
	 *
	 * @returns {Promise<Map|undefined>} Resolves to the supplied or cached validation schema map.
	 *
	 * @description
	 * To be overridden by artifact implementations - for registering custom
	 * validation schemas with the surface's Joi validation instance
	 */
	async _setupValidationSchemas(validationSchemaMap) {
		return validationSchemaMap;
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
	 * @instance
	 * @protected
	 * @function
	 * @name _convertValidationErrorToHandlerError
	 *
	 * @param {object} [joiError] - Joi validation error containing field-level details.
	 * @param {string} [errorCode] - Code assigned to the aggregate handler error.
	 *
	 * @returns {Error|undefined} The aggregate handler error, or undefined when no Joi error is supplied.
	 *
	 * @description
	 * Used by artifact implementations for converting a
	 * Joi validation error set to something that the route
	 * handler can throw - as part of its input data validation
	 * logic - to send a comprehensible error response to the client
	 */
	_convertValidationErrorToHandlerError(joiError, errorCode) {
		let returnError = undefined;
		if (!joiError) return returnError;

		// Step 1: Convert each Joi detail into an error with its validation context.
		const errors = joiError.details.map((d) => {
			const e = new Error(d.message);
			e.code = d.message;
			e.customInfo = d.context;

			return e;
		});

		// Step 2: Combine the detail errors under the supplied handler error code.
		returnError = createErrorForPropagation(errorCode, errors);
		return returnError;
	}
	// #endregion

	// #region Private Methods
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #computeSurfacePath
	 *
	 * @returns {Promise<string>} The normalized surface path prefix.
	 *
	 * @description
	 * Computes the URL prefix for the surface from its filesystem location and class name.
	 */
	async #computeSurfacePath() {
		let inflection = await import('inflection');
		inflection = inflection['default'];

		// Step 1: Compute the URL Path
		let surfacePath = relative(
			// eslint-disable-next-line no-undef
			dirname(serverFilePath),
			dirname(this.__dirname)
		);

		// Step 2: Sanitize the URL Path - remove reserved words, and replace underscores with hyphens
		surfacePath = surfacePath.replaceAll('_', '-');
		[
			'server',
			'domains',
			'bounded-contexts',
			'surfaces',
			'command',
			'query',
			'middlewares',
			'repositories'
		].forEach((reservedWord) => {
			surfacePath = surfacePath.replaceAll(reservedWord, '');
		});

		surfacePath = inflection.transform(surfacePath, [
			'foreignKey',
			'dasherize'
		]);

		// Step 3: Append the surface name to the URL path
		let inflectedName = inflection.transform(this.name, [
			'foreignKey',
			'dasherize'
		]);

		surfacePath =
			inflectedName === 'main-id'
				? surfacePath
				: join(surfacePath, inflectedName);

		// Step 4: Normalize the final URL path
		surfacePath = surfacePath.replaceAll('-id', '');
		surfacePath = normalize(surfacePath);
		if (surfacePath.endsWith('/')) surfacePath = surfacePath.slice(0, -1);

		return surfacePath;
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #setupRouter
	 *
	 * @returns {Promise<void>} Resolves after all routes are registered.
	 *
	 * @description
	 * Builds versioned routers for this surface and mounts them on the ingress surface.
	 */
	async #setupRouter() {
		// Step 1: Compute the surface path based on the file location
		// of the surface artifact - to be used as the prefix for all routes
		// registered by this surface
		const surfacePath = await this.#computeSurfacePath();

		// Step 2: Get the route definitions supplied by the derived surface
		const surface = await this._registerSurface();

		// Step 3: For each route definition returned by the surface, add the route to
		// the surface router
		let Router = await import('@koa/router');
		Router = Router['default'];

		for (const restApi of surface) {
			const restApiVersion = restApi.version ?? 1;

			const httpMethod = restApi.httpMethod.toLowerCase();
			const restPath = normalize(restApi.path);

			const routeMiddlewares = restApi.middlewares?.slice() ?? [];
			routeMiddlewares.push(restApi.handler);

			let router = this.#routers.get(`v${restApiVersion}`) ?? null;
			if (!router) {
				router = new Router({
					prefix: `${surfacePath}`
				});

				this.#routers.set(`v${restApiVersion}`, router);
			}

			// eslint-disable-next-line security/detect-object-injection
			router[httpMethod](restPath, ...routeMiddlewares);
		}

		// Step 4: Attach each versioned surface router to the REST ingress router
		const restApiInstance =
			await this.domainInterface.iocContainer.resolve('RestApi');
		const mainRouters = restApiInstance.routers;

		this.#routers.forEach((router, key) => {
			mainRouters.get(key).use(router.routes());
		});
	}
	// #endregion

	// #region Private Fields
	#routers = new Map();
	// #endregion
}
