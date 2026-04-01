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
import { UserBaseSurface } from 'baseclass:surface';
import { Mutex } from 'async-mutex';

const HTTP_ERROR_UNPROCESSABLE_CONTENT = 422;

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Surfaces/Command
 *
 * @class
 * @name Main
 * @extends UserBaseSurface
 *
 * @param {string} [location] - The artifact directory on disk.
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts.
 *
 * @classdesc Command surface for user profile operations.
 */
export class Main extends UserBaseSurface {
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}

	/**
	 * Registers the command routes for the profile surface.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @returns {Promise<object[]>} The complete list of routes for this surface.
	 */
	async _registerSurface() {
		const baseRoutes = await super._registerSurface?.();

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'POST',
			path: '/create',
			handler: this.#createProfile?.bind?.(this)
		});
		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'PATCH',
			path: '/update',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#updateProfile?.bind?.(this)
		});
		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'DELETE',
			path: '/delete',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#deleteProfile?.bind?.(this)
		});

		return baseRoutes;
	}

	/**
	 * Registers the validation schemas used by this surface, including
	 * localized-name fields on create and update payloads.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @param {Map<string, object>} validationSchemaMap - Schema cache to populate.
	 * @returns {Promise<Map<string, object>>} The populated schema map.
	 */
	async _setupValidationSchemas(validationSchemaMap) {
		validationSchemaMap = validationSchemaMap ?? this.#validationSchemaMap;
		validationSchemaMap = await super._setupValidationSchemas?.(
			validationSchemaMap
		);

		let createSchema = validationSchemaMap?.get?.(
			'CREATE_PROFILE_VALIDATION_SCHEMA'
		);
		if (!createSchema) {
			createSchema = Joi.object({
				data: Joi.object({
					type: Joi.string().valid('user').required(),
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
						locale_id: Joi.string().required(),
						otp: Joi.string()
							.length(4)
							.pattern(/^\d{4}$/)
							.required()
					}).required()
				}).required()
			});
			validationSchemaMap?.set?.(
				'CREATE_PROFILE_VALIDATION_SCHEMA',
				createSchema
			);
		}

		let updateSchema = validationSchemaMap?.get?.(
			'UPDATE_PROFILE_VALIDATION_SCHEMA'
		);
		if (!updateSchema) {
			updateSchema = Joi.object({
				data: Joi.object({
					type: Joi.string().valid('user').required(),
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
			validationSchemaMap?.set?.(
				'UPDATE_PROFILE_VALIDATION_SCHEMA',
				updateSchema
			);
		}

		return validationSchemaMap;
	}

	/**
	 * Validates and dispatches profile-creation requests.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #createProfile
	 *
	 * @param {object} ctxt - Koa request context.
	 * @returns {Promise<void>} Resolves after the response is written.
	 */
	async #createProfile(ctxt) {
		try {
			await this?._validateInput?.(
				ctxt?.request?.body,
				'CREATE_PROFILE_VALIDATION_SCHEMA'
			);
		} catch (error) {
			const validationError =
				this?._convertValidationErrorToHandlerError?.(
					error,
					'EVASERVER::INPUT_VALIDATION_ERROR'
				);
			validationError.status = HTTP_ERROR_UNPROCESSABLE_CONTENT;
			throw validationError;
		}

		const apiRegistry = this?.domainInterface?.apiRegistry;
		const profileStatus = await apiRegistry?.execute?.('CREATE', {
			data: ctxt?.request?.body,
			locale: ctxt?.locale
		});

		ctxt.status = profileStatus?.status;
		ctxt.body = profileStatus?.body;
	}

	/**
	 * Validates and dispatches profile-update requests.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #updateProfile
	 *
	 * @param {object} ctxt - Koa request context.
	 * @returns {Promise<void>} Resolves after the response is written.
	 */
	async #updateProfile(ctxt) {
		try {
			await this?._validateInput?.(
				ctxt?.request?.body,
				'UPDATE_PROFILE_VALIDATION_SCHEMA'
			);
		} catch (error) {
			const validationError =
				this?._convertValidationErrorToHandlerError?.(
					error,
					'EVASERVER::INPUT_VALIDATION_ERROR'
				);
			validationError.status = HTTP_ERROR_UNPROCESSABLE_CONTENT;
			throw validationError;
		}

		const apiRegistry = this?.domainInterface?.apiRegistry;
		const profileStatus = await apiRegistry?.execute?.('UPDATE', {
			user: ctxt?.state?.user,
			data: ctxt?.request?.body,
			locale: ctxt?.locale
		});

		ctxt.status = profileStatus?.status;
		ctxt.body = profileStatus?.body;
	}

	/**
	 * Dispatches profile-delete requests for the authenticated user.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #deleteProfile
	 *
	 * @param {object} ctxt - Koa request context.
	 * @returns {Promise<void>} Resolves after the response is written.
	 */
	async #deleteProfile(ctxt) {
		const apiRegistry = this?.domainInterface?.apiRegistry;
		const profileStatus = await apiRegistry?.execute?.('DELETE', {
			user: ctxt?.state?.user,
			locale: ctxt?.locale
		});

		ctxt.status = profileStatus?.status;
		ctxt.body = profileStatus?.body;
	}

	#validationSchemaMap = new Map();
}

/**
 * @category REST API Server/Domains/Users
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}

	/**
	 * Creates or reuses the singleton main surface instance.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof MainSurfaceFactory
	 * @static
	 * @function
	 * @name createInstances
	 *
	 * @param {object} domainInterface - Domain functionality exposed to sub-artifacts.
	 * @returns {Promise<Main>} The singleton surface instance.
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
	 * Destroys the singleton main surface instance.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof MainSurfaceFactory
	 * @static
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves after the instance is unloaded.
	 */
	static async destroyInstances() {
		await MainSurfaceFactory.#mutex?.runExclusive?.(async () => {
			await MainSurfaceFactory.#mainInstance?.unload?.();
			MainSurfaceFactory.#mainInstance = undefined;
		});
	}

	/**
	 * Gets the exported surface name.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Surfaces/Command
	 *
	 * @memberof MainSurfaceFactory
	 * @static
	 * @readonly
	 * @member {string}
	 * @name SurfaceName
	 * @returns {string} The surface class name.
	 */
	static get SurfaceName() {
		return 'Main';
	}
}
