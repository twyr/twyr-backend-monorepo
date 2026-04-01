'use strict';

const BaseModel = require('./../../../../../base_classes/objection-model.cjs');

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Models/Relational
 *
 * @class
 * @name SystemAdminDomain_SystemAdminContact
 * @extends BaseModel
 *
 * @classdesc Objection model for the user contacts table.
 */
class SystemAdminDomain_SystemAdminContact extends BaseModel {
	/**
	 * Gets the backing table name.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_SystemAdminContact
	 * @static
	 * @readonly
	 * @member {string}
	 * @name tableName
	 * @returns {string} The database table name.
	 */
	static get tableName() {
		return 'system_admin_contacts';
	}

	/**
	 * Declares relational mappings for the model.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_SystemAdminContact
	 * @static
	 * @function
	 * @name relationMappings
	 *
	 * @returns {object} Objection.js relation mappings.
	 */
	static relationMappings() {
		const ContactTypeMaster = require('./contact-type-master.cjs').Model;
		const User = require('./system-admin.cjs').Model;

		return {
			user: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'system_admin_contacts.system_admin_id',
					to: 'system_admins.id'
				}
			},
			contactType: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: ContactTypeMaster,
				join: {
					from: 'system_admin_contacts.contact_type_id',
					to: 'contact_type_master.id'
				}
			}
		};
	}
}

exports.Model = SystemAdminDomain_SystemAdminContact;
