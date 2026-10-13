/**
 * Imports for this file
 *
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Surfaces/Command
 *
 * @ignore
 */
import Joi from 'joi';

import { Mutex } from 'async-mutex';

import { EVASBaseFactory } from '@twyr/framework-classes';

import { SystemAdminBaseSurface } from 'baseclass:surface';

const HTTP_ERROR_UNPROCESSABLE_CONTENT = 422;

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Surfaces/Command
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
	 * @subcategory Profile/Surfaces/Command
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
	 * @subcategory Profile/Surfaces/Command
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
	 * @subcategory Profile/Surfaces/Command
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
			httpMethod: 'POST',
			path: '/create',
			middlewares: [await this._rbac('registered')],
			handler: this.#createLocale.bind(this)
		});
		baseRoutes.push({
			version: 1,
			httpMethod: 'PATCH',
			path: '/update',
			middlewares: [await this._rbac('registered')],
			handler: this.#updateLocale.bind(this)
		});
		baseRoutes.push({
			version: 1,
			httpMethod: 'DELETE',
			path: '/delete/:localeId',
			middlewares: [await this._rbac('registered')],
			handler: this.#deleteLocale.bind(this)
		});

		return baseRoutes;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
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

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Locale
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _setupValidationSchemas
	 *
	 * @param {Map} [validationSchemaMap] - Map to populate; defaults to the surface cache when available.
	 *
	 * @returns {Promise<Map|undefined>} Resolves to the supplied or cached validation schema map.
	 *
	 * @description
	 * Registers Joi schemas used by the locale routes. The authenticated
	 * user identifier is derived from `user?.id`, so clients do not send
	 * `system_admin_id`.
	 */
	async _setupValidationSchemas(validationSchemaMap) {
		// Step 1: Reuse the supplied schema map or the surface cache.
		validationSchemaMap = validationSchemaMap ?? this.#validationSchemaMap;

		// Step 2: Apply the base validation schemas.
		validationSchemaMap = await super._setupValidationSchemas(
			validationSchemaMap
		);

		// Step 3: Build the create schema when it is missing.
		let createSchema = validationSchemaMap.get(
			'CREATE_LOCALE_VALIDATION_SCHEMA'
		);
		if (!createSchema) {
			createSchema = Joi.object({
				data: Joi.object({
					type: Joi.string()
						.valid('system_admin_locale')
						.required()
						.messages({
							'any.only': 'EVASERVER::VALIDATION_ERROR::ANY_ONLY',
							'any.required':
								'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED'
						}),
					attributes: Joi.object({
						locale_id: Joi.string().required().messages({
							'string.base':
								'EVASERVER::VALIDATION_ERROR::STRING_BASE',
							'any.required':
								'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED'
						}),
						is_primary: Joi.boolean().optional()
					}).required()
				})
			});

			// Cache the schema for subsequent requests.
			validationSchemaMap.set(
				'CREATE_LOCALE_VALIDATION_SCHEMA',
				createSchema
			);
		}

		// Step 4: Build the update schema when it is missing.
		let updateSchema = validationSchemaMap.get(
			'UPDATE_LOCALE_VALIDATION_SCHEMA'
		);
		if (!updateSchema) {
			updateSchema = Joi.object({
				data: Joi.object({
					type: Joi.string()
						.valid('system_admin_locale')
						.required()
						.messages({
							'any.only': 'EVASERVER::VALIDATION_ERROR::ANY_ONLY',
							'any.required':
								'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED'
						}),
					id: Joi.string()
						.guid({ version: ['uuidv4', 'uuidv7'], wrapper: false })
						.required()
						.messages({
							'any.required':
								'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED',
							'string.guid':
								'EVASERVER::VALIDATION_ERROR::STRING_GUID'
						}),
					attributes: Joi.object({
						locale_id: Joi.string().optional(),
						is_primary: Joi.boolean().optional()
					}).required()
				})
			});

			// Cache the schema for subsequent requests.
			validationSchemaMap.set(
				'UPDATE_LOCALE_VALIDATION_SCHEMA',
				updateSchema
			);
		}

		return validationSchemaMap;
	}
	// #endregion

	// #region Route Handlers
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Locale
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #createLocale
	 *
	 * @param {object} ctxt - Koa context for `POST /create`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `POST /create`.
	 * Validates and deserializes the request, then invokes the create middleware
	 * and serializes its result. Requires JSON:API `data.type` to be `system_admin_locale`
	 * and an attributes object containing a locale_id string.
	 * The system_admin_id owner is taken from the authenticated session.
	 * Optional attributes is_primary are booleans.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_system_admin_profile_locale_create.json]:
	 * // Invocation configuration [./servers/curl_example_data/api_v1_system_admin_profile_locale_create.curl]:
	 * $ curl -X POST -H "Content-Type: application/json" -b ./cookies.txt -d @./servers/curl_example_data/api_v1_system_admin_profile_locale_create.json "${base_url}/api/v1/system-admin/profile/locale/create"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_system_admin_profile_locale_create.curl "${base_url}/api/v1/system-admin/profile/locale/create"
	 */
	async #createLocale(ctxt) {
		// Step 1: Validate the request body against its schema.
		const createLocaleSchema = this.#validationSchemaMap.get(
			'CREATE_LOCALE_VALIDATION_SCHEMA'
		);

		try {
			await createLocaleSchema.validateAsync(ctxt.request.body, {
				abortEarly: false
			});
		} catch (error) {
			// Convert validation failures into handler errors.
			const validationError = this._convertValidationErrorToHandlerError(
				error,
				'EVASERVER::INPUT_VALIDATION_ERROR'
			);
			validationError.status = HTTP_ERROR_UNPROCESSABLE_CONTENT;
			throw validationError;
		}

		// Step 2: Deserialize the request body into the domain payload.
		const localePayload =
			await this.domainInterface.serializer.deserializeAsync(
				'system_admin_locale',
				ctxt.request.body
			);
		localePayload.system_admin_id = ctxt?.state?.user?.id;

		// Step 3: Invoke the matching middleware API with the domain payload.
		const apiRegistry = this.domainInterface.apiRegistry;
		const localeStatus = await apiRegistry.execute('CREATE_LOCALE', {
			user: ctxt.state.user,
			data: localePayload
		});

		// Step 4: Serialize the middleware result for the response.
		const responseBody =
			await this.domainInterface.serializer.serializeAsync(
				'system_admin_locale',
				localeStatus.body
			);

		// Step 5: Write the HTTP response using the serialized result.
		ctxt.status = localeStatus.status;
		ctxt.body = responseBody;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Locale
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #updateLocale
	 *
	 * @param {object} ctxt - Koa context for `PATCH /update`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `PATCH /update`.
	 * Validates JSON:API `data.type` as `system_admin_locale`,
	 * a required UUID v4 or v7 `data.id`, and an attributes object.
	 * Deserializes the update, invokes the middleware for the authenticated system admin,
	 * and serializes the response.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_system_admin_profile_locale_update.json]:
	 * // Invocation configuration [./servers/curl_example_data/api_v1_system_admin_profile_locale_update.curl]:
	 * $ curl -X PATCH -H "Content-Type: application/json" -b ./cookies.txt -d @./servers/curl_example_data/api_v1_system_admin_profile_locale_update.json "${base_url}/api/v1/system-admin/profile/locale/update"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_system_admin_profile_locale_update.curl "${base_url}/api/v1/system-admin/profile/locale/update"
	 */
	async #updateLocale(ctxt) {
		// Step 1: Validate the request body against its schema.
		const updateLocaleSchema = this.#validationSchemaMap.get(
			'UPDATE_LOCALE_VALIDATION_SCHEMA'
		);

		try {
			await updateLocaleSchema.validateAsync(ctxt.request.body, {
				abortEarly: false
			});
		} catch (error) {
			// Convert validation failures into handler errors.
			const validationError = this._convertValidationErrorToHandlerError(
				error,
				'EVASERVER::INPUT_VALIDATION_ERROR'
			);
			validationError.status = HTTP_ERROR_UNPROCESSABLE_CONTENT;
			throw validationError;
		}

		// Step 2: Deserialize the request body into the domain payload.
		const localePayload =
			await this.domainInterface.serializer.deserializeAsync(
				'system_admin_locale',
				ctxt.request.body
			);
		localePayload.system_admin_id = ctxt?.state?.user?.id;

		// Step 3: Invoke the matching middleware API with the domain payload.
		const apiRegistry = this.domainInterface.apiRegistry;
		const localeUpdateStatus = await apiRegistry.execute('UPDATE_LOCALE', {
			user: ctxt.state.user,
			data: localePayload
		});

		// Step 4: Serialize the middleware result for the response.
		const responseBody =
			await this.domainInterface.serializer.serializeAsync(
				'system_admin_locale',
				localeUpdateStatus.body
			);

		// Step 5: Write the HTTP response using the serialized result.
		ctxt.status = localeUpdateStatus.status;
		ctxt.body = responseBody;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Locale
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #deleteLocale
	 *
	 * @param {object} ctxt - Koa context for `DELETE /delete/:localeId`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `DELETE /delete/:localeId`.
	 * Passes the authenticated system admin and the localeId path parameter to
	 * the delete middleware and writes its response status. No request body is required.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Invocation configuration [./servers/curl_example_data/api_v1_system_admin_profile_locale_delete_by_locale_id.curl]:
	 * $ curl -X DELETE -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/system-admin/profile/locale/delete/${localeId}"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_system_admin_profile_locale_delete_by_locale_id.curl "${base_url}/api/v1/system-admin/profile/locale/delete/${localeId}"
	 */
	async #deleteLocale(ctxt) {
		// Step 1: Invoke the delete API with the authenticated user and request identifiers.
		const apiRegistry = this.domainInterface.apiRegistry;
		const localeDeleteStatus = await apiRegistry.execute('DELETE_LOCALE', {
			user: ctxt.state.user,
			localeId: ctxt.params.localeId
		});

		// Step 2: Write the deletion status returned by the middleware.
		ctxt.status = localeDeleteStatus.status;
	}
	// #endregion

	// #region Private Members
	#validationSchemaMap = new Map();
	// #endregion
}

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Surfaces/Command
 *
 * @class
 * @name LocaleSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The System Admin Domain Profile Locales Surface Class Factory.
 */
export default class LocaleSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
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
	 * @subcategory Profile/Surfaces/Command
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
	 * @subcategory Profile/Surfaces/Command
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
	 * @subcategory Profile/Surfaces/Command
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
