'use strict';

const BaseModel = require('./../../../../../base_classes/objection-model.cjs');

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Models/Relational
 *
 * @class
 * @name SystemAdminDomain_SystemAdminLocale
 * @extends BaseModel
 *
 * @classdesc Objection model for the user locales table.
 */
class SystemAdminDomain_SystemAdminLocale extends BaseModel {
	/**
	 * Gets the backing table name.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_SystemAdminLocale
	 * @static
	 * @readonly
	 * @member {string}
	 * @name tableName
	 * @returns {string} The database table name.
	 */
	static get tableName() {
		return 'system_admin_locales';
	}

	/**
	 * Declares relational mappings for the model.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Models/Relational
	 *
	 * @memberof SystemAdminDomain_SystemAdminLocale
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
					from: 'system_admin_locales.user_id',
					to: 'system_admins.id'
				}
			},
			locale: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: LocaleMaster,
				join: {
					from: 'system_admin_locales.locale_id',
					to: 'locale_master.code'
				}
			}
		};
	}
}

exports.Model = SystemAdminDomain_SystemAdminLocale;
