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
	 * @ignore
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
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * To be overridden by artifact implementations - for implementing custom
	 * start logic
	 */
	async load() {
		await super.load?.();

		// Step 1: Setup the surface router
		await this.#setupRouter?.();

		// Step 2: Setup Joi validation schemas
		await this._setupValidationSchemas?.();
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * To be overridden by artifact implementations - for implementing custom
	 * stop logic
	 */
	async unload() {
		await this?._unregisterSurface?.();
		await super.unload?.();
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
	 * @override
	 * @function
	 * @name _registerSurface
	 *
	 * @returns {Array} - Array containing the routes exposed by this surface
	 *
	 * @description
	 * To be overridden by artifact implementations - for registering custom
	 * routes with the surface's Koa Router instance
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
	 * @override
	 * @function
	 * @name _unregisterSurface
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * To be overridden by artifact implementations - for un-registering
	 * the routes exposed by this surface
	 */
	async _unregisterSurface() {
		this.#routers?.forEach((router) => {
			router.stack.length = 0;
		});

		this.#routers?.clear?.();
		return;
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _rbac
	 *
	 * @param {string} [permission] - A Boolean Expression String with the required User permissions
	 *
	 * @returns {Function} - Koa Middleware
	 *
	 * @description
	 * Used by artifact implementations for adding a RBAC middleware
	 * in their route definitions - as part of the _registerSurface
	 * implementation - to check the User permissions before reaching
	 * the actual handler
	 */
	async _rbac(/*permission*/) {
		/**
		 * No-op permission middleware used by the default base implementation.
		 *
		 * @category REST API Server/Base Classes
		 * @subcategory Base Classes
		 *
		 * @param {object} ctxt - Koa request context.
		 * @param {Function} next - Next Koa middleware.
		 * @returns {Promise<void>} Resolves after downstream middleware completes.
		 */
		const permissionCheckerMiddleware =
			async function permissionCheckerMiddleware(ctxt, next) {
				await next?.();
			};

		// Finally, return the middleware...
		return permissionCheckerMiddleware?.bind?.(this);
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _abac
	 *
	 * @returns {Function} - Koa Middleware
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
		 * No-op asset access middleware used by the default base implementation.
		 *
		 * @category REST API Server/Base Classes
		 * @subcategory Base Classes
		 *
		 * @param {object} ctxt - Koa request context.
		 * @param {Function} next - Next Koa middleware.
		 * @returns {Promise<void>} Resolves after downstream middleware completes.
		 */
		const assetAccessCheckerMiddleware =
			async function assetAccessCheckerMiddleware(ctxt, next) {
				await next?.();
				return;
			};

		return assetAccessCheckerMiddleware?.bind?.(this);
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseSurface
	 * @async
	 * @instance
	 * @function
	 * @name _setupValidationSchemas
	 *
	 * @param {string} [validationSchemaMap] - Map to be populated with the validation schemas.
	 *
	 * @returns {Map} - Map containing the validation schemas
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
	 * @function
	 * @name _convertValidationErrorToHandlerError
	 *
	 * @param {Object} [joiError] - The Joi validation error object
	 * @param {string} [errorCode] - The error code to be set on the error object
	 *
	 * @returns {Error} - Error for the handler to throw
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

		const errors = joiError?.details?.map?.((d) => {
			const e = new Error(d?.message);
			e.code = d?.message;
			e.customInfo = d?.context;

			return e;
		});

		returnError = createErrorForPropagation?.(errorCode, errors);
		return returnError;
	}
	// #endregion

	// #region Private Methods
	/**
	 * Computes the URL prefix for the surface from its filesystem location and class name.
	 *
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
	 */
	async #computeSurfacePath() {
		let inflection = await import('inflection');
		inflection = inflection?.['default'];

		// Step 1: Compute the URL Path
		let surfacePath = relative?.(
			// eslint-disable-next-line no-undef
			dirname?.(serverFilePath),
			dirname?.(this?.__dirname)
		);

		// Step 2: Sanitize the URL Path - remove reserved words, and replace underscores with hyphens
		surfacePath = surfacePath?.replaceAll?.('_', '-');
		[
			'server',
			'domains',
			'bounded-contexts',
			'surfaces',
			'command',
			'query',
			'middlewares',
			'repositories'
		]?.forEach?.((reservedWord) => {
			surfacePath = surfacePath?.replaceAll?.(reservedWord, '');
		});

		surfacePath = inflection?.transform?.(surfacePath, [
			'foreignKey',
			'dasherize'
		]);

		// Step 2: Setup the surface router, and add the surface
		let inflectedName = inflection?.transform?.(this?.name, [
			'foreignKey',
			'dasherize'
		]);

		surfacePath =
			inflectedName === 'main-id'
				? surfacePath
				: join?.(surfacePath, inflectedName);

		surfacePath = surfacePath?.replaceAll?.('-id', '');
		surfacePath = normalize?.(surfacePath);
		if (surfacePath?.endsWith?.('/'))
			surfacePath = surfacePath?.slice?.(0, -1);

		return surfacePath;
	}

	/**
	 * Builds versioned routers for this surface and mounts them on the ingress surface.
	 *
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
	 */
	async #setupRouter() {
		// Step 1: Compute the surface path based on the file location
		// of the surface artifact - to be used as the prefix for all routes
		// registered by this surface
		const surfacePath = await this.#computeSurfacePath?.();

		// Step 2: Get the surface surface definition by calling the _registerSurface
		// method implemented by the artifact implementation - which returns an array
		// of route definitions for this surface
		const surface = await this?._registerSurface?.();

		// Step 3: For each route definition returned by the surface, add the route to
		// the surface router
		let Router = await import('@koa/router');
		Router = Router?.['default'];

		for (const restApi of surface) {
			const restApiVersion = restApi?.version ?? 1;

			const httpMethod = restApi?.httpMethod?.toLowerCase?.();
			const restPath = normalize?.(restApi?.path);

			const routeMiddlewares = restApi?.middlewares?.slice?.() ?? [];
			routeMiddlewares?.push?.(restApi?.handler);

			let router = this.#routers?.get?.(`v${restApiVersion}`) ?? null;
			if (!router) {
				router = new Router({
					prefix: `${surfacePath}`
				});

				this.#routers?.set?.(`v${restApiVersion}`, router);
			}

			// eslint-disable-next-line security/detect-object-injection
			router?.[httpMethod]?.(restPath, ...routeMiddlewares);
		}

		// Finally, add this router to the RESTApi Ingress Surface...
		const restApiInstance =
			await this?.domainInterface?.iocContainer?.resolve?.('RestApi');
		const mainRouters = restApiInstance?.routers;

		this.#routers?.forEach((router, key) => {
			mainRouters?.get?.(key)?.use?.(router?.routes?.());
		});
	}
	// #endregion

	// #region Private Fields
	#routers = new Map();
	// #endregion
}
