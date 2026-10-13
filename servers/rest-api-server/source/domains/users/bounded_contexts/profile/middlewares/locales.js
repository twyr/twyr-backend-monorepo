/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Middlewares
 *
 * @ignore
 */
import { Mutex } from 'async-mutex';

import { createErrorForPropagation } from '@twyr/error-serializer';
import { EVASBaseFactory } from '@twyr/framework-classes';

import { UserBaseMiddleware } from 'baseclass:middleware';

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Middlewares
 *
 * @class
 * @name Locales
 * @extends UserBaseMiddleware
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Middleware to handle User profile locales.
 */
export class Locales extends UserBaseMiddleware {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Locales
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {Locales} A new Locales instance.
	 *
	 * @description
	 * Initializes the Locales middleware using its base class.
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Locales
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
	 * Adds the API to the apiRegistry in the domainInterface
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
					'CREATE_LOCALE',
					this.#createLocales.bind(this)
				)
			);
			registerResolutions.push(
				apiRegistry.register(
					'READ_LOCALE',
					this.#readLocales.bind(this)
				)
			);
			registerResolutions.push(
				apiRegistry.register(
					'UPDATE_LOCALE',
					this.#updateLocales.bind(this)
				)
			);
			registerResolutions.push(
				apiRegistry.register(
					'DELETE_LOCALE',
					this.#deleteLocales.bind(this)
				)
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Locales
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
	 * Removes the API from the apiRegistry in the domainInterface
	 */
	async _unregisterApi() {
		// Step 1: Remove the local middleware APIs, collecting any failures.
		const errors = [];

		try {
			const apiRegistry = this.domainInterface.apiRegistry;
			let unregisterResolutions = [];

			unregisterResolutions.push(
				apiRegistry.unregister(
					'DELETE_LOCALE',
					this.#deleteLocales.bind(this)
				)
			);
			unregisterResolutions.push(
				apiRegistry.unregister(
					'UPDATE_LOCALE',
					this.#updateLocales.bind(this)
				)
			);
			unregisterResolutions.push(
				apiRegistry.unregister(
					'READ_LOCALE',
					this.#readLocales.bind(this)
				)
			);
			unregisterResolutions.push(
				apiRegistry.unregister(
					'CREATE_LOCALE',
					this.#createLocales.bind(this)
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
	 * @category REST API Server/Domains/Users
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
	 * @param {object} payload.data - Deserialized locale data.
	 *
	 * @returns {Promise<object>} Response payload containing the created locale.
	 *
	 * @description
	 * Creates a locale record for the logged in user.
	 */
	async #createLocales({ user, data }) {
		// Create the locale through the domain entity helper and return its result.
		return this._createUserEntity({
			model: { type: 'relational', name: 'user-locale' },
			user,
			payload: data,
			relationships: '[user, locale]'
		});
	}

	/**
	 * @category REST API Server/Domains/Users
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
	 * @description
	 * Reads locale data associated with the logged in user.
	 */
	async #readLocales({ user, localeId }) {
		// Read the locale through the domain entity helper and return its result.
		return this._readUserEntity({
			model: { type: 'relational', name: 'user-locale' },
			user,
			entityId: localeId,
			relationships: '[user, locale]'
		});
	}

	/**
	 * @category REST API Server/Domains/Users
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
	 * @param {object} payload.data - Deserialized locale data.
	 *
	 * @returns {Promise<object>} Response payload containing the updated locale.
	 *
	 * @description
	 * Updates a locale record for the logged in user.
	 */
	async #updateLocales({ user, data }) {
		// Update the locale through the domain entity helper.
		const returnValue = await this._updateUserEntity({
			model: { type: 'relational', name: 'user-locale' },
			user,
			payload: data,
			relationships: '[user, locale]'
		});

		// Return the entity helper result.
		return {
			status: returnValue.status,
			body: returnValue.body
		};
	}

	/**
	 * @category REST API Server/Domains/Users
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
	 * @description
	 * Deletes a locale record for the logged in user.
	 */
	async #deleteLocales({ user, localeId }) {
		// Delete the locale through the domain entity helper.
		const returnValue = await this._deleteUserEntity({
			model: { type: 'relational', name: 'user-locale' },
			user,
			entityId: localeId,
			eventName: 'USER::LOCALE_DELETED'
		});

		// Return the entity helper result.
		return { status: returnValue.status };
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Middlewares
 *
 * @class
 * @name LocalesMiddlewareFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The User Domain Profile Locales Middleware Class Factory.
 */
export default class LocalesMiddlewareFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof LocalesMiddlewareFactory
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @returns {LocalesMiddlewareFactory} A new LocalesMiddlewareFactory instance.
	 *
	 * @description
	 * Initializes the LocalesMiddlewareFactory factory using its base class.
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof LocalesMiddlewareFactory
	 * @async
	 * @static
	 * @public
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<Locales>} Resolves to the loaded Locales middleware instance.
	 *
	 * @description
	 * Creates and loads the middleware instance on first use, then reuses it.
	 * Serializes access to the cached instance with the factory mutex.
	 */
	static async createInstances(domainInterface) {
		// Create or reuse the loaded instance under the factory lock.
		return await LocalesMiddlewareFactory.#mutex.runExclusive(async () => {
			if (!LocalesMiddlewareFactory.#localesInstance) {
				const localesInstance = new Locales(
					LocalesMiddlewareFactory['$disk_unc'],
					domainInterface
				);

				await localesInstance.load();
				LocalesMiddlewareFactory.#localesInstance = localesInstance;
			}

			return LocalesMiddlewareFactory.#localesInstance;
		});
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof LocalesMiddlewareFactory
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
		await LocalesMiddlewareFactory.#mutex.runExclusive(async () => {
			await LocalesMiddlewareFactory.#localesInstance?.unload();
			LocalesMiddlewareFactory.#localesInstance = undefined;
			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof LocalesMiddlewareFactory
	 * @static
	 * @public
	 * @override
	 * @readonly
	 * @function
	 * @name MiddlewareName
	 *
	 * @returns {string} - Name of this middleware.
	 *
	 * @description
	 * Returns the registered middleware name: `Locales`.
	 */
	static get MiddlewareName() {
		return 'Locales';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #localesInstance = undefined;
	// #endregion
}
