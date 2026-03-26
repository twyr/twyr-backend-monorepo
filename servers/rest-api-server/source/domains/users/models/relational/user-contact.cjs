'use strict';

const BaseModel = require('./../../../../../base_classes/objection-model.cjs');

/**
 * @category REST API Server/Domains/Users
 * @subcategory Models/Relational
 *
 * @class
 * @name UsersDomain_UserContact
 * @extends BaseModel
 *
 * @classdesc Objection model for the user contacts table.
 */
class UsersDomain_UserContact extends BaseModel {
	/**
	 * Gets the backing table name.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Models/Relational
	 *
	 * @memberof UsersDomain_UserContact
	 * @static
	 * @readonly
	 * @member {string}
	 * @name tableName
	 * @returns {string} The database table name.
	 */
	static get tableName() {
		return 'user_contacts';
	}

	/**
	 * Declares relational mappings for the model.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Models/Relational
	 *
	 * @memberof UsersDomain_UserContact
	 * @static
	 * @function
	 * @name relationMappings
	 *
	 * @returns {object} Objection.js relation mappings.
	 */
	static relationMappings() {
		const ContactTypeMaster = require('./contact-type-master.cjs').Model;
		const User = require('./user.cjs').Model;

		return {
			user: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'user_contacts.user_id',
					to: 'users.id'
				}
			},
			contactType: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: ContactTypeMaster,
				join: {
					from: 'user_contacts.contact_type_id',
					to: 'contact_type_master.id'
				}
			}
		};
	}
}

exports.Model = UsersDomain_UserContact;
