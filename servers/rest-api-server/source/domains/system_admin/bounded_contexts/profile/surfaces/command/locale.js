/**
 * Imports for this file
 *
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Surfaces/Command
 *
 * @ignore
 */
import Joi from 'joi';
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
 * @classdesc The Locale Surface for the Medico Profile Context.
 */
export class Locale extends SystemAdminBaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
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
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
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
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
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
			httpMethod: 'POST',
			path: '/create',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#createLocale?.bind?.(this)
		});
		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'PATCH',
			path: '/update',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#updateLocale?.bind?.(this)
		});
		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'DELETE',
			path: '/delete/:localeId',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#deleteLocale?.bind?.(this)
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
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Locale
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
	 * Registers Joi schemas used by the locale routes. The authenticated
	 * user identifier is derived from `user?.id`, so clients do not send
	 * `user_id`.
	 */
	async _setupValidationSchemas(validationSchemaMap) {
		validationSchemaMap = validationSchemaMap ?? this.#validationSchemaMap;
		validationSchemaMap = await super._setupValidationSchemas?.(
			validationSchemaMap
		);

		let createSchema = validationSchemaMap?.get?.(
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
						locale_code: Joi.string().required().messages({
							'string.base':
								'EVASERVER::VALIDATION_ERROR::STRING_BASE',
							'any.required':
								'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED'
						}),
						is_primary: Joi.boolean().optional()
					}).required()
				})
			});

			validationSchemaMap?.set?.(
				'CREATE_LOCALE_VALIDATION_SCHEMA',
				createSchema
			);
		}

		let updateSchema = validationSchemaMap?.get?.(
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
						locale_code: Joi.string().optional(),
						is_primary: Joi.boolean().optional()
					}).required()
				})
			});

			validationSchemaMap?.set?.(
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
	 * @override
	 * @function
	 * @name #createLocale
	 *
	 * @returns {null} - Nothing
	 *
	 * @description Creates a new locale for the logged in user. The
	 * `user_id` relationship is derived from `user?.id`.
	 * @example
	 * // Given the following input data [./servers/curl_example_data/system_admin_profile_locale_create.json]:
	 * $ curl -X POST -H "Content-Type: application/json" -b ./cookies.txt -d @./servers/curl_example_data/system_admin_profile_locale_create.json ${base_url}/api/v1/system_admin/profile/locale/create
	 */
	async #createLocale(ctxt) {
		const createLocaleSchema = this.#validationSchemaMap?.get(
			'CREATE_LOCALE_VALIDATION_SCHEMA'
		);

		try {
			await createLocaleSchema.validateAsync(ctxt?.request?.body, {
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

		const localePayload = {
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
		const localeStatus = await apiRegistry?.execute?.('CREATE_LOCALE', {
			user: ctxt?.state?.user,
			data: localePayload
		});

		ctxt.status = localeStatus?.status;
		ctxt.body = localeStatus?.body;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Locale
	 * @async
	 * @instance
	 * @private
	 * @override
	 * @function
	 * @name #updateLocale
	 *
	 * @returns {null} - Nothing
	 *
	 * @description Updates an existing locale for the logged in user. The
	 * `user_id` relationship is derived from `user?.id`.
	 * @example
	 * // Given the following input data [./servers/curl_example_data/system_admin_profile_locale_update.json]:
	 * $ curl -X PATCH -H "Content-Type: application/json" -b ./cookies.txt -d @./servers/curl_example_data/system_admin_profile_locale_update.json ${base_url}/api/v1/system_admin/profile/locale/update
	 */
	async #updateLocale(ctxt) {
		const updateLocaleSchema = this.#validationSchemaMap?.get(
			'UPDATE_LOCALE_VALIDATION_SCHEMA'
		);

		try {
			await updateLocaleSchema.validateAsync(ctxt?.request?.body, {
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

		const localePayload = {
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
		const localeUpdateStatus = await apiRegistry?.execute?.(
			'UPDATE_LOCALE',
			{
				user: ctxt?.state?.user,
				data: localePayload
			}
		);

		ctxt.status = localeUpdateStatus?.status;
		ctxt.body = localeUpdateStatus?.body;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Locale
	 * @async
	 * @instance
	 * @private
	 * @override
	 * @function
	 * @name #deleteLocale
	 *
	 * @returns {null} - Nothing
	 *
	 * @description Deletes a locale for the logged in user.
	 * @example
	 * $ curl -X DELETE -H "Content-Type: application/json" -b ./cookies.txt ${base_url}/api/v1/system_admin/profile/locale/delete/${localeId}
	 */
	async #deleteLocale(ctxt) {
		const apiRegistry = this?.domainInterface?.apiRegistry;
		const localeDeleteStatus = await apiRegistry?.execute?.(
			'DELETE_LOCALE',
			{
				user: ctxt?.state?.user,
				localeId: ctxt?.params?.localeId
			}
		);

		ctxt.status = localeDeleteStatus?.status;
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
 * @classdesc The Medico Domain Profile Locales Surface Class Factory.
 */
export default class LocaleSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
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
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
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
		if (!LocaleSurfaceFactory.#localeInstance) {
			const localeInstance = new Locale(
				LocaleSurfaceFactory['$disk_unc'],
				domainInterface
			);

			await localeInstance?.load?.();
			LocaleSurfaceFactory.#localeInstance = localeInstance;
		}

		return LocaleSurfaceFactory.#localeInstance;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
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
		await LocaleSurfaceFactory.#localeInstance?.unload?.();
		LocaleSurfaceFactory.#localeInstance = undefined;
		return;
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Surfaces/Command
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
	static #localeInstance = undefined;
	// #endregion
}
