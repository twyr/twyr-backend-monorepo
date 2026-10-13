/**
 * Imports for this file
 *
 * @category REST API Server/Domains/System Admin
 * @subcategory Session Manager/Middlewares
 *
 * @ignore
 */
import { randomInt } from 'node:crypto';

import { Mutex } from 'async-mutex';
import { DateTime } from 'luxon';

import { createErrorForPropagation } from '@twyr/error-serializer';
import { EVASBaseFactory } from '@twyr/framework-classes';

import { BaseMiddleware } from 'baseclass:middleware';

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Session Manager/Middlewares
 *
 * @class
 * @name Session
 * @extends BaseMiddleware
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc Middleware for user session OTP generation, validation, login, and logout.
 */
export class Session extends BaseMiddleware {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof Session
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {Session} A new Session instance.
	 *
	 * @description
	 * Initializes the Session middleware using its base class.
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof Session
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _registerApi
	 *
	 * @returns {Promise<void>} Resolves after registration changes complete.
	 *
	 * @description
	 * Registers the user session middleware APIs with the domain API registry.
	 */
	async _registerApi() {
		// Step 1: Register inherited and local middleware APIs, collecting any failures.
		const errors = [];

		try {
			const apiRegistry = this.domainInterface.apiRegistry;
			let registerResolutions = [];

			const baseApis = await super._registerApi();
			for (const baseApi of baseApis ?? []) {
				registerResolutions.push(
					apiRegistry.register(baseApi.pattern, baseApi.handler)
				);
			}

			registerResolutions.push(
				apiRegistry.register(
					'GENERATE_OTP',
					this.#generateOtp.bind(this)
				)
			);
			registerResolutions.push(
				apiRegistry.register(
					'VALIDATE_OTP',
					this.#validateOtp.bind(this)
				)
			);
			registerResolutions.push(
				apiRegistry.register('LOGIN', this.#login.bind(this))
			);
			registerResolutions.push(
				apiRegistry.register('LOGOUT', this.#logout.bind(this))
			);

			// Step 2: Wait for every registration operation to settle.
			registerResolutions = await Promise.allSettled(registerResolutions);

			// Step 3: Collect the failures from rejected operations.
			for (const registerResolution of registerResolutions) {
				if (registerResolution.status === 'fulfilled') continue;
				errors.push(registerResolution.reason);
			}
		} catch (error) {
			errors.push(error);
		}

		// Step 4: Propagate collected failures after all operations have been attempted.
		if (!errors.length) return;

		const propagatedError = createErrorForPropagation(
			`${this.name}::_registerApi error`,
			errors
		);

		if (propagatedError) throw propagatedError;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof Session
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _unregisterApi
	 *
	 * @returns {Promise<void>} Resolves after registration changes complete.
	 *
	 * @description
	 * Removes the user session middleware APIs from the domain API registry.
	 */
	async _unregisterApi() {
		// Step 1: Remove the local middleware APIs, collecting any failures.
		const errors = [];

		try {
			const apiRegistry = this.domainInterface.apiRegistry;
			let unregisterResolutions = [];

			unregisterResolutions.push(
				apiRegistry.unregister('LOGIN', this.#login.bind(this))
			);
			unregisterResolutions.push(
				apiRegistry.unregister('LOGOUT', this.#logout.bind(this))
			);
			unregisterResolutions.push(
				apiRegistry.unregister(
					'VALIDATE_OTP',
					this.#validateOtp.bind(this)
				)
			);
			unregisterResolutions.push(
				apiRegistry.unregister(
					'GENERATE_OTP',
					this.#generateOtp.bind(this)
				)
			);

			// Step 2: Wait for every removal operation to settle.
			unregisterResolutions = await Promise.allSettled(
				unregisterResolutions
			);

			// Step 3: Collect the failures from rejected operations.
			for (const unregisterResolution of unregisterResolutions) {
				if (unregisterResolution.status === 'fulfilled') continue;
				errors.push(unregisterResolution.reason);
			}

			await super._unregisterApi();
		} catch (error) {
			errors.push(error);
		}

		// Step 4: Propagate collected failures after all operations have been attempted.
		if (!errors.length) return;

		const propagatedError = createErrorForPropagation(
			`${this.name}::_unregisterApi error`,
			errors
		);

		if (propagatedError) throw propagatedError;
	}
	// #endregion

	// #region Handlers
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof Session
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #generateOtp
	 *
	 * @param {object} payload - API payload for `GENERATE_OTP`.
	 * @param {string} payload.username - Contact number in `+`-prefixed 12 digit format.
	 * @param {string} payload.locale - Locale code used to localize the OTP response text.
	 *
	 * @returns {Promise<object>} Response payload containing the generated OTP metadata.
	 *
	 * @description
	 * Generates a one-time password, stores it in cache for 10 minutes, and returns
	 * the localized SMS payload for the user login flow.
	 */
	async #generateOtp({ username, locale }) {
		// Step 1: Use a random OTP in production and the fixed development OTP otherwise.
		let secureOtp = 9090;

		if (global.serverEnvironment === 'production') {
			secureOtp = randomInt(1000, 10_000);
		}

		// Step 2: Store the OTP with a ten-minute expiry, retrying the cache transaction.
		const cacheRepository =
			await this.domainInterface.iocContainer.resolve('Cache');

		const cacheMulti = await cacheRepository.multi();
		cacheMulti.set(`system-admin-otp-${username}`, secureOtp);
		cacheMulti.expire(`system-admin-otp-${username}`, 600);

		await this._executeWithBackOff(async () => {
			return cacheMulti.exec();
		});

		// Step 3: Format the OTP expiry time for the request locale.
		let expiryTime = DateTime.now().plus({ minutes: 10 });
		expiryTime = expiryTime
			.setLocale(locale)
			.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)
			.toLocaleUpperCase();

		// Step 4: Translate the OTP notification message.
		const i18nRepository =
			await this.domainInterface.iocContainer.resolve('MessageI18N');

		const otpMessage = await i18nRepository.translate(
			'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_SMS',
			locale,
			{
				otp: secureOtp,
				expiryTime: expiryTime
			}
		);

		// Step 5: Translate the response message for the caller.
		const responseMessage = await i18nRepository.translate(
			'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
			locale
		);

		// Step 6: Return the SMS payload and response message for the caller.
		const responseMsgStruct = {
			type: 'sms',
			deviceId: username,
			otp: secureOtp,
			expiryTime: expiryTime,
			message: otpMessage,
			prodBody: responseMessage
		};

		return {
			status: 200,
			body: responseMsgStruct
		};
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof Session
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #validateOtp
	 *
	 * @param {object} payload - API payload for `VALIDATE_OTP`.
	 * @param {string} payload.username - Contact number in `+`-prefixed 12 digit format.
	 * @param {string} payload.password - Four digit OTP supplied by the user.
	 * @param {string} payload.locale - Locale code used for the validation response.
	 *
	 * @returns {Promise<object>} Response payload indicating whether the OTP is valid.
	 *
	 * @description
	 * Fetches the cached user OTP and compares it with the supplied four digit code.
	 */
	async #validateOtp({ username, password, locale }) {
		// Step 1: Read the cached OTP.
		const cacheRepository =
			await this.domainInterface.iocContainer.resolve('Cache');

		const storedOtp = await this._executeWithBackOff(async () => {
			return cacheRepository.get(`system-admin-otp-${username}`);
		});

		// Step 2: Compare the stored OTP with the submitted password.
		const isOtpValid = (storedOtp ?? '') === password;

		// Step 3: Translate the message for an invalid OTP.
		const i18nRepository =
			await this.domainInterface.iocContainer.resolve('MessageI18N');

		let isValidMessage;
		if (isOtpValid) {
			isValidMessage = 'OKAY';
		} else {
			isValidMessage = await i18nRepository.translate(
				'AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID',
				locale
			);
		}

		// Step 4: Return the status of the OTP comparison.
		return {
			status: isOtpValid ? 200 : 401,
			body: isValidMessage
		};
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof Session
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #login
	 *
	 * @param {object} payload - API payload for `LOGIN`.
	 * @param {object} payload.user - Authenticated app user record from the auth repository.
	 *
	 * @returns {Promise<object>} Response payload containing session data and the logged-in user record.
	 *
	 * @description
	 * Emits the user login event and returns the data needed to establish the
	 * authenticated session.
	 */
	async #login({ user }) {
		// Step 1: Emit the login event.
		this.domainInterface.eventEmitter.emit('SYSTEM_ADMIN_LOGIN', {
			userId: user.id
		});

		// Step 2: Fetch the profile for the session.
		const apiRegistry = this.domainInterface.apiRegistry;
		const profileStatus = await apiRegistry.execute(
			'SYSTEMADMIN::PROFILE::READ',
			{
				user,
				locale: user.locale_id ?? user.locale_code
			}
		);

		// Step 3: Return the session identity alongside the profile result.
		return {
			status: 200,
			sessionData: {
				id: user.id,
				role: 'system_admin'
			},
			body: profileStatus
		};
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof Session
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #logout
	 *
	 * @param {object} payload - API payload for `LOGOUT`.
	 * @param {string} payload.userId - System admin identifier whose cache should be invalidated.
	 * @param {string} payload.userName - Display name interpolated into the logout message.
	 * @param {string} payload.locale - Locale code used for the logout response.
	 *
	 * @returns {Promise<object>} Response payload containing the localized logout message.
	 *
	 * @description
	 * Emits the user cache invalidation event and returns the localized logout response.
	 */
	async #logout({ userId, userName, locale }) {
		// Step 1: Request invalidation of the cached session snapshot.
		this.domainInterface.eventEmitter.emit(
			'SYSTEM_ADMIN::INVALIDATE_CACHE',
			{
				userId: userId
			}
		);

		// Step 2: Translate the logout message.
		const i18nRepository =
			await this.domainInterface.iocContainer.resolve('MessageI18N');

		const responseMessage = await i18nRepository.translate(
			'SYSTEM_ADMIN::SESSION_MANAGER::LOGOUT_MESSAGE',
			locale,
			{ userName: userName }
		);

		// Step 3: Return the translated logout response.
		return {
			status: 200,
			body: responseMessage
		};
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Session Manager/Middlewares
 *
 * @class
 * @name SessionMiddlewareFactory
 * @extends EVASBaseFactory
 *
 * @classdesc Factory for the session middleware.
 */
export default class SessionMiddlewareFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof SessionMiddlewareFactory
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @returns {SessionMiddlewareFactory} A new SessionMiddlewareFactory instance.
	 *
	 * @description
	 * Initializes the SessionMiddlewareFactory factory using its base class.
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof SessionMiddlewareFactory
	 * @async
	 * @static
	 * @public
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<Session>} Resolves to the loaded Session middleware instance.
	 *
	 * @description
	 * Creates and loads the middleware instance on first use, then reuses it.
	 * Serializes access to the cached instance with the factory mutex.
	 */
	static async createInstances(domainInterface) {
		// Create or reuse the loaded instance under the factory lock.
		return await SessionMiddlewareFactory.#mutex.runExclusive(async () => {
			if (!SessionMiddlewareFactory.#sessionInstance) {
				const sessionInstance = new Session(
					SessionMiddlewareFactory['$disk_unc'],
					domainInterface
				);

				await sessionInstance.load();
				SessionMiddlewareFactory.#sessionInstance = sessionInstance;
			}

			return SessionMiddlewareFactory.#sessionInstance;
		});
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof SessionMiddlewareFactory
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
	 * Unloads the cached middleware instance and clears the factory reference
	 * under the factory mutex.
	 */
	static async destroyInstances() {
		// Unload and release cached instances under the factory lock.
		await SessionMiddlewareFactory.#mutex.runExclusive(async () => {
			await SessionMiddlewareFactory.#sessionInstance?.unload();
			SessionMiddlewareFactory.#sessionInstance = undefined;

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof SessionMiddlewareFactory
	 * @static
	 * @public
	 * @override
	 * @readonly
	 * @function
	 * @name MiddlewareName
	 *
	 * @returns {string} Name of this middleware.
	 *
	 * @description
	 * Returns the registered middleware name: `Session`.
	 */
	static get MiddlewareName() {
		return 'Session';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #sessionInstance = undefined;
	// #endregion
}
