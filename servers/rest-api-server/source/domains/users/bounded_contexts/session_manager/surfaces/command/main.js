/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Session Manager/Surfaces/Command
 *
 * @ignore
 */
import Joi from 'joi';

import { EVASBaseFactory } from '@twyr/framework-classes';
import { MedicoBaseSurface } from '../../../../base_classes/surface.js';
import { Mutex } from 'async-mutex';

const HTTP_ERROR_FORBIDDEN = 403;
const HTTP_ERROR_UNPROCESSABLE_CONTENT = 422;

/**
 * @category REST API Server/Domains/Users
 * @subcategory Session Manager/Surfaces/Command
 *
 * @class
 * @name Main
 * @extends MedicoBaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The main command surface for user session management.
 */
export class Main extends MedicoBaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
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
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {Promise<void>} Resolves when the surface has loaded.
	 *
	 * @description Loads the surface and its inherited route infrastructure.
	 */
	async load() {
		await super.load?.();
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {Promise<void>} Resolves when the surface has unloaded.
	 *
	 * @description Unloads the surface and clears the local Joi validation schema cache.
	 */
	async unload() {
		await super.unload?.();
		this.#validationSchemaMap?.clear?.();
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _registerSurface
	 *
	 * @returns {Promise<Array>} Routes to be added to the REST API router.
	 *
	 * @description
	 * Registers the user session command routes:
	 * `POST /generate-otp`, `POST /validate-otp`, `POST /login`, and
	 * `POST /logout` where logout requires the `registered` RBAC middleware.
	 */
	async _registerSurface() {
		const baseRoutes = await super._registerSurface?.();

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'POST',
			path: '/generate-otp',
			handler: this.#generateOtp?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'POST',
			path: '/validate-otp',
			handler: this.#validateOtp?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'POST',
			path: '/login',
			handler: this.#login?.bind?.(this)
		});

		baseRoutes?.push?.({
			version: 1,
			httpMethod: 'POST',
			path: '/logout',
			middlewares: [await this?._rbac?.('registered')],
			handler: this.#logout?.bind?.(this)
		});

		return baseRoutes;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _unregisterSurface
	 *
	 * @returns {Promise<void>} Resolves when the surface routes are unregistered.
	 *
	 * @description Removes the command surface routes from the REST API router.
	 */
	async _unregisterSurface() {
		await super._unregisterSurface?.();
		return;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _setupValidationSchemas
	 *
	 * @param {Map} [validationSchemaMap] - Map to be populated with the validation schemas.
	 *
	 * @returns {Map} Map containing the validation schemas.
	 *
	 * @description
	 * Registers Joi schemas for:
	 * `POST /generate-otp` with `username` matching `/^\\+\\d{12}$/`,
	 * `POST /validate-otp` with the same `username` plus a four digit `password`,
	 * and `POST /login` with the same `username` and four digit `password`.
	 */
	async _setupValidationSchemas(validationSchemaMap) {
		validationSchemaMap = validationSchemaMap ?? this.#validationSchemaMap;
		validationSchemaMap = await super._setupValidationSchemas?.(
			validationSchemaMap
		);

		let generateOtpSchema = validationSchemaMap?.get?.(
			'GENERATE_OTP_VALIDATION_SCHEMA'
		);
		if (!generateOtpSchema) {
			generateOtpSchema = Joi.object({
				username: Joi.string()
					.pattern(/^\+\d{12}$/)
					.required()
					.messages({
						'string.base':
							'EVASERVER::VALIDATION_ERROR::STRING_BASE',
						'string.empty':
							'EVASERVER::VALIDATION_ERROR::STRING_EMPTY',
						'string.pattern.base':
							'EVASERVER::VALIDATION_ERROR::STRING_PATTERN_BASE',
						'any.required':
							'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED'
					})
			});

			validationSchemaMap?.set?.(
				'GENERATE_OTP_VALIDATION_SCHEMA',
				generateOtpSchema
			);
		}

		let validateOtpSchema = validationSchemaMap?.get?.(
			'VALIDATE_OTP_VALIDATION_SCHEMA'
		);

		if (!validateOtpSchema) {
			validateOtpSchema = Joi.object({
				username: Joi.string()
					.pattern(/^\+\d{12}$/)
					.required()
					.messages({
						'string.base':
							'EVASERVER::VALIDATION_ERROR::STRING_BASE',
						'string.empty':
							'EVASERVER::VALIDATION_ERROR::STRING_EMPTY',
						'string.pattern.base':
							'EVASERVER::VALIDATION_ERROR::STRING_PATTERN_BASE',
						'any.required':
							'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED'
					}),
				password: Joi.string()
					.length(4)
					.pattern(/^\d{4}$/)
					.required()
					.messages({
						'string.base':
							'EVASERVER::VALIDATION_ERROR::STRING_BASE',
						'string.empty':
							'EVASERVER::VALIDATION_ERROR::STRING_EMPTY',
						'string.length':
							'EVASERVER::VALIDATION_ERROR::STRING_LENGTH',
						'string.pattern.base':
							'EVASERVER::VALIDATION_ERROR::STRING_PATTERN_BASE',
						'any.required':
							'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED'
					})
			});

			validationSchemaMap?.set?.(
				'VALIDATE_OTP_VALIDATION_SCHEMA',
				validateOtpSchema
			);
		}

		let loginValidationSchema = validationSchemaMap?.get?.(
			'LOGIN_VALIDATION_SCHEMA'
		);

		if (!loginValidationSchema) {
			loginValidationSchema = Joi.object({
				username: Joi.string()
					.pattern(/^\+\d{12}$/)
					.required()
					.messages({
						'string.base':
							'EVASERVER::VALIDATION_ERROR::STRING_BASE',
						'string.empty':
							'EVASERVER::VALIDATION_ERROR::STRING_EMPTY',
						'string.pattern.base':
							'EVASERVER::VALIDATION_ERROR::STRING_PATTERN_BASE',
						'any.required':
							'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED'
					}),
				password: Joi.string()
					.length(4)
					.pattern(/^\d{4}$/)
					.required()
					.messages({
						'string.base':
							'EVASERVER::VALIDATION_ERROR::STRING_BASE',
						'string.empty':
							'EVASERVER::VALIDATION_ERROR::STRING_EMPTY',
						'string.length':
							'EVASERVER::VALIDATION_ERROR::STRING_LENGTH',
						'string.pattern.base':
							'EVASERVER::VALIDATION_ERROR::STRING_PATTERN_BASE',
						'any.required':
							'EVASERVER::VALIDATION_ERROR::ANY_REQUIRED'
					})
			});

			validationSchemaMap?.set?.(
				'LOGIN_VALIDATION_SCHEMA',
				loginValidationSchema
			);
		}
	}
	// #endregion

	// #region Route Handlers
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #generateOtp
	 *
	 * @param {object} ctxt - Koa context for `POST /generate-otp`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `POST /generate-otp`.
	 * Validates a request body shaped as `{ username }` where `username`
	 * is a required string matching `/^\\+\\d{12}$/`, then triggers OTP generation.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_users_session_manager_generate_otp.json]:
	 * $ curl -X POST -H "Content-Type: application/json" -d @./servers/curl_example_data/api_v1_users_session_manager_generate_otp.json ${base_url}/api/v1/users/session-manager/generate-otp
	 *
	 * OTP metadata is returned for the supplied user contact number.
	 */
	async #generateOtp(ctxt) {
		try {
			const generateOtpSchema = this.#validationSchemaMap?.get?.(
				'GENERATE_OTP_VALIDATION_SCHEMA'
			);
			await generateOtpSchema.validateAsync(ctxt?.request?.body, {
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

		const apiRegistry = this?.domainInterface?.apiRegistry;
		const otpStatus = await apiRegistry?.execute?.('GENERATE_OTP', {
			username: ctxt?.request?.body?.username,
			locale: ctxt?.locale
		});

		ctxt.status = otpStatus?.status;
		ctxt.body = otpStatus?.body;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #validateOtp
	 *
	 * @param {object} ctxt - Koa context for `POST /validate-otp`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `POST /validate-otp`.
	 * Validates a request body shaped as `{ username, password }` where
	 * `username` is required and matches `/^\\+\\d{12}$/` and `password`
	 * is a required four digit string matching `/^\\d{4}$/`.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_users_session_manager_validate_otp.json]:
	 * $ curl -X POST -H "Content-Type: application/json" -d @./servers/curl_example_data/api_v1_users_session_manager_validate_otp.json ${base_url}/api/v1/users/session-manager/validate-otp
	 *
	 * The response indicates whether the supplied OTP is valid.
	 */
	async #validateOtp(ctxt) {
		try {
			const validateOtpSchema = this.#validationSchemaMap?.get?.(
				'VALIDATE_OTP_VALIDATION_SCHEMA'
			);
			await validateOtpSchema.validateAsync(ctxt?.request?.body, {
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

		const apiRegistry = this?.domainInterface?.apiRegistry;
		const otpStatus = await apiRegistry?.execute?.('VALIDATE_OTP', {
			username: ctxt?.request?.body?.username,
			password: ctxt?.request?.body?.password,
			locale: ctxt?.locale
		});

		ctxt.status = otpStatus?.status;
		ctxt.body = otpStatus?.body;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #login
	 *
	 * @param {object} ctxt - Koa context for `POST /login`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `POST /login`.
	 * Validates a request body shaped as `{ username, password }` where
	 * `username` is required and matches `/^\\+\\d{12}$/` and `password`
	 * is a required four digit string matching `/^\\d{4}$/`.
	 * If no active session exists, the route authenticates the user and creates
	 * the session cookie.
	 *
	 * @example
	 * $ curl -X POST -H "Content-Type: application/json" -d '{"username":"+911234567890", "password":"1270"}' -c ./cookies.txt ${base_url}/api/v1/users/session-manager/login
	 *
	 * The authenticated user profile is returned and the session cookie is set.
	 */
	async #login(ctxt) {
		if (ctxt?.isAuthenticated?.()) {
			const userError = new Error(
				'EVASERVER::USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION'
			);
			userError.status = HTTP_ERROR_FORBIDDEN;
			userError.code =
				'EVASERVER::USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION';

			throw userError;
		}

		try {
			const loginValidationSchema = this.#validationSchemaMap?.get?.(
				'LOGIN_VALIDATION_SCHEMA'
			);

			await loginValidationSchema.validateAsync(ctxt?.request?.body, {
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

		const authRepository =
			await this?.domainInterface?.iocContainer?.resolve?.('Auth');
		const authenticator = authRepository?.authenticate?.('user-local');

		await authenticator?.(ctxt, async () => {});

		const apiRegistry = this?.domainInterface?.apiRegistry;
		const postLoginStatus = await apiRegistry?.execute?.('LOGIN', {
			user: ctxt?.state?.user,
			role: ctxt?.session?.passport?.user?.['role'],
			locale: ctxt?.locale
		});

		ctxt.session.passport.user = postLoginStatus?.sessionData;
		ctxt.status = postLoginStatus?.status;
		ctxt.body = postLoginStatus?.body;
		ctxt.locale = postLoginStatus?.locale ?? ctxt?.locale;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #logout
	 *
	 * @param {object} ctxt - Koa context for `POST /logout`.
	 *
	 * @returns {Promise<void>} Resolves after the response has been written.
	 *
	 * @description
	 * Handles `POST /logout`.
	 * This route has no Joi body validation and instead relies on the route definition:
	 * it is a `POST /logout` endpoint guarded by the `registered` RBAC middleware and
	 * logs out the currently authenticated user session.
	 *
	 * @example
	 * $ curl -X POST -b ./cookies.txt ${base_url}/api/v1/users/session-manager/logout
	 *
	 * A localized logout response is returned for the current user session.
	 */
	async #logout(ctxt) {
		const userId = ctxt?.state?.user?.id;
		const userLocale = ctxt?.locale;
		const userRole = ctxt?.session?.passport?.user?.['role'];

		const userName =
			ctxt?.state?.user?.primary_contact?.contact ??
			ctxt?.state?.user?.mobile_no ??
			'';

		await ctxt?.logout?.();

		const apiRegistry = this?.domainInterface?.apiRegistry;
		const logoutStatus = await apiRegistry?.execute?.('LOGOUT', {
			userId: userId,
			userName: userName,
			locale: userLocale
		});

		ctxt.state.user = {
			id: userId,
			role: userRole,
			mobile_no: ctxt?.state?.user?.mobile_no
		};

		ctxt.status = logoutStatus?.status;
		ctxt.body = logoutStatus?.body;
		ctxt.locale = userLocale;
	}
	// #endregion

	// #region Private Members
	#validationSchemaMap = new Map();
	// #endregion
}

/**
 * @category REST API Server/Domains/Users
 * @subcategory Session Manager/Surfaces/Command
 *
 * @class
 * @name MainSurfaceFactory
 * @extends EVASBaseFactory
 *
 * @classdesc Factory for the main command surface.
 */
export default class MainSurfaceFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
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
	 * @subcategory Session Manager/Surfaces/Command
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
	 * @returns {Promise<Main>} Resolves to the Main surface instance.
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof MainSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves when the cached Main instance is cleared.
	 *
	 * @description Destroys the cached Main command surface instance.
	 */
	static async destroyInstances() {
		await MainSurfaceFactory.#mutex?.runExclusive?.(async () => {
			await MainSurfaceFactory.#mainInstance?.unload?.();
			MainSurfaceFactory.#mainInstance = undefined;

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof MainSurfaceFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name SurfaceName
	 *
	 * @returns {string} Name of this surface.
	 *
	 * @description
	 * Returns the surface name: `Main`.
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
