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
 * @name Main
 * @extends SystemAdminBaseSurface
 *
 * @param {string} [location] - The artifact directory on disk.
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts.
 *
 * @classdesc Command surface for user profile operations.
 */
export class Main extends SystemAdminBaseSurface {
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
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

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @protected
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
			handler: this.#createProfile.bind(this)
		});
		baseRoutes.push({
			version: 1,
			httpMethod: 'PATCH',
			path: '/update',
			middlewares: [await this._rbac('registered')],
			handler: this.#updateProfile.bind(this)
		});
		baseRoutes.push({
			version: 1,
			httpMethod: 'DELETE',
			path: '/delete',
			middlewares: [await this._rbac('registered')],
			handler: this.#deleteProfile.bind(this)
		});

		return baseRoutes;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @protected
	 * @function
	 * @name _setupValidationSchemas
	 *
	 * @param {Map} [validationSchemaMap] - Map to populate; defaults to the surface cache when available.
	 *
	 * @returns {Promise<Map|undefined>} Resolves to the supplied or cached validation schema map.
	 *
	 * @description
	 * Registers the validation schemas used by this surface, including
	 * localized-name fields on create and update payloads.
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
			'CREATE_PROFILE_VALIDATION_SCHEMA'
		);
		if (!createSchema) {
			createSchema = Joi.object({
				data: Joi.object({
					type: Joi.string().valid('system_admin').required(),
					attributes: Joi.object({
						mobile_no: Joi.string()
							.pattern(/^\+\d{12}$/)
							.required(),
						date_of_birth: Joi.string()
							.pattern(/^\d{4}-\d{2}-\d{2}$/)
							.optional(),
						first_name: Joi.string().required(),
						middle_names: Joi.string().optional(),
						last_name: Joi.string().required(),
						nickname: Joi.string().optional(),
						locale_id: Joi.string().required()
					}).required()
				}).required()
			});

			// Cache the schema for subsequent requests.
			validationSchemaMap.set(
				'CREATE_PROFILE_VALIDATION_SCHEMA',
				createSchema
			);
		}

		// Step 4: Build the update schema when it is missing.
		let updateSchema = validationSchemaMap.get(
			'UPDATE_PROFILE_VALIDATION_SCHEMA'
		);
		if (!updateSchema) {
			updateSchema = Joi.object({
				data: Joi.object({
					type: Joi.string().valid('system_admin').required(),
					id: Joi.string()
						.guid({ version: ['uuidv4', 'uuidv7'], wrapper: false })
						.required(),
					attributes: Joi.object({
						mobile_no: Joi.string()
							.pattern(/^\+\d{12}$/)
							.optional(),
						date_of_birth: Joi.string()
							.pattern(/^\d{4}-\d{2}-\d{2}$/)
							.optional(),
						first_name: Joi.string().optional(),
						middle_names: Joi.string().optional(),
						last_name: Joi.string().optional(),
						nickname: Joi.string().optional(),
						locale_id: Joi.string().optional()
					}).required()
				}).required()
			});

			// Cache the schema for subsequent requests.
			validationSchemaMap.set(
				'UPDATE_PROFILE_VALIDATION_SCHEMA',
				updateSchema
			);
		}

		return validationSchemaMap;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #createProfile
	 *
	 * @param {object} ctxt - Koa context for `POST /create`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `POST /create`.
	 * Validates and deserializes the request, then invokes the create middleware
	 * and serializes its result. Requires JSON:API `data.type` to be `system_admin`.
	 * The attributes include a required mobile number matching `/^\+\d{12}$/`,
	 * first and last names, and locale_id.
	 * Optional attributes include date_of_birth (YYYY-MM-DD), middle_names, and nickname.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_system_admin_profile_create.json]:
	 * // Invocation configuration [./servers/curl_example_data/api_v1_system_admin_profile_create.curl]:
	 * $ curl -X POST -H "Content-Type: application/json" -b ./cookies.txt -d @./servers/curl_example_data/api_v1_system_admin_profile_create.json "${base_url}/api/v1/system-admin/profile/create"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_system_admin_profile_create.curl "${base_url}/api/v1/system-admin/profile/create"
	 */
	async #createProfile(ctxt) {
		// Step 1: Validate the request body against its schema.
		const createProfileSchema = this.#validationSchemaMap.get(
			'CREATE_PROFILE_VALIDATION_SCHEMA'
		);

		try {
			await createProfileSchema.validateAsync(ctxt.request.body, {
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
		const profileData =
			await this.domainInterface.serializer.deserializeAsync(
				'system_admin',
				ctxt.request.body
			);

		// Step 3: Invoke the matching middleware API with the domain payload.
		const apiRegistry = this.domainInterface.apiRegistry;
		const profileStatus = await apiRegistry.execute('CREATE', {
			data: profileData,
			locale: ctxt.locale
		});

		// Step 4: Serialize the middleware result for the response.
		const responseBody =
			await this.domainInterface.serializer.serializeAsync(
				'system_admin',
				profileStatus.body
			);

		// Step 5: Write the HTTP response using the serialized result.
		ctxt.status = profileStatus.status;
		ctxt.body = responseBody;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #updateProfile
	 *
	 * @param {object} ctxt - Koa context for `PATCH /update`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `PATCH /update`.
	 * Validates JSON:API `data.type` as `system_admin`,
	 * a required UUID v4 or v7 `data.id`, and an attributes object.
	 * Deserializes the update, invokes the middleware for the authenticated system admin,
	 * and serializes the response.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_system_admin_profile_update.json]:
	 * // Invocation configuration [./servers/curl_example_data/api_v1_system_admin_profile_update.curl]:
	 * $ curl -X PATCH -H "Content-Type: application/json" -b ./cookies.txt -d @./servers/curl_example_data/api_v1_system_admin_profile_update.json "${base_url}/api/v1/system-admin/profile/update"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_system_admin_profile_update.curl "${base_url}/api/v1/system-admin/profile/update"
	 */
	async #updateProfile(ctxt) {
		// Step 1: Validate the request body against its schema.
		const updateProfileSchema = this.#validationSchemaMap.get(
			'UPDATE_PROFILE_VALIDATION_SCHEMA'
		);

		try {
			await updateProfileSchema.validateAsync(ctxt.request.body, {
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
		const profileData =
			await this.domainInterface.serializer.deserializeAsync(
				'system_admin',
				ctxt.request.body
			);

		// Step 3: Invoke the matching middleware API with the domain payload.
		const apiRegistry = this.domainInterface.apiRegistry;
		const profileStatus = await apiRegistry.execute('UPDATE', {
			user: ctxt.state.user,
			data: profileData,
			locale: ctxt.locale
		});

		// Step 4: Serialize the middleware result for the response.
		const responseBody =
			await this.domainInterface.serializer.serializeAsync(
				'system_admin',
				profileStatus.body
			);

		// Step 5: Write the HTTP response using the serialized result.
		ctxt.status = profileStatus.status;
		ctxt.body = responseBody;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #deleteProfile
	 *
	 * @param {object} ctxt - Koa context for `DELETE /delete`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `DELETE /delete`.
	 * Passes the authenticated system admin to
	 * the delete middleware and writes its response status and body. No request body is required.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Invocation configuration [./servers/curl_example_data/api_v1_system_admin_profile_delete.curl]:
	 * $ curl -X DELETE -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/system-admin/profile/delete"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_system_admin_profile_delete.curl "${base_url}/api/v1/system-admin/profile/delete"
	 */
	async #deleteProfile(ctxt) {
		// Step 1: Delete the authenticated user's profile through the middleware API.
		const apiRegistry = this.domainInterface.apiRegistry;
		const profileStatus = await apiRegistry.execute('DELETE', {
			user: ctxt.state.user,
			locale: ctxt.locale
		});

		// Step 2: Write the status and any response data returned by the middleware.
		ctxt.status = profileStatus.status;
		ctxt.body = profileStatus.body;
	}

	#validationSchemaMap = new Map();
}

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Surfaces/Command
 *
 * @class
 * @name MainSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc Factory for the profile command main surface.
 */
export default class MainSurfaceFactory extends EVASBaseFactory {
	static #mutex = new Mutex();
	static #mainInstance = undefined;

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
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

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof MainSurfaceFactory
	 * @async
	 * @static
	 * @public
	 * @function
	 * @name createInstances
	 *
	 * @param {object} domainInterface - Domain functionality exposed to sub-artifacts.
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
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof MainSurfaceFactory
	 * @async
	 * @static
	 * @public
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
		});
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof MainSurfaceFactory
	 * @static
	 * @public
	 * @readonly
	 * @function
	 * @name SurfaceName
	 *
	 * @returns {string} The surface class name.
	 *
	 * @description
	 * Returns the registered surface name: `Main`.
	 */
	static get SurfaceName() {
		return 'Main';
	}
}
