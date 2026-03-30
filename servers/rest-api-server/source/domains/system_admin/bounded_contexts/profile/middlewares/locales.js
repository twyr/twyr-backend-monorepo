/**
 * Imports for this file
 *
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Middlewares
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { createErrorForPropagation } from '@twyr/error-serializer';
import { SystemAdminBaseMiddleware } from 'baseclass:middleware';

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Middlewares
 *
 * @class
 * @name Locales
 * @extends MedicoBaseMiddleware
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Middleware to handle Medico profile locales.
 */
export class Locales extends SystemAdminBaseMiddleware {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Middlewares
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
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Locales
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _registerApi
	 *
	 * @returns {null} - The array of API to be registered
	 *
	 * @description
	 * Adds the API to the apiRegistry in the domainInterface
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
					'CREATE_LOCALE',
					this.#createLocales?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'READ_LOCALE',
					this.#readLocales?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'UPDATE_LOCALE',
					this.#updateLocales?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'DELETE_LOCALE',
					this.#deleteLocales?.bind?.(this)
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
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Locales
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _unregisterApi
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Removes the API from the apiRegistry in the domainInterface
	 */
	async _unregisterApi() {
		const errors = [];

		try {
			const apiRegistry = this?.domainInterface?.apiRegistry;
			let unregisterResolutions = [];

			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'DELETE_LOCALE',
					this.#deleteLocales?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'UPDATE_LOCALE',
					this.#updateLocales?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'READ_LOCALE',
					this.#readLocales?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'CREATE_LOCALE',
					this.#createLocales?.bind?.(this)
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
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Locales
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #createLocales
	 *
	 * @param {object} payload - API payload for `CREATE_LOCALE`.
	 * @param {object} payload.user - Logged in user.
	 * @param {object} payload.data - JSON:API locale payload.
	 *
	 * @returns {Promise<object>} Response payload containing the created locale.
	 *
	 * @description Creates a locale record for the logged in user.
	 */
	async #createLocales({ user, data }) {
		return this?._createUserEntity?.({
			model: { type: 'relational', name: 'system-admin-locale' },
			user,
			payload: data,
			relationships: '[user, locale]'
		});
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Locales
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #readLocales
	 *
	 * @param {object} payload - API payload for `READ_LOCALE`.
	 * @param {object} payload.user - Logged in user.
	 * @param {string} payload.localeId - Optional locale identifier.
	 *
	 * @returns {Promise<object>} Response payload containing one or more locale records.
	 *
	 * @description Reads locale data associated with the logged in user.
	 */
	async #readLocales({ user, localeId }) {
		return this?._readUserEntity?.({
			model: { type: 'relational', name: 'system-admin-locale' },
			user,
			entityId: localeId,
			relationships: '[user, locale]',
			serializeType: 'system_admin_locale'
		});
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Locales
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #updateLocales
	 *
	 * @param {object} payload - API payload for `UPDATE_LOCALE`.
	 * @param {object} payload.user - Logged in user.
	 * @param {object} payload.data - JSON:API locale payload.
	 *
	 * @returns {Promise<object>} Response payload containing the updated locale.
	 *
	 * @description Updates a locale record for the logged in user.
	 */
	async #updateLocales({ user, data }) {
		const returnValue = await this?._updateUserEntity?.({
			model: { type: 'relational', name: 'system-admin-locale' },
			user,
			payload: data,
			relationships: '[user, locale]'
		});

		return {
			status: returnValue?.status,
			body: returnValue?.body
		};
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Locales
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #deleteLocales
	 *
	 * @param {object} payload - API payload for `DELETE_LOCALE`.
	 * @param {object} payload.user - Logged in user.
	 * @param {string} payload.localeId - Locale identifier to delete.
	 *
	 * @returns {Promise<object>} Response payload containing the delete status.
	 *
	 * @description Deletes a locale record for the logged in user.
	 */
	async #deleteLocales({ user, localeId }) {
		const returnValue = await this?._deleteUserEntity?.({
			model: { type: 'relational', name: 'system-admin-locale' },
			user,
			entityId: localeId,
			eventName: 'SYSTEM_ADMIN::LOCALE_DELETED'
		});

		return { status: returnValue?.status };
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Profile/Middlewares
 *
 * @class
 * @name LocalesMiddlewareFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Medico Domain Profile Locales Middleware Class Factory.
 */
export default class LocalesMiddlewareFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Middlewares
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
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof LocalesMiddlewareFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Locales} - The Locales middleware instance.
	 */
	static async createInstances(domainInterface) {
		if (!LocalesMiddlewareFactory.#localesInstance) {
			const localesInstance = new Locales(
				LocalesMiddlewareFactory['$disk_unc'],
				domainInterface
			);

			await localesInstance?.load?.();
			LocalesMiddlewareFactory.#localesInstance = localesInstance;
		}

		return LocalesMiddlewareFactory.#localesInstance;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof LocalesMiddlewareFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the Locales instance
	 */
	static async destroyInstances() {
		await LocalesMiddlewareFactory.#localesInstance?.unload?.();
		LocalesMiddlewareFactory.#localesInstance = undefined;
		return;
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof LocalesMiddlewareFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name MiddlewareName
	 *
	 * @returns {string} - Name of this middleware.
	 *
	 * @description
	 * Returns the name of this middleware - Locales
	 */
	static get MiddlewareName() {
		return 'Locales';
	}
	// #endregion

	// #region Private Static Members
	static #localesInstance = undefined;
	// #endregion
}
