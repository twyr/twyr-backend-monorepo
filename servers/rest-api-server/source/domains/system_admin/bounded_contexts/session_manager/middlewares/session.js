/**
 * Imports for this file
 *
 * @category REST API Server/Domains/System Admin
 * @subcategory Session Manager/Middlewares
 *
 * @ignore
 */
import { randomInt } from 'node:crypto';
import { DateTime } from 'luxon';

import { EVASBaseFactory } from '@twyr/framework-classes';
import { createErrorForPropagation } from '@twyr/error-serializer';
import { BaseMiddleware } from 'baseclass:middleware';
import { Mutex } from 'async-mutex';

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
	 * @ignore
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
	 * @override
	 * @function
	 * @name _registerApi
	 *
	 * @returns {Promise<void>|undefined} Resolves when middleware APIs are registered.
	 *
	 * @description Registers the user session middleware APIs with the domain API registry.
	 */
	async _registerApi() {
		const errors = [];

		try {
			const apiRegistry = this?.domainInterface?.apiRegistry;
			let registerResolutions = [];

			const baseApis = await super._registerApi?.();
			for (const baseApi of baseApis ?? []) {
				registerResolutions?.push?.(
					apiRegistry?.register?.(baseApi?.pattern, baseApi?.handler)
				);
			}

			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'GENERATE_OTP',
					this.#generateOtp?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'VALIDATE_OTP',
					this.#validateOtp?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.('LOGIN', this.#login?.bind?.(this))
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.('LOGOUT', this.#logout?.bind?.(this))
			);

			registerResolutions =
				await Promise?.allSettled?.(registerResolutions);
			for (const registerResolution of registerResolutions) {
				if (registerResolution?.status === 'fulfilled') continue;
				errors?.push?.(registerResolution?.reason);
			}
		} catch (error) {
			errors?.push?.(error);
		}

		if (!errors?.length) return;

		const propagatedError = createErrorForPropagation?.(
			`${this?.name}::_registerApi error`,
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
	 * @override
	 * @function
	 * @name _unregisterApi
	 *
	 * @returns {Promise<void>|undefined} Resolves when middleware APIs are unregistered.
	 *
	 * @description Removes the user session middleware APIs from the domain API registry.
	 */
	async _unregisterApi() {
		const errors = [];

		try {
			const apiRegistry = this?.domainInterface?.apiRegistry;
			let unregisterResolutions = [];

			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.('LOGIN', this.#login?.bind?.(this))
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.('LOGOUT', this.#logout?.bind?.(this))
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'VALIDATE_OTP',
					this.#validateOtp?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'GENERATE_OTP',
					this.#generateOtp?.bind?.(this)
				)
			);

			unregisterResolutions = await Promise?.allSettled?.(
				unregisterResolutions
			);
			for (const unregisterResolution of unregisterResolutions) {
				if (unregisterResolution?.status === 'fulfilled') continue;
				errors?.push?.(unregisterResolution?.reason);
			}

			await super._unregisterApi?.();
		} catch (error) {
			errors?.push?.(error);
		}

		if (!errors?.length) return;

		const propagatedError = createErrorForPropagation?.(
			`${this?.name}::_unregisterApi error`,
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
		let secureOtp = 9090;

		if (global.serverEnvironment === 'production') {
			secureOtp = randomInt(1000, 10_000);
		}

		const cacheRepository =
			await this?.domainInterface?.iocContainer?.resolve?.('Cache');

		const cacheMulti = await cacheRepository?.multi?.();
		cacheMulti?.set?.(`system-admin-otp-${username}`, secureOtp);
		cacheMulti?.expire?.(`system-admin-otp-${username}`, 600);

		await this?._executeWithBackOff?.(async () => {
			return cacheMulti?.exec?.();
		});

		let expiryTime = DateTime?.now?.()?.plus?.({ minutes: 10 });
		expiryTime = expiryTime
			?.setLocale(locale)
			?.toLocaleString?.(DateTime?.TIME_WITH_SHORT_OFFSET)
			?.toLocaleUpperCase?.();

		const i18nRepository =
			await this?.domainInterface?.iocContainer?.resolve?.('MessageI18N');

		const otpMessage = await i18nRepository?.translate?.(
			'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_SMS',
			locale,
			{
				otp: secureOtp,
				expiryTime: expiryTime
			}
		);

		const responseMessage = await i18nRepository?.translate?.(
			'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
			locale
		);

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
		const cacheRepository =
			await this?.domainInterface?.iocContainer?.resolve?.('Cache');

		const storedOtp = await this?._executeWithBackOff?.(async () => {
			return cacheRepository?.get?.(`system-admin-otp-${username}`);
		});

		const isOtpValid = (storedOtp ?? '') === password;

		const i18nRepository =
			await this?.domainInterface?.iocContainer?.resolve?.('MessageI18N');

		let isValidMessage;
		if (isOtpValid) {
			isValidMessage = 'OKAY';
		} else {
			isValidMessage = await i18nRepository?.translate?.(
				'AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID',
				locale
			);
		}

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
		this?.domainInterface?.eventEmitter?.emit?.('SYSTEM_ADMIN_LOGIN', {
			userId: user?.id
		});

		const apiRegistry = this?.domainInterface?.apiRegistry;
		const profileStatus = await apiRegistry?.execute?.(
			'SYSTEMADMIN::PROFILE::READ',
			{
				user,
				locale: user?.locale_id ?? user?.locale_code
			}
		);

		return {
			status: 200,
			sessionData: {
				id: user?.id,
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
		this?.domainInterface?.eventEmitter?.emit?.(
			'SYSTEM_ADMIN::INVALIDATE_CACHE',
			{
				userId: userId
			}
		);

		const i18nRepository =
			await this?.domainInterface?.iocContainer?.resolve?.('MessageI18N');

		const responseMessage = await i18nRepository?.translate?.(
			'SYSTEM_ADMIN::SESSION_MANAGER::LOGOUT_MESSAGE',
			locale,
			{ userName: userName }
		);

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
	 * @ignore
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
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<Session>} Resolves to the Session middleware instance.
	 */
	static async createInstances(domainInterface) {
		return await SessionMiddlewareFactory.#mutex?.runExclusive?.(
			async () => {
				if (!SessionMiddlewareFactory.#sessionInstance) {
					const sessionInstance = new Session(
						SessionMiddlewareFactory['$disk_unc'],
						domainInterface
					);

					await sessionInstance?.load?.();
					SessionMiddlewareFactory.#sessionInstance = sessionInstance;
				}

				return SessionMiddlewareFactory.#sessionInstance;
			}
		);
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Middlewares
	 *
	 * @memberof SessionMiddlewareFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves when the cached Session instance is cleared.
	 *
	 * @description Destroys the cached Session middleware instance.
	 */
	static async destroyInstances() {
		await SessionMiddlewareFactory.#mutex?.runExclusive?.(async () => {
			await SessionMiddlewareFactory.#sessionInstance?.unload?.();
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
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name MiddlewareName
	 *
	 * @returns {string} Name of this middleware.
	 *
	 * @description
	 * Returns the middleware name: `Session`.
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
