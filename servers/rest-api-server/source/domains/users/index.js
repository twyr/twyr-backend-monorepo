/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Domain
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { BaseDomain } from 'baseclass:domain';

/**
 * @category REST API Server/Domains/Users
 * @subcategory Domain
 *
 * @class
 * @name Users
 * @extends BaseDomain
 *
 * @param {string} [location] - The artifact directory on disk.
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts.
 *
 * @classdesc Users domain root for serializer registration and bounded-context loading.
 */
export class Users extends BaseDomain {
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Domain
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}

	/**
	 * Registers serializer types used by the users domain.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Domain
	 *
	 * @param {object} serializer - The serializer registry to configure.
	 * @returns {void} Nothing.
	 */
	_registerSerializerTypes(serializer) {
		super._registerSerializerTypes?.(serializer);

		serializer?.register?.('contact_type_master', {
			blacklist: ['created_at', 'updated_at'],
			relationships: {
				userContacts: { type: 'user_contact' }
			}
		});

		serializer?.register?.('locale_master', {
			id: 'code',
			blacklist: ['created_at', 'updated_at'],
			relationships: {
				userLocales: { type: 'user_locale' },
				userNamesByLocale: { type: 'user_name_by_locale' }
			}
		});

		serializer?.register?.('user', {
			blacklist: ['created_at', 'updated_at', 'is_deleted'],
			relationships: {
				contacts: { type: 'user_contact' },
				locales: { type: 'user_locale' },
				names: { type: 'user_name_by_locale' }
			}
		});

		serializer?.register?.('user_contact', {
			blacklist: ['created_at', 'updated_at'],
			relationships: {
				user: { type: 'user' },
				contactType: { type: 'contact_type_master' }
			}
		});

		serializer?.register?.('user_locale', {
			blacklist: ['created_at', 'updated_at'],
			relationships: {
				user: { type: 'user' },
				locale: { type: 'locale_master' }
			}
		});

		serializer?.register?.('user_name_by_locale', {
			blacklist: ['created_at', 'updated_at'],
			relationships: {
				user: { type: 'user' },
				locale: { type: 'locale_master' }
			}
		});
	}
}

/**
 * @category REST API Server/Domains/Users
 * @subcategory Domain
 *
 * @class
 * @name UsersDomainFactory
 * @extends EVASBaseFactory
 *
 * @classdesc Factory for the users domain.
 */
export default class UsersDomainFactory extends EVASBaseFactory {
	static #usersDomainInstance = undefined;

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Domain
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}

	/**
	 * Creates or reuses the singleton users domain instance.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Domain
	 *
	 * @memberof UsersDomainFactory
	 * @static
	 * @function
	 * @name createInstances
	 *
	 * @param {object} domainInterface - Domain functionality exposed to sub-artifacts.
	 * @returns {Promise<Users>} The singleton domain instance.
	 */
	static async createInstances(domainInterface) {
		if (!UsersDomainFactory.#usersDomainInstance) {
			const usersDomainInstance = new Users(
				UsersDomainFactory['$disk_unc'],
				domainInterface
			);

			await usersDomainInstance?.load?.();
			UsersDomainFactory.#usersDomainInstance = usersDomainInstance;
		}

		return UsersDomainFactory.#usersDomainInstance;
	}

	/**
	 * Destroys the singleton users domain instance.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Domain
	 *
	 * @memberof UsersDomainFactory
	 * @static
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves after the instance is unloaded.
	 */
	static async destroyInstances() {
		await UsersDomainFactory.#usersDomainInstance?.unload?.();
		UsersDomainFactory.#usersDomainInstance = undefined;
	}

	/**
	 * Gets the exported domain name.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Domain
	 *
	 * @memberof UsersDomainFactory
	 * @static
	 * @readonly
	 * @member {string}
	 * @name DomainName
	 * @returns {string} The domain class name.
	 */
	static get DomainName() {
		return 'Users';
	}
}
