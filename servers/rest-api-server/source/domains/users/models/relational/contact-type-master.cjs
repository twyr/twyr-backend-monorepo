'use strict';

const BaseModel = require('./../../../../../base_classes/objection-model.cjs');

/**
 * @category REST API Server/Domains/Users
 * @subcategory Models/Relational
 *
 * @class
 * @name UsersDomain_ContactTypeMaster
 * @extends BaseModel
 *
 * @classdesc Objection model for the contact type master table.
 */
class UsersDomain_ContactTypeMaster extends BaseModel {
	/**
	 * Gets the backing table name.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Models/Relational
	 *
	 * @memberof UsersDomain_ContactTypeMaster
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
	 * @category REST API Server/Domains/Users
	 * @subcategory Models/Relational
	 *
	 * @memberof UsersDomain_ContactTypeMaster
	 * @static
	 * @function
	 * @name relationMappings
	 *
	 * @returns {object} Objection.js relation mappings.
	 */
	static relationMappings() {
		const UserContact = require('./user-contact.cjs').Model;

		return {
			userContacts: {
				relation: BaseModel.HasManyRelation,
				modelClass: UserContact,
				join: {
					from: 'contact_type_master.id',
					to: 'user_contacts.contact_type_id'
				}
			}
		};
	}
}

exports.Model = UsersDomain_ContactTypeMaster;
