'use strict';

const BaseModel = require('./../../../../../base_classes/objection-model.cjs');

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Models/Relational
 *
 * @class
 * @name SystemAdminDomain_LocaleMaster
 * @extends BaseModel
 *
 * @classdesc Objection model for the locale master table.
 */
class SystemAdminDomain_LocaleMaster extends BaseModel {
	/**
	 * Gets the backing table name.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_LocaleMaster
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
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_LocaleMaster
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
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_LocaleMaster
	 * @static
	 * @function
	 * @name relationMappings
	 *
	 * @returns {object} Objection.js relation mappings.
	 */
	static relationMappings() {
		const UserLocale = require('./system-admin-locale.cjs').Model;

		return {
			userLocales: {
				relation: BaseModel.HasManyRelation,
				modelClass: UserLocale,
				join: {
					from: 'locale_master.code',
					to: 'system_admin_locales.locale_id'
				}
			}
		};
	}
}

exports.Model = SystemAdminDomain_LocaleMaster;
