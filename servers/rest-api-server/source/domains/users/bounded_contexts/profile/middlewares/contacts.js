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
 * @name Contacts
 * @extends MedicoBaseMiddleware
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Middleware to handle Medico profile contacts.
 */
export class Contacts extends UserBaseMiddleware {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Contacts
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
					'CREATE_CONTACT',
					this.#createContacts?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'READ_CONTACT',
					this.#readContacts?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'UPDATE_CONTACT',
					this.#updateContacts?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'DELETE_CONTACT',
					this.#deleteContacts?.bind?.(this)
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Contacts
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
					'DELETE_CONTACT',
					this.#deleteContacts?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'UPDATE_CONTACT',
					this.#updateContacts?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'READ_CONTACT',
					this.#readContacts?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'CREATE_CONTACT',
					this.#createContacts?.bind?.(this)
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
	 * @param {object} payload.data - JSON:API contact payload.
	 *
	 * @returns {Promise<object>} Response payload containing the created contact.
	 *
	 * @description Creates a contact record for the logged in user.
	 */
	async #createContacts({ user, data }) {
		return this?._createUserEntity?.({
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
	 * @description Reads contact data associated with the logged in user.
	 */
	async #readContacts({ user, contactId }) {
		return this?._readUserEntity?.({
			model: { type: 'relational', name: 'user-contact' },
			user,
			entityId: contactId,
			relationships: '[user, contactType]',
			serializeType: 'user_contact'
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
	 * @param {object} payload.data - JSON:API contact payload.
	 *
	 * @returns {Promise<object>} Response payload containing the updated contact.
	 *
	 * @description Updates a contact record for the logged in user.
	 */
	async #updateContacts({ user, data }) {
		const returnValue = await this?._updateUserEntity?.({
			model: { type: 'relational', name: 'user-contact' },
			user,
			payload: data,
			relationships: '[user, contactType]'
		});

		return {
			status: returnValue?.status,
			body: returnValue?.body
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
	 * @description Deletes a contact record for the logged in user.
	 */
	async #deleteContacts({ user, contactId }) {
		const returnValue = await this?._deleteUserEntity?.({
			model: { type: 'relational', name: 'user-contact' },
			user,
			entityId: contactId,
			eventName: 'USER::CONTACT_DELETED'
		});

		return { status: returnValue?.status };
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
 * @classdesc The Medico Domain Profile Contacts Middleware Class Factory.
 */
export default class ContactsMiddlewareFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof ContactsMiddlewareFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Contacts} - The Contacts middleware instance.
	 */
	static async createInstances(domainInterface) {
		if (!ContactsMiddlewareFactory.#contactsInstance) {
			const contactsInstance = new Contacts(
				ContactsMiddlewareFactory['$disk_unc'],
				domainInterface
			);

			await contactsInstance?.load?.();
			ContactsMiddlewareFactory.#contactsInstance = contactsInstance;
		}

		return ContactsMiddlewareFactory.#contactsInstance;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof ContactsMiddlewareFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the Contacts instance
	 */
	static async destroyInstances() {
		await ContactsMiddlewareFactory.#contactsInstance?.unload?.();
		ContactsMiddlewareFactory.#contactsInstance = undefined;
		return;
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof ContactsMiddlewareFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name MiddlewareName
	 *
	 * @returns {string} - Name of this middleware.
	 *
	 * @description
	 * Returns the name of this middleware - Contacts
	 */
	static get MiddlewareName() {
		return 'Contacts';
	}
	// #endregion

	// #region Private Static Members
	static #contactsInstance = undefined;
	// #endregion
}
