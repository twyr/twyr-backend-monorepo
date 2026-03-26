/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Middlewares
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { createErrorForPropagation } from '@twyr/error-serializer';
import { UserBaseMiddleware } from 'baseclass:middleware';

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Middlewares
 *
 * @class
 * @name Basics
 * @extends UserBaseMiddleware
 *
 * @param {string} [location] - The artifact directory on disk.
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts.
 *
 * @classdesc Profile middleware for creating, reading, updating, and deleting user basics.
 */
export class Basics extends UserBaseMiddleware {
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}

	/**
	 * Registers profile middleware APIs with the domain API registry.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @returns {Promise<null|undefined>} Nothing when registration succeeds.
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
					'CREATE',
					this.#createBasics?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.('READ', this.#readBasics?.bind?.(this))
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'UPDATE',
					this.#updateBasics?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'DELETE',
					this.#deleteBasics?.bind?.(this)
				)
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
	 * Unregisters profile middleware APIs from the domain API registry.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @returns {Promise<null|undefined>} Nothing when unregistration succeeds.
	 */
	async _unregisterApi() {
		const errors = [];

		try {
			const apiRegistry = this?.domainInterface?.apiRegistry;
			let unregisterResolutions = [];

			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'DELETE',
					this.#deleteBasics?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'UPDATE',
					this.#updateBasics?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'READ',
					this.#readBasics?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'CREATE',
					this.#createBasics?.bind?.(this)
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

	/**
	 * Creates a user profile after validating the submitted OTP and locale.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Basics
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #createBasics
	 *
	 * @param {object} payload - API payload containing profile creation data.
	 * @param {object} payload.data - JSON:API payload for the user resource.
	 * @returns {Promise<object>} HTTP response data for the created profile.
	 */
	async #createBasics({ data }) {
		const Models = await this?._getModelsFromDomain?.([
			{ type: 'relational', name: 'user' },
			{ type: 'relational', name: 'user-locale' }
		]);

		const UserModel = Models?.[0];
		const UserLocaleModel = Models?.[1];

		const user =
			await this?.domainInterface?.serializer?.deserializeAsync?.(
				data?.data?.type,
				data
			);

		const cacheRepository =
			await this?.domainInterface?.iocContainer?.resolve?.('Cache');
		const otpNumber = await this?._executeWithBackOff?.(async () => {
			return cacheRepository?.get?.(`user-otp-${user?.mobile_no}`);
		});

		if (user?.otp !== otpNumber) {
			const userError = new Error(
				'EVASERVER::USERS::PROFILE::INVALID_OTP'
			);
			userError.code = 'EVASERVER::USERS::PROFILE::INVALID_OTP';
			throw userError;
		}

		const existingUser = await this?._executeWithBackOff?.(async () => {
			return UserModel?.query?.()
				?.where?.('mobile_no', '=', user?.mobile_no)
				?.andWhere?.('is_deleted', '=', false)
				?.first?.();
		});

		if (existingUser) {
			const userError = new Error(
				'EVASERVER::USERS::PROFILE::USER_ALREADY_EXISTS'
			);
			userError.code = 'EVASERVER::USERS::PROFILE::USER_ALREADY_EXISTS';
			throw userError;
		}

		const createdUser = await this?._executeWithBackOff?.(async () => {
			return UserModel?.query?.().insertAndFetch?.({
				mobile_no: user?.mobile_no
			});
		});

		if (user?.locale_code) {
			await this?._executeWithBackOff?.(async () => {
				return UserLocaleModel?.query?.().insert?.({
					user_id: createdUser?.id,
					locale_code: user?.locale_code,
					is_primary: true
				});
			});
		}

		this?.domainInterface?.eventEmitter?.emit?.('USER::INVALIDATE_CACHE', {
			userId: createdUser?.id
		});

		return this.#readBasics({ user: createdUser });
	}

	/**
	 * Reads the persisted profile for the authenticated user.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Basics
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #readBasics
	 *
	 * @param {object} payload - API payload containing the current user.
	 * @param {object} payload.user - The authenticated user record.
	 * @returns {Promise<object>} HTTP response data for the stored profile.
	 */
	async #readBasics({ user }) {
		const Models = await this?._getModelsFromDomain?.([
			{ type: 'relational', name: 'user' }
		]);
		const UserModel = Models?.[0];

		let storedUser = await this?._executeWithBackOff?.(async () => {
			return UserModel?.query?.()
				?.where?.('id', '=', user?.id)
				?.andWhere?.('is_deleted', '=', false)
				?.withGraphFetched?.(
					'[contacts.[contactType], locales.[locale]]'
				)
				?.first?.();
		});

		storedUser = await this?.domainInterface?.serializer?.serializeAsync?.(
			'user',
			storedUser
		);

		return {
			status: 200,
			body: storedUser
		};
	}

	/**
	 * Updates mutable fields on the authenticated user's profile.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Basics
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #updateBasics
	 *
	 * @param {object} payload - API payload containing the user and update body.
	 * @param {object} payload.user - The authenticated user record.
	 * @param {object} payload.data - JSON:API payload for the update.
	 * @returns {Promise<object>} HTTP response data for the updated profile.
	 */
	async #updateBasics({ user, data }) {
		const Models = await this?._getModelsFromDomain?.([
			{ type: 'relational', name: 'user' }
		]);
		const UserModel = Models?.[0];

		const dataToBeUpdated =
			await this?.domainInterface?.serializer?.deserializeAsync?.(
				data?.data?.type,
				data
			);

		delete dataToBeUpdated.created_at;
		delete dataToBeUpdated.updated_at;
		delete dataToBeUpdated.is_deleted;
		delete dataToBeUpdated.otp;
		delete dataToBeUpdated.locale_code;

		await this?._executeWithBackOff?.(async () => {
			return UserModel?.query?.()?.patchAndFetchById?.(user?.id, {
				...(dataToBeUpdated?.mobile_no && {
					mobile_no: dataToBeUpdated?.mobile_no
				})
			});
		});

		this?.domainInterface?.eventEmitter?.emit?.('USER::INVALIDATE_CACHE', {
			userId: user?.id
		});

		return this.#readBasics({ user });
	}

	/**
	 * Soft-deletes the authenticated user's profile.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Basics
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #deleteBasics
	 *
	 * @param {object} payload - API payload containing the current user.
	 * @param {object} payload.user - The authenticated user record.
	 * @returns {Promise<object>} HTTP response data for the delete operation.
	 */
	async #deleteBasics({ user }) {
		const Models = await this?._getModelsFromDomain?.([
			{ type: 'relational', name: 'user' }
		]);
		const UserModel = Models?.[0];

		await this?._executeWithBackOff?.(async () => {
			return UserModel?.query?.().patchAndFetchById?.(user?.id, {
				is_deleted: true
			});
		});

		this?.domainInterface?.eventEmitter?.emit?.('USER::INVALIDATE_CACHE', {
			userId: user?.id
		});

		return {
			status: 204
		};
	}
}

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Middlewares
 *
 * @class
 * @name BasicsMiddlewareFactory
 * @extends EVASBaseFactory
 *
 * @classdesc Factory for the profile basics middleware.
 */
