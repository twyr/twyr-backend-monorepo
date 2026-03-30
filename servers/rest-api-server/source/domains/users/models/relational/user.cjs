'use strict';

const BaseModel = require('./../../../../../base_classes/objection-model.cjs');

/**
 * @category REST API Server/Domains/Users
 * @subcategory Models/Relational
 *
 * @class
 * @name UsersDomain_User
 * @extends BaseModel
 *
 * @classdesc Objection model for the users table.
 */
class UsersDomain_User extends BaseModel {
	/**
	 * Gets the backing table name.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Models/Relational
	 *
	 * @memberof UsersDomain_User
	 * @static
	 * @readonly
	 * @member {string}
	 * @name tableName
	 * @returns {string} The database table name.
	 */
	static get tableName() {
		return 'users';
	}

	/**
	 * Declares relational mappings for the model.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Models/Relational
	 *
	 * @memberof UsersDomain_User
	 * @static
	 * @function
	 * @name relationMappings
	 *
	 * @returns {object} Objection.js relation mappings.
	 */
	static relationMappings() {
		const UserContact = require('./user-contact.cjs').Model;
		const UserLocale = require('./user-locale.cjs').Model;
		const UserNameByLocale = require('./user-name-by-locale.cjs').Model;

		return {
			contacts: {
				relation: BaseModel.HasManyRelation,
				modelClass: UserContact,
				join: {
					from: 'users.id',
					to: 'user_contacts.user_id'
				}
			},
			locales: {
				relation: BaseModel.HasManyRelation,
				modelClass: UserLocale,
				join: {
					from: 'users.id',
					to: 'user_locales.user_id'
				}
			},
			names: {
				relation: BaseModel.HasManyRelation,
				modelClass: UserNameByLocale,
				join: {
					from: 'users.id',
					to: 'user_names_by_locale.user_id'
				}
			}
		};
	}
}

exports.Model = UsersDomain_User;
