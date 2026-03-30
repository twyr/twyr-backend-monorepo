'use strict';

const BaseModel = require('./../../../../../base_classes/objection-model.cjs');

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Models/Relational
 *
 * @class
 * @name SystemAdminDomain_ContactTypeMaster
 * @extends BaseModel
 *
 * @classdesc Objection model for the contact type master table.
 */
class SystemAdminDomain_ContactTypeMaster extends BaseModel {
	/**
	 * Gets the backing table name.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_ContactTypeMaster
	 * @static
	 * @readonly
	 * @member {string}
	 * @name tableName
	 * @returns {string} The database table name.
	 */
	static get tableName() {
		return 'contact_type_master';
	}

	/**
	 * Declares relational mappings for the model.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_ContactTypeMaster
	 * @static
	 * @function
	 * @name relationMappings
	 *
	 * @returns {object} Objection.js relation mappings.
	 */
	static relationMappings() {
		const UserContact = require('./system-admin-contact.cjs').Model;

		return {
			userContacts: {
				relation: BaseModel.HasManyRelation,
				modelClass: UserContact,
				join: {
					from: 'contact_type_master.id',
					to: 'system_admin_contacts.contact_type_id'
				}
			}
		};
	}
}

exports.Model = SystemAdminDomain_ContactTypeMaster;