export default class BasicsMiddlewareFactory extends EVASBaseFactory {
	static #basicsInstance = undefined;

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}

	/**
	 * Creates or reuses the singleton basics middleware instance.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof BasicsMiddlewareFactory
	 * @static
	 * @function
	 * @name createInstances
	 *
	 * @param {object} domainInterface - Domain functionality exposed to sub-artifacts.
	 * @returns {Promise<Basics>} The singleton middleware instance.
	 */
	static async createInstances(domainInterface) {
		if (!BasicsMiddlewareFactory.#basicsInstance) {
			const basicsInstance = new Basics(
				BasicsMiddlewareFactory['$disk_unc'],
				domainInterface
			);

			await basicsInstance?.load?.();
			BasicsMiddlewareFactory.#basicsInstance = basicsInstance;
		}

		return BasicsMiddlewareFactory.#basicsInstance;
	}

	/**
	 * Destroys the singleton basics middleware instance.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof BasicsMiddlewareFactory
	 * @static
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves after the instance is unloaded.
	 */
	static async destroyInstances() {
		await BasicsMiddlewareFactory.#basicsInstance?.unload?.();
		BasicsMiddlewareFactory.#basicsInstance = undefined;
	}

	/**
	 * Gets the exported middleware name.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof BasicsMiddlewareFactory
	 * @static
	 * @readonly
	 * @member {string}
	 * @name MiddlewareName
	 * @returns {string} The middleware class name.
	 */
	static get MiddlewareName() {
		return 'Basics';
	}
}
