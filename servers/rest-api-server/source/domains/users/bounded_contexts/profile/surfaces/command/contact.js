/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Surfaces/Command
 *
 * @ignore
 */
import Joi from 'joi';
import { EVASBaseFactory } from '@twyr/framework-classes';
import { MedicoBaseSurface } from 'baseclass:surface';
import { Mutex } from 'async-mutex';

const HTTP_ERROR_UNPROCESSABLE_CONTENT = 422;

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Surfaces/Command
 *
 * @class
 * @name Contact
 * @extends MedicoBaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Contact Surface for the Medico Profile Context.
 */
export class Contact extends MedicoBaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
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
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
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
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
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
			httpMethod: 'POST',
			path: '/create',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#createContact?.bind?.(this)
		});
		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'PATCH',
			path: '/update',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#updateContact?.bind?.(this)
		});
		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'DELETE',
			path: '/delete/:contactId',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#deleteContact?.bind?.(this)
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

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _setupValidationSchemas
	 *
	 * @param {string} [validationSchemaMap] - Map to be populated with the validation schemas.
	 *
	 * @returns {Map} - Map containing the validation schemas
	 *
	 * @description
	 * Registers Joi schemas used by the contact routes. The authenticated
	 * user identifier is derived from `user?.id`, so clients do not send
	 * `user_id`.
	 */
	async _setupValidationSchemas(validationSchemaMap) {
		validationSchemaMap = validationSchemaMap ?? this.#validationSchemaMap;
		validationSchemaMap = await super._setupValidationSchemas?.(
			validationSchemaMap
		);

		let createSchema = validationSchemaMap?.get?.(
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

			validationSchemaMap?.set?.(
				'CREATE_CONTACT_VALIDATION_SCHEMA',
				createSchema
			);
		}

		let updateSchema = validationSchemaMap?.get?.(
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

			validationSchemaMap?.set?.(
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
	 * @override
	 * @function
	 * @name #createContact
	 *
	 * @returns {null} - Nothing
	 *
	 * @description Creates a new contact for the logged in user. The
	 * `user_id` relationship is derived from `user?.id`.
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_users_profile_contact_create.json]:
	 * $ curl -X POST -H "Content-Type: application/json" -b ./cookies.txt -d @./servers/curl_example_data/api_v1_users_profile_contact_create.json ${base_url}/api/v1/users/profile/contact/create
	 */
	async #createContact(ctxt) {
		const createContactSchema = this.#validationSchemaMap?.get(
			'CREATE_CONTACT_VALIDATION_SCHEMA'
		);

		try {
			await createContactSchema.validateAsync(ctxt?.request?.body, {
				abortEarly: false
			});
		} catch (error) {
			const validationError =
				this?._convertValidationErrorToHandlerError?.(
					error,
					'EVASERVER::INPUT_VALIDATION_ERROR'
				);
			validationError.status = HTTP_ERROR_UNPROCESSABLE_CONTENT;
			throw validationError;
		}

		const contactPayload = {
			...ctxt?.request?.body,
			data: {
				...ctxt?.request?.body?.data,
				attributes: {
					...ctxt?.request?.body?.data?.attributes,
					user_id: ctxt?.state?.user?.id
				}
			}
		};

		const apiRegistry = this?.domainInterface?.apiRegistry;
		const contactStatus = await apiRegistry?.execute?.('CREATE_CONTACT', {
			user: ctxt?.state?.user,
			data: contactPayload
		});

		ctxt.status = contactStatus?.status;
		ctxt.body = contactStatus?.body;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @private
	 * @override
	 * @function
	 * @name #updateContact
	 *
	 * @returns {null} - Nothing
	 *
	 * @description Updates an existing contact for the logged in user. The
	 * `user_id` relationship is derived from `user?.id`.
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_users_profile_contact_update.json]:
	 * $ curl -X PATCH -H "Content-Type: application/json" -b ./cookies.txt -d @./servers/curl_example_data/api_v1_users_profile_contact_update.json ${base_url}/api/v1/users/profile/contact/update
	 */
	async #updateContact(ctxt) {
		const updateContactSchema = this.#validationSchemaMap?.get(
			'UPDATE_CONTACT_VALIDATION_SCHEMA'
		);

		try {
			await updateContactSchema.validateAsync(ctxt?.request?.body, {
				abortEarly: false
			});
		} catch (error) {
			const validationError =
				this?._convertValidationErrorToHandlerError?.(
					error,
					'EVASERVER::INPUT_VALIDATION_ERROR'
				);
			validationError.status = HTTP_ERROR_UNPROCESSABLE_CONTENT;
			throw validationError;
		}

		const contactPayload = {
			...ctxt?.request?.body,
			data: {
				...ctxt?.request?.body?.data,
				attributes: {
					...ctxt?.request?.body?.data?.attributes,
					user_id: ctxt?.state?.user?.id
				}
			}
		};

		const apiRegistry = this?.domainInterface?.apiRegistry;
		const contactUpdateStatus = await apiRegistry?.execute?.(
			'UPDATE_CONTACT',
			{
				user: ctxt?.state?.user,
				data: contactPayload
			}
		);

		ctxt.status = contactUpdateStatus?.status;
		ctxt.body = contactUpdateStatus?.body;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Contact
	 * @async
	 * @instance
	 * @private
	 * @override
	 * @function
	 * @name #deleteContact
	 *
	 * @returns {null} - Nothing
	 *
	 * @description Deletes a contact for the logged in user.
	 * @example
	 * $ curl -X DELETE -H "Content-Type: application/json" -b ./cookies.txt ${base_url}/api/v1/users/profile/contact/delete/${contactId}
	 */
	async #deleteContact(ctxt) {
		const apiRegistry = this?.domainInterface?.apiRegistry;
		const contactDeleteStatus = await apiRegistry?.execute?.(
			'DELETE_CONTACT',
			{
				user: ctxt?.state?.user,
				contactId: ctxt?.params?.contactId
			}
		);

		ctxt.status = contactDeleteStatus?.status;
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
 * @classdesc The Medico Domain Profile Contacts Surface Class Factory.
 */
export default class ContactSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
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
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof ContactSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Contact} - The Contact surface instance.
	 */
	static async createInstances(domainInterface) {
		return await ContactSurfaceFactory.#mutex?.runExclusive?.(async () => {
			if (!ContactSurfaceFactory.#contactInstance) {
				const contactInstance = new Contact(
					ContactSurfaceFactory['$disk_unc'],
					domainInterface
				);

				await contactInstance?.load?.();
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
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the Contact instance
	 */
	static async destroyInstances() {
		await ContactSurfaceFactory.#mutex?.runExclusive?.(async () => {
			await ContactSurfaceFactory.#contactInstance?.unload?.();
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
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name SurfaceName
	 *
	 * @returns {string} - Name of this surface.
	 *
	 * @description
	 * Returns the name of this surface - Contact
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
