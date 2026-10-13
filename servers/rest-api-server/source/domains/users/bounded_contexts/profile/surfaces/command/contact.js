/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Surfaces/Command
 *
 * @ignore
 */
import Joi from 'joi';

import { Mutex } from 'async-mutex';

import { EVASBaseFactory } from '@twyr/framework-classes';

import { UserBaseSurface } from 'baseclass:surface';

const HTTP_ERROR_UNPROCESSABLE_CONTENT = 422;

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Surfaces/Command
 *
 * @class
 * @name Contact
 * @extends UserBaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Contact Surface for the User Profile Context.
 */
export class Contact extends UserBaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {Contact} A new Contact instance.
	 *
	 * @description
	 * Initializes the Contact surface using its base class.
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Lifecycle Methods
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
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
	 * Loads the inherited surface infrastructure for Contact.
	 */
	async load() {
		await super.load();
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
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
			handler: this.#createContact.bind(this)
		});
		baseRoutes.push({
			version: 1,
			httpMethod: 'PATCH',
			path: '/update',
			middlewares: [await this._rbac('registered')],
			handler: this.#updateContact.bind(this)
		});
		baseRoutes.push({
			version: 1,
			httpMethod: 'DELETE',
			path: '/delete/:contactId',
			middlewares: [await this._rbac('registered')],
			handler: this.#deleteContact.bind(this)
		});

		return baseRoutes;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
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
	 * Registers Joi schemas used by the contact routes. The authenticated
	 * user identifier is derived from `user?.id`, so clients do not send
	 * `user_id`.
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
			'CREATE_CONTACT_VALIDATION_SCHEMA'
		);
		if (!createSchema) {
			createSchema = Joi.object({
				data: Joi.object({
					type: Joi.string()
						.valid('user_contact')
						.required()
						.messages({
							'any.only': 'EVASERVER::VALIDATION_ERROR::ANY_ONLY',
							'any.required':
								'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED'
						}),
					attributes: Joi.object({
						contact_type_id: Joi.string()
							.guid({
								version: ['uuidv4', 'uuidv7'],
								wrapper: false
							})
							.required()
							.messages({
								'string.base':
									'EVASERVER::VALIDATION_ERROR::STRING_BASE',
								'any.required':
									'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED',
								'string.guid':
									'EVASERVER::VALIDATION_ERROR::STRING_GUID'
							}),
						contact: Joi.string().required().messages({
							'string.base':
								'EVASERVER::VALIDATION_ERROR::STRING_BASE',
							'any.required':
								'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED'
						}),
						verified: Joi.boolean().optional(),
						is_primary: Joi.boolean().optional()
					}).required()
				})
			});

			// Cache the schema for subsequent requests.
			validationSchemaMap.set(
				'CREATE_CONTACT_VALIDATION_SCHEMA',
				createSchema
			);
		}

		// Step 4: Build the update schema when it is missing.
		let updateSchema = validationSchemaMap.get(
			'UPDATE_CONTACT_VALIDATION_SCHEMA'
		);
		if (!updateSchema) {
			updateSchema = Joi.object({
				data: Joi.object({
					type: Joi.string()
						.valid('user_contact')
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
						contact_type_id: Joi.string()
							.guid({
								version: ['uuidv4', 'uuidv7'],
								wrapper: false
							})
							.optional()
							.messages({
								'string.guid':
									'EVASERVER::VALIDATION_ERROR::STRING_GUID'
							}),
						contact: Joi.string().optional(),
						verified: Joi.boolean().optional(),
						is_primary: Joi.boolean().optional()
					}).required()
				})
			});

			// Cache the schema for subsequent requests.
			validationSchemaMap.set(
				'UPDATE_CONTACT_VALIDATION_SCHEMA',
				updateSchema
			);
		}

		return validationSchemaMap;
	}
	// #endregion

	// #region Route Handlers
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #createContact
	 *
	 * @param {object} ctxt - Koa context for `POST /create`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `POST /create`.
	 * Validates and deserializes the request, then invokes the create middleware
	 * and serializes its result. Requires JSON:API `data.type` to be `user_contact`
	 * and an attributes object containing a UUID v4 or v7 contact_type_id and contact string.
	 * The user_id owner is taken from the authenticated session.
	 * Optional attributes verified and is_primary are booleans.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_users_profile_contact_create.json]:
	 * // Invocation configuration [./servers/curl_example_data/api_v1_users_profile_contact_create.curl]:
	 * $ curl -X POST -H "Content-Type: application/json" -b ./cookies.txt -d @./servers/curl_example_data/api_v1_users_profile_contact_create.json "${base_url}/api/v1/users/profile/contact/create"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_users_profile_contact_create.curl "${base_url}/api/v1/users/profile/contact/create"
	 */
	async #createContact(ctxt) {
		// Step 1: Validate the request body against its schema.
		const createContactSchema = this.#validationSchemaMap.get(
			'CREATE_CONTACT_VALIDATION_SCHEMA'
		);

		try {
			await createContactSchema.validateAsync(ctxt.request.body, {
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
		const contactPayload =
			await this.domainInterface.serializer.deserializeAsync(
				'user_contact',
				ctxt.request.body
			);
		contactPayload.user_id = ctxt?.state?.user?.id;

		// Step 3: Invoke the matching middleware API with the domain payload.
		const apiRegistry = this.domainInterface.apiRegistry;
		const contactStatus = await apiRegistry.execute('CREATE_CONTACT', {
			user: ctxt.state.user,
			data: contactPayload
		});

		// Step 4: Serialize the middleware result for the response.
		const responseBody =
			await this.domainInterface.serializer.serializeAsync(
				'user_contact',
				contactStatus.body
			);

		// Step 5: Write the HTTP response using the serialized result.
		ctxt.status = contactStatus.status;
		ctxt.body = responseBody;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #updateContact
	 *
	 * @param {object} ctxt - Koa context for `PATCH /update`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `PATCH /update`.
	 * Validates JSON:API `data.type` as `user_contact`,
	 * a required UUID v4 or v7 `data.id`, and an attributes object.
	 * Deserializes the update, invokes the middleware for the authenticated user,
	 * and serializes the response.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_users_profile_contact_update.json]:
	 * // Invocation configuration [./servers/curl_example_data/api_v1_users_profile_contact_update.curl]:
	 * $ curl -X PATCH -H "Content-Type: application/json" -b ./cookies.txt -d @./servers/curl_example_data/api_v1_users_profile_contact_update.json "${base_url}/api/v1/users/profile/contact/update"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_users_profile_contact_update.curl "${base_url}/api/v1/users/profile/contact/update"
	 */
	async #updateContact(ctxt) {
		// Step 1: Validate the request body against its schema.
		const updateContactSchema = this.#validationSchemaMap.get(
			'UPDATE_CONTACT_VALIDATION_SCHEMA'
		);

		try {
			await updateContactSchema.validateAsync(ctxt.request.body, {
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
		const contactPayload =
			await this.domainInterface.serializer.deserializeAsync(
				'user_contact',
				ctxt.request.body
			);
		contactPayload.user_id = ctxt?.state?.user?.id;

		// Step 3: Invoke the matching middleware API with the domain payload.
		const apiRegistry = this.domainInterface.apiRegistry;
		const contactUpdateStatus = await apiRegistry.execute(
			'UPDATE_CONTACT',
			{
				user: ctxt.state.user,
				data: contactPayload
			}
		);

		// Step 4: Serialize the middleware result for the response.
		const responseBody =
			await this.domainInterface.serializer.serializeAsync(
				'user_contact',
				contactUpdateStatus.body
			);

		// Step 5: Write the HTTP response using the serialized result.
		ctxt.status = contactUpdateStatus.status;
		ctxt.body = responseBody;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #deleteContact
	 *
	 * @param {object} ctxt - Koa context for `DELETE /delete/:contactId`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `DELETE /delete/:contactId`.
	 * Passes the authenticated user and the contactId path parameter to
	 * the delete middleware and writes its response status. No request body is required.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Invocation configuration [./servers/curl_example_data/api_v1_users_profile_contact_delete_by_contact_id.curl]:
	 * $ curl -X DELETE -H "Content-Type: application/json" -b ./cookies.txt "${base_url}/api/v1/users/profile/contact/delete/${contactId}"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_users_profile_contact_delete_by_contact_id.curl "${base_url}/api/v1/users/profile/contact/delete/${contactId}"
	 */
	async #deleteContact(ctxt) {
		// Step 1: Invoke the delete API with the authenticated user and request identifiers.
		const apiRegistry = this.domainInterface.apiRegistry;
		const contactDeleteStatus = await apiRegistry.execute(
			'DELETE_CONTACT',
			{
				user: ctxt.state.user,
				contactId: ctxt.params.contactId
			}
		);

		// Step 2: Write the deletion status returned by the middleware.
		ctxt.status = contactDeleteStatus.status;
	}
	// #endregion

	// #region Private Members
	#validationSchemaMap = new Map();
	// #endregion
}

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Surfaces/Command
 *
 * @class
 * @name ContactSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The User Domain Profile Contacts Surface Class Factory.
 */
export default class ContactSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof ContactSurfaceFactory
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @returns {ContactSurfaceFactory} A new ContactSurfaceFactory instance.
	 *
	 * @description
	 * Initializes the ContactSurfaceFactory factory using its base class.
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof ContactSurfaceFactory
	 * @async
	 * @static
	 * @public
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<Contact>} Resolves to the loaded Contact surface instance.
	 *
	 * @description
	 * Creates and loads the surface instance on first use, then reuses it.
	 * Serializes access to the cached instance with the factory mutex.
	 */
	static async createInstances(domainInterface) {
		// Create or reuse the loaded instance under the factory lock.
		return await ContactSurfaceFactory.#mutex.runExclusive(async () => {
			if (!ContactSurfaceFactory.#contactInstance) {
				const contactInstance = new Contact(
					ContactSurfaceFactory['$disk_unc'],
					domainInterface
				);

				await contactInstance.load();
				ContactSurfaceFactory.#contactInstance = contactInstance;
			}

			return ContactSurfaceFactory.#contactInstance;
		});
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof ContactSurfaceFactory
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
		await ContactSurfaceFactory.#mutex.runExclusive(async () => {
			await ContactSurfaceFactory.#contactInstance?.unload();
			ContactSurfaceFactory.#contactInstance = undefined;
			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof ContactSurfaceFactory
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
	 * Returns the registered surface name: `Contact`.
	 */
	static get SurfaceName() {
		return 'Contact';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #contactInstance = undefined;
	// #endregion
}
