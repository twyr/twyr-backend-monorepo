/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Session Manager/Surfaces/Command
 *
 * @ignore
 */
import Joi from 'joi';

import { Mutex } from 'async-mutex';

import { EVASBaseFactory } from '@twyr/framework-classes';

import { UserBaseSurface } from 'baseclass:surface';

const HTTP_ERROR_FORBIDDEN = 403;
const HTTP_ERROR_UNPROCESSABLE_CONTENT = 422;

/**
 * @category REST API Server/Domains/Users
 * @subcategory Session Manager/Surfaces/Command
 *
 * @class
 * @name Main
 * @extends UserBaseSurface
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The main command surface for user session management.
 */
export class Main extends UserBaseSurface {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
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
	 * Unloads the surface infrastructure and clears cached validation schemas.
	 */
	async unload() {
		// Release the surface routes.
		await super.unload();

		// Discard cached validation schemas.
		this.#validationSchemaMap.clear();
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
			path: '/generate-otp',
			handler: this.#generateOtp.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'POST',
			path: '/validate-otp',
			handler: this.#validateOtp.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'POST',
			path: '/login',
			handler: this.#login.bind(this)
		});

		baseRoutes.push({
			version: 1,
			httpMethod: 'POST',
			path: '/logout',
			middlewares: [await this._rbac('registered')],
			handler: this.#logout.bind(this)
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
	 * @protected
	 * @override
	 * @function
	 * @name _unregisterSurface
	 *
	 * @returns {Promise<void>} Resolves after registration changes complete.
	 *
	 * @description
	 * Removes the command surface routes from the REST API router.
	 */
	async _unregisterSurface() {
		await super._unregisterSurface();
		return;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof Main
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _setupValidationSchemas
	 *
	 * @param {Map} [validationSchemaMap] - Map to populate; defaults to the surface cache when available.
	 *
	 * @returns {Promise<void>} Resolves after the validation schemas are cached.
	 *
	 * @description
	 * Registers Joi schemas for:
	 * `POST /generate-otp` with `username` matching `/^\+\d{12}$/`,
	 * `POST /validate-otp` with the same `username` plus a four digit `password`,
	 * and `POST /login` with the same `username` and four digit `password`.
	 */
	async _setupValidationSchemas(validationSchemaMap) {
		// Step 1: Reuse the supplied schema map or the surface cache.
		validationSchemaMap = validationSchemaMap ?? this.#validationSchemaMap;

		// Step 2: Apply the base validation schemas.
		validationSchemaMap = await super._setupValidationSchemas(
			validationSchemaMap
		);

		// Step 3: Build the OTP generation schema when it is missing.
		let generateOtpSchema = validationSchemaMap.get(
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

			// Cache the schema for subsequent requests.
			validationSchemaMap.set(
				'GENERATE_OTP_VALIDATION_SCHEMA',
				generateOtpSchema
			);
		}

		// Step 4: Build the OTP validation schema when it is missing.
		let validateOtpSchema = validationSchemaMap.get(
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

			// Cache the schema for subsequent requests.
			validationSchemaMap.set(
				'VALIDATE_OTP_VALIDATION_SCHEMA',
				validateOtpSchema
			);
		}

		// Step 5: Build the login schema when it is missing.
		let loginValidationSchema = validationSchemaMap.get(
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

			// Cache the schema for subsequent requests.
			validationSchemaMap.set(
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
	 * Validates `{ username }`, requiring `username` to match `/^\+\d{12}$/`,
	 * then requests OTP generation and writes the middleware response.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_users_session_manager_generate_otp.json]:
	 * // Invocation configuration [./servers/curl_example_data/api_v1_users_session_manager_generate_otp.curl]:
	 * $ curl -X POST -H "Content-Type: application/json" -d @./servers/curl_example_data/api_v1_users_session_manager_generate_otp.json "${base_url}/api/v1/users/session-manager/generate-otp"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_users_session_manager_generate_otp.curl "${base_url}/api/v1/users/session-manager/generate-otp"
	 */
	async #generateOtp(ctxt) {
		// Step 1: Validate the OTP request against its schema.
		try {
			const generateOtpSchema = this.#validationSchemaMap.get(
				'GENERATE_OTP_VALIDATION_SCHEMA'
			);
			await generateOtpSchema.validateAsync(ctxt.request.body, {
				abortEarly: false
			});
		} catch (error) {
			// Convert input validation failures into handler errors.
			const validationError = this._convertValidationErrorToHandlerError(
				error,
				'EVASERVER::INPUT_VALIDATION_ERROR'
			);
			validationError.status = HTTP_ERROR_UNPROCESSABLE_CONTENT;
			throw validationError;
		}

		// Step 2: Execute the OTP operation through the middleware API.
		const apiRegistry = this.domainInterface.apiRegistry;
		const otpStatus = await apiRegistry.execute('GENERATE_OTP', {
			username: ctxt?.request?.body?.username,
			locale: ctxt.locale
		});

		// Step 3: Write the OTP result to the HTTP response.
		ctxt.status = otpStatus.status;
		ctxt.body = otpStatus.body;
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
	 * Validates `{ username, password }`, requiring `username` to match
	 * `/^\+\d{12}$/` and `password` to be a four digit string matching `/^\d{4}$/`.
	 * Writes the OTP validation result returned by the middleware.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_users_session_manager_validate_otp.json]:
	 * // Invocation configuration [./servers/curl_example_data/api_v1_users_session_manager_validate_otp.curl]:
	 * $ curl -X POST -H "Content-Type: application/json" -d @./servers/curl_example_data/api_v1_users_session_manager_validate_otp.json "${base_url}/api/v1/users/session-manager/validate-otp"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_users_session_manager_validate_otp.curl "${base_url}/api/v1/users/session-manager/validate-otp"
	 */
	async #validateOtp(ctxt) {
		// Step 1: Validate the OTP request against its schema.
		try {
			const validateOtpSchema = this.#validationSchemaMap.get(
				'VALIDATE_OTP_VALIDATION_SCHEMA'
			);
			await validateOtpSchema.validateAsync(ctxt.request.body, {
				abortEarly: false
			});
		} catch (error) {
			// Convert input validation failures into handler errors.
			const validationError = this._convertValidationErrorToHandlerError(
				error,
				'EVASERVER::INPUT_VALIDATION_ERROR'
			);
			validationError.status = HTTP_ERROR_UNPROCESSABLE_CONTENT;
			throw validationError;
		}

		// Step 2: Execute the OTP operation through the middleware API.
		const apiRegistry = this.domainInterface.apiRegistry;
		const otpStatus = await apiRegistry.execute('VALIDATE_OTP', {
			username: ctxt?.request?.body?.username,
			password: ctxt?.request?.body?.password,
			locale: ctxt.locale
		});

		// Step 3: Write the OTP result to the HTTP response.
		ctxt.status = otpStatus.status;
		ctxt.body = otpStatus.body;
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
	 * Validates the same username and four digit password format as OTP validation.
	 * Rejects an existing authenticated session, authenticates the user,
	 * and writes the serialized profile while storing the session identity.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_users_session_manager_login.json]:
	 * // Invocation configuration [./servers/curl_example_data/api_v1_users_session_manager_login.curl]:
	 * $ curl -X POST -H "Content-Type: application/json" -c ./cookies.txt -d @./servers/curl_example_data/api_v1_users_session_manager_login.json "${base_url}/api/v1/users/session-manager/login"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_users_session_manager_login.curl "${base_url}/api/v1/users/session-manager/login"
	 */
	async #login(ctxt) {
		// Step 1: Reject login when the request already has an active session.
		if (ctxt.isAuthenticated()) {
			const userError = new Error(
				'EVASERVER::USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION'
			);
			userError.status = HTTP_ERROR_FORBIDDEN;
			userError.code =
				'EVASERVER::USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION';

			throw userError;
		}

		// Step 2: Validate the submitted login credentials.
		try {
			const loginValidationSchema = this.#validationSchemaMap.get(
				'LOGIN_VALIDATION_SCHEMA'
			);

			await loginValidationSchema.validateAsync(ctxt.request.body, {
				abortEarly: false
			});
		} catch (error) {
			const validationError = this._convertValidationErrorToHandlerError(
				error,
				'EVASERVER::INPUT_VALIDATION_ERROR'
			);
			validationError.status = HTTP_ERROR_UNPROCESSABLE_CONTENT;
			throw validationError;
		}

		// Step 3: Authenticate the credentials using the configured Passport strategy.
		const authRepository =
			await this.domainInterface.iocContainer.resolve('Auth');
		const authenticator = authRepository.authenticate('user-local');

		await authenticator(ctxt, async () => {});

		// Step 4: Run the login middleware to prepare the profile and session data.
		const apiRegistry = this.domainInterface.apiRegistry;
		const postLoginStatus = await apiRegistry.execute('LOGIN', {
			user: ctxt.state.user,
			role: ctxt?.session?.passport?.user?.['role'],
			locale: ctxt.locale
		});

		// Step 5: Serialize the profile for the login response.
		const profileBody =
			await this.domainInterface.serializer.serializeAsync(
				'user',
				postLoginStatus.body.body
			);

		// Step 6: Store the session identity before writing the login response.
		ctxt.session.passport.user = postLoginStatus.sessionData;

		// Step 7: Write the login response with the serialized profile.
		ctxt.status = postLoginStatus.status;
		ctxt.body = { ...postLoginStatus.body, body: profileBody };
		ctxt.locale = postLoginStatus.locale ?? ctxt.locale;
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
	 * Logs out the authenticated user, requests cache invalidation through
	 * the logout middleware, and writes the localized response. The request body is unused.
	 * Requires a session authorized by the `registered` RBAC middleware.
	 *
	 * @example
	 * // Given the following input data [./servers/curl_example_data/api_v1_users_session_manager_logout.json]:
	 * // Invocation configuration [./servers/curl_example_data/api_v1_users_session_manager_logout.curl]:
	 * $ curl -X POST -H "Content-Type: application/json" -b ./cookies.txt -d @./servers/curl_example_data/api_v1_users_session_manager_logout.json "${base_url}/api/v1/users/session-manager/logout"
	 * // Equivalent invocation using the configuration file:
	 * $ curl --config ./servers/curl_example_data/api_v1_users_session_manager_logout.curl "${base_url}/api/v1/users/session-manager/logout"
	 */
	async #logout(ctxt) {
		// Step 1: Capture the user details needed after the Passport session is cleared.
		const userId = ctxt?.state?.user?.id;
		const userLocale = ctxt.locale;
		const userRole = ctxt?.session?.passport?.user?.['role'];

		const userName =
			ctxt?.state?.user?.primary_contact?.contact ??
			ctxt?.state?.user?.mobile_no ??
			'';

		// Step 2: Clear the Passport login.
		await ctxt.logout();

		// Step 3: Run the logout middleware using the captured user details.
		const apiRegistry = this.domainInterface.apiRegistry;
		const logoutStatus = await apiRegistry.execute('LOGOUT', {
			userId: userId,
			userName: userName,
			locale: userLocale
		});

		// Step 4: Retain user details for request auditing.
		ctxt.state.user = {
			id: userId,
			role: userRole,
			mobile_no: ctxt?.state?.user?.mobile_no
		};

		// Step 5: Write the logout response using the original request locale.
		ctxt.status = logoutStatus.status;
		ctxt.body = logoutStatus.body;
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Surfaces/Command
	 *
	 * @memberof MainSurfaceFactory
	 * @static
	 * @public
	 * @override
	 * @readonly
	 * @function
	 * @name SurfaceName
	 *
	 * @returns {string} Name of this surface.
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
