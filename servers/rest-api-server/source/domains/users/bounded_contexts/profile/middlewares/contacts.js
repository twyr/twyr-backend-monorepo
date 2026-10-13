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
 * @name Contacts
 * @extends UserBaseMiddleware
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Middleware to handle User profile contacts.
 */
export class Contacts extends UserBaseMiddleware {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Contacts
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {Contacts} A new Contacts instance.
	 *
	 * @description
	 * Initializes the Contacts middleware using its base class.
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
	 * @memberof Contacts
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
					'CREATE_CONTACT',
					this.#createContacts.bind(this)
				)
			);
			registerResolutions.push(
				apiRegistry.register(
					'READ_CONTACT',
					this.#readContacts.bind(this)
				)
			);
			registerResolutions.push(
				apiRegistry.register(
					'UPDATE_CONTACT',
					this.#updateContacts.bind(this)
				)
			);
			registerResolutions.push(
				apiRegistry.register(
					'DELETE_CONTACT',
					this.#deleteContacts.bind(this)
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
	 * @memberof Contacts
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
					'DELETE_CONTACT',
					this.#deleteContacts.bind(this)
				)
			);
			unregisterResolutions.push(
				apiRegistry.unregister(
					'UPDATE_CONTACT',
					this.#updateContacts.bind(this)
				)
			);
			unregisterResolutions.push(
				apiRegistry.unregister(
					'READ_CONTACT',
					this.#readContacts.bind(this)
				)
			);
			unregisterResolutions.push(
				apiRegistry.unregister(
					'CREATE_CONTACT',
					this.#createContacts.bind(this)
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
	 * @memberof Contacts
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #createContacts
	 *
	 * @param {object} payload - API payload for `CREATE_CONTACT`.
	 * @param {object} payload.user - Logged in user.
	 * @param {object} payload.data - Deserialized contact data.
	 *
	 * @returns {Promise<object>} Response payload containing the created contact.
	 *
	 * @description
	 * Creates a contact record for the logged in user.
	 */
	async #createContacts({ user, data }) {
		// Create the contact through the domain entity helper and return its result.
		return this._createUserEntity({
			model: { type: 'relational', name: 'user-contact' },
			user,
			payload: data,
			relationships: '[user, contactType]'
		});
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Contacts
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #readContacts
	 *
	 * @param {object} payload - API payload for `READ_CONTACT`.
	 * @param {object} payload.user - Logged in user.
	 * @param {string} payload.contactId - Optional contact identifier.
	 *
	 * @returns {Promise<object>} Response payload containing one or more contacts.
	 *
	 * @description
	 * Reads contact data associated with the logged in user.
	 */
	async #readContacts({ user, contactId }) {
		// Read the contact through the domain entity helper and return its result.
		return this._readUserEntity({
			model: { type: 'relational', name: 'user-contact' },
			user,
			entityId: contactId,
			relationships: '[user, contactType]'
		});
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Contacts
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #updateContacts
	 *
	 * @param {object} payload - API payload for `UPDATE_CONTACT`.
	 * @param {object} payload.user - Logged in user.
	 * @param {object} payload.data - Deserialized contact data.
	 *
	 * @returns {Promise<object>} Response payload containing the updated contact.
	 *
	 * @description
	 * Updates a contact record for the logged in user.
	 */
	async #updateContacts({ user, data }) {
		// Update the contact through the domain entity helper.
		const returnValue = await this._updateUserEntity({
			model: { type: 'relational', name: 'user-contact' },
			user,
			payload: data,
			relationships: '[user, contactType]'
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
	 * @memberof Contacts
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #deleteContacts
	 *
	 * @param {object} payload - API payload for `DELETE_CONTACT`.
	 * @param {object} payload.user - Logged in user.
	 * @param {string} payload.contactId - Contact identifier to delete.
	 *
	 * @returns {Promise<object>} Response payload containing the delete status.
	 *
	 * @description
	 * Deletes a contact record for the logged in user.
	 */
	async #deleteContacts({ user, contactId }) {
		// Delete the contact through the domain entity helper.
		const returnValue = await this._deleteUserEntity({
			model: { type: 'relational', name: 'user-contact' },
			user,
			entityId: contactId,
			eventName: 'USER::CONTACT_DELETED'
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
 * @name ContactsMiddlewareFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The User Domain Profile Contacts Middleware Class Factory.
 */
export default class ContactsMiddlewareFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof ContactsMiddlewareFactory
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @returns {ContactsMiddlewareFactory} A new ContactsMiddlewareFactory instance.
	 *
	 * @description
	 * Initializes the ContactsMiddlewareFactory factory using its base class.
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
	 * @memberof ContactsMiddlewareFactory
	 * @async
	 * @static
	 * @public
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<Contacts>} Resolves to the loaded Contacts middleware instance.
	 *
	 * @description
	 * Creates and loads the middleware instance on first use, then reuses it.
	 * Serializes access to the cached instance with the factory mutex.
	 */
	static async createInstances(domainInterface) {
		// Create or reuse the loaded instance under the factory lock.
		return await ContactsMiddlewareFactory.#mutex.runExclusive(async () => {
			if (!ContactsMiddlewareFactory.#contactsInstance) {
				const contactsInstance = new Contacts(
					ContactsMiddlewareFactory['$disk_unc'],
					domainInterface
				);

				await contactsInstance.load();
				ContactsMiddlewareFactory.#contactsInstance = contactsInstance;
			}

			return ContactsMiddlewareFactory.#contactsInstance;
		});
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof ContactsMiddlewareFactory
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
		await ContactsMiddlewareFactory.#mutex.runExclusive(async () => {
			await ContactsMiddlewareFactory.#contactsInstance?.unload();
			ContactsMiddlewareFactory.#contactsInstance = undefined;
			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof ContactsMiddlewareFactory
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
	 * Returns the registered middleware name: `Contacts`.
	 */
	static get MiddlewareName() {
		return 'Contacts';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #contactsInstance = undefined;
	// #endregion
}
