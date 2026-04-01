'use strict';

const BaseModel = require('./../../../../../base_classes/objection-model.cjs');

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Models/Relational
 *
 * @class
 * @name SystemAdminDomain_SystemAdmin
 * @extends BaseModel
 *
 * @classdesc Objection model for the system_admin table.
 */
class SystemAdminDomain_SystemAdmin extends BaseModel {
	/**
	 * Gets the backing table name.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_SystemAdmin
	 * @static
	 * @readonly
	 * @member {string}
	 * @name tableName
	 * @returns {string} The database table name.
	 */
	static get tableName() {
		return 'system_admins';
	}

	/**
	 * Declares relational mappings for the model.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_SystemAdmin
	 * @static
	 * @function
	 * @name relationMappings
	 *
	 * @returns {object} Objection.js relation mappings.
	 */
	static relationMappings() {
		const UserContact = require('./system-admin-contact.cjs').Model;
		const UserLocale = require('./system-admin-locale.cjs').Model;
		const UserNameByLocale =
			require('./system-admin-name-by-locale.cjs').Model;

		return {
			contacts: {
				relation: BaseModel.HasManyRelation,
				modelClass: UserContact,
				join: {
					from: 'system_admins.id',
					to: 'system_admin_contacts.system_admin_id'
				}
			},
			locales: {
				relation: BaseModel.HasManyRelation,
				modelClass: UserLocale,
				join: {
					from: 'system_admins.id',
					to: 'system_admin_locales.system_admin_id'
				}
			},
			names: {
				relation: BaseModel.HasManyRelation,
				modelClass: UserNameByLocale,
				join: {
					from: 'system_admins.id',
					to: 'system_admin_names_by_locale.system_admin_id'
				}
			}
		};
	}
}

exports.Model = SystemAdminDomain_SystemAdmin;
