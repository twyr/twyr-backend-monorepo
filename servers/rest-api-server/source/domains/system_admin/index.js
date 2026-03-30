/**
 * Imports for this file
 *
 * @category REST API Server/Domains/System Admin
 * @subcategory Domain
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { BaseDomain } from 'baseclass:domain';

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Domain
 *
 * @class
 * @name SystemAdmin
 * @extends BaseDomain
 *
 * @param {string} [location] - The artifact directory on disk.
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts.
 *
 * @classdesc SystemAdmin domain root for serializer registration and bounded-context loading.
 */
export class SystemAdmin extends BaseDomain {
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Domain
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}

	/**
	 * Registers serializer types used by the system_admin domain.
	 *
	 * @category REST API Server/Domains/System Admin
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
				userContacts: { type: 'system_admin_contact' }
			}
		});

		serializer?.register?.('locale_master', {
			id: 'code',
			blacklist: ['created_at', 'updated_at'],
			relationships: {
				userLocales: { type: 'system_admin_locale' },
				userNamesByLocale: { type: 'system_admin_name_by_locale' }
			}
		});

		serializer?.register?.('system_admin', {
			blacklist: ['created_at', 'updated_at', 'is_deleted'],
			relationships: {
				contacts: { type: 'system_admin_contact' },
				locales: { type: 'system_admin_locale' },
				names: { type: 'system_admin_name_by_locale' }
			}
		});

		serializer?.register?.('system_admin_contact', {
			blacklist: ['created_at', 'updated_at'],
			relationships: {
				user: { type: 'system_admin' },
				contactType: { type: 'contact_type_master' }
			}
		});

		serializer?.register?.('system_admin_locale', {
			blacklist: ['created_at', 'updated_at'],
			relationships: {
				user: { type: 'system_admin' },
				locale: { type: 'locale_master' }
			}
		});

		serializer?.register?.('system_admin_name_by_locale', {
			blacklist: ['created_at', 'updated_at'],
			relationships: {
				user: { type: 'system_admin' },
				locale: { type: 'locale_master' }
			}
		});
	}
}

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Domain
 *
 * @class
 * @name SystemAdminDomainFactory
 * @extends EVASBaseFactory
 *
 * @classdesc Factory for the system_admin domain.
 */
export default class SystemAdminDomainFactory extends EVASBaseFactory {
	static #systemAdminDomainInstance = undefined;

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Domain
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}

	/**
	 * Creates or reuses the singleton system_admin domain instance.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Domain
	 *
	 * @memberof SystemAdminDomainFactory
	 * @static
	 * @function
	 * @name createInstances
	 *
	 * @param {object} domainInterface - Domain functionality exposed to sub-artifacts.
	 * @returns {Promise<SystemAdmin>} The singleton domain instance.
	 */
	static async createInstances(domainInterface) {
		if (!SystemAdminDomainFactory.#systemAdminDomainInstance) {
			const usersDomainInstance = new SystemAdmin(
				SystemAdminDomainFactory['$disk_unc'],
				domainInterface
			);

			await usersDomainInstance?.load?.();
			SystemAdminDomainFactory.#systemAdminDomainInstance =
				usersDomainInstance;
		}

		return SystemAdminDomainFactory.#systemAdminDomainInstance;
	}

	/**
	 * Destroys the singleton system_admin domain instance.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Domain
	 *
	 * @memberof SystemAdminDomainFactory
	 * @static
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves after the instance is unloaded.
	 */
	static async destroyInstances() {
		await SystemAdminDomainFactory.#systemAdminDomainInstance?.unload?.();
		SystemAdminDomainFactory.#systemAdminDomainInstance = undefined;
	}

	/**
	 * Gets the exported domain name.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Domain
	 *
	 * @memberof SystemAdminDomainFactory
	 * @static
	 * @readonly
	 * @member {string}
	 * @name DomainName
	 * @returns {string} The domain class name.
	 */
	static get DomainName() {
		return 'SystemAdmin';
	}
}
