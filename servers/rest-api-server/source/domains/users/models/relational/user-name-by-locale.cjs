'use strict';

const BaseModel = require('./../../../../../base_classes/objection-model.cjs');

/**
 * @category REST API Server/Domains/Users
 * @subcategory Models/Relational
 *
 * @class
 * @name UsersDomain_UserNameByLocale
 * @extends BaseModel
 *
 * @classdesc Objection model for the user names by locale table.
 */
class UsersDomain_UserNameByLocale extends BaseModel {
	/**
	 * Gets the backing table name.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Models/Relational
	 *
	 * @memberof UsersDomain_UserNameByLocale
	 * @static
	 * @readonly
	 * @member {string}
	 * @name tableName
	 * @returns {string} The database table name.
	 */
	static get tableName() {
		return 'user_names_by_locale';
	}

	/**
	 * Declares relational mappings for the model.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Models/Relational
	 *
	 * @memberof UsersDomain_UserNameByLocale
	 * @static
	 * @function
	 * @name relationMappings
	 *
	 * @returns {object} Objection.js relation mappings.
	 */
	static relationMappings() {
		const LocaleMaster = require('./locale-master.cjs').Model;
		const User = require('./user.cjs').Model;

		return {
			user: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'user_names_by_locale.user_id',
					to: 'users.id'
				}
			},
			locale: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: LocaleMaster,
				join: {
					from: 'user_names_by_locale.locale_id',
					to: 'locale_master.code'
				}
			}
		};
	}
}

exports.Model = UsersDomain_UserNameByLocale;
