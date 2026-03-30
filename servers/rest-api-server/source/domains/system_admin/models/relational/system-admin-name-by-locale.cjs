'use strict';

const BaseModel = require('./../../../../../base_classes/objection-model.cjs');

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Models/Relational
 *
 * @class
 * @name SystemAdminDomain_SystemAdminNameByLocale
 * @extends BaseModel
 *
 * @classdesc Objection model for the user names by locale table.
 */
class SystemAdminDomain_SystemAdminNameByLocale extends BaseModel {
	/**
	 * Gets the backing table name.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_SystemAdminNameByLocale
	 * @static
	 * @readonly
	 * @member {string}
	 * @name tableName
	 * @returns {string} The database table name.
	 */
	static get tableName() {
		return 'system_admin_names_by_locale';
	}

	/**
	 * Declares relational mappings for the model.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_SystemAdminNameByLocale
	 * @static
	 * @function
	 * @name relationMappings
	 *
	 * @returns {object} Objection.js relation mappings.
	 */
	static relationMappings() {
		const LocaleMaster = require('./locale-master.cjs').Model;
		const User = require('./system-admin.cjs').Model;

		return {
			user: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'system_admin_names_by_locale.user_id',
					to: 'system_admin.id'
				}
			},
			locale: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: LocaleMaster,
				join: {
					from: 'system_admin_names_by_locale.locale_code',
					to: 'locale_master.code'
				}
			}
		};
	}
}

exports.Model = SystemAdminDomain_SystemAdminNameByLocale;
