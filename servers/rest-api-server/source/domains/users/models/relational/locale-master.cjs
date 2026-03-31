'use strict';

const BaseModel = require('./../../../../../base_classes/objection-model.cjs');

/**
 * @category REST API Server/Domains/Users
 * @subcategory Models/Relational
 *
 * @class
 * @name UsersDomain_LocaleMaster
 * @extends BaseModel
 *
 * @classdesc Objection model for the locale master table.
 */
class UsersDomain_LocaleMaster extends BaseModel {
	/**
	 * Gets the backing table name.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Models/Relational
	 *
	 * @memberof UsersDomain_LocaleMaster
	 * @static
	 * @readonly
	 * @member {string}
	 * @name tableName
	 * @returns {string} The database table name.
	 */
	static get tableName() {
		return 'locale_master';
	}

	/**
	 * Gets the primary key column for the model.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Models/Relational
	 *
	 * @memberof UsersDomain_LocaleMaster
	 * @static
	 * @readonly
	 * @member {string}
	 * @name idColumn
	 * @returns {string} The primary key column name.
	 */
	static get idColumn() {
		return 'code';
	}

	/**
	 * Declares relational mappings for the model.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Models/Relational
	 *
	 * @memberof UsersDomain_LocaleMaster
	 * @static
	 * @function
	 * @name relationMappings
	 *
	 * @returns {object} Objection.js relation mappings.
	 */
	static relationMappings() {
		const UserLocale = require('./user-locale.cjs').Model;

		return {
			userLocales: {
				relation: BaseModel.HasManyRelation,
				modelClass: UserLocale,
				join: {
					from: 'locale_master.code',
					to: 'user_locales.locale_id'
				}
			}
		};
	}
}

exports.Model = UsersDomain_LocaleMaster;
