/**
 * Imports for this file
 *
 * @category REST API Server/Bounded Contexts
 * @subcategory Masterdata/Middlewares
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { createErrorForPropagation } from '@twyr/error-serializer';
import { BaseMiddleware } from 'baseclass:middleware';

/**
 * @category REST API Server/Bounded Contexts
 * @subcategory Masterdata/Middlewares
 *
 * @class
 * @name Masterdata
 * @extends BaseMiddleware
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Middleware to handle login / logout / register
 */
export class Masterdata extends BaseMiddleware {
	// #region Constructor
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof Masterdata
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _registerApi
	 *
	 * @returns {null} - The array of API to be registered
	 *
	 * @description
	 * Adds the API to the apiRegistry in the domainInterface
	 */
	async _registerApi() {
		const errors = [];

		try {
			const apiRegistry = this?.domainInterface?.apiRegistry;
			let registerResolutions = [];

			const baseApis = await super._registerApi?.();
			for (const baseApi of baseApis ?? []) {
				registerResolutions?.push?.(
					apiRegistry?.register?.(baseApi?.pattern, baseApi?.handler)
				);
			}

			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'CONTACT_TYPE',
					this.#getContactTypes?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'CONNECTION_STATUS',
					this.#getConnectionStatuses?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'FACILITY_STATUS',
					this.#getFacilityStatuses?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'GENDER',
					this.#getGenders?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'LOCALE',
					this.#getLocales?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'RELATIONSHIP_TYPE',
					this.#getRelationshipTypes?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'COUNTRY_CODES',
					this.#getCountryCodes?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'SYSTEM_MESSAGES',
					this.#getSystemMessages?.bind?.(this)
				)
			);
			registerResolutions =
				await Promise?.allSettled?.(registerResolutions);
			for (const registerResolution of registerResolutions) {
				if (registerResolution?.status === 'fulfilled') continue;
				errors?.push?.(registerResolution?.reason);
			}
		} catch (error) {
			errors?.push?.(error);
		}

		if (!errors?.length) return;

		const propagatedError = createErrorForPropagation?.(
			`${this?.name}::_registerApi error`,
			errors
		);

		if (propagatedError) throw propagatedError;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof Masterdata
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _unregisterApi
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * Removes the API from the apiRegistry in the domainInterface
	 */
	async _unregisterApi() {
		const errors = [];

		try {
			const apiRegistry = this?.domainInterface?.apiRegistry;
			let unregisterResolutions = [];

			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'SYSTEM_MESSAGES',
					this.#getSystemMessages?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'COUNTRY_CODES',
					this.#getCountryCodes?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'RELATIONSHIP_TYPE',
					this.#getRelationshipTypes?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'LOCALE',
					this.#getLocales?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'GENDER',
					this.#getGenders?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'FACILITY_STATUS',
					this.#getFacilityStatuses?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'CONNECTION_STATUS',
					this.#getConnectionStatuses?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'CONTACT_TYPE',
					this.#getContactTypes?.bind?.(this)
				)
			);

			unregisterResolutions = await Promise?.allSettled?.(
				unregisterResolutions
			);
			for (const unregisterResolution of unregisterResolutions) {
				if (unregisterResolution?.status === 'fulfilled') continue;
				errors?.push?.(unregisterResolution?.reason);
			}

			await super._unregisterApi?.();
		} catch (error) {
			errors?.push?.(error);
		}

		if (!errors?.length) return;

		const propagatedError = createErrorForPropagation?.(
			`${this?.name}::_unregisterApi error`,
			errors
		);

		if (propagatedError) throw propagatedError;
	}
	// #endregion

	// #region Handlers
	/**
	 * Retrieves contact-type master data from the domain model layer.
	 *
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof Masterdata
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getContactTypes
	 *
	 * @param {string} id - Optional contact type id.
	 * @param {string} localeId - Locale used to resolve translated records.
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 */
	async #getContactTypes(id, localeId) {
		const masterdata = await this.#getMasterdata?.(
			'contact_type_master',
			'id',
			'contact_type_by_locale',
			'contact_type_id',
			id,
			localeId
		);

		return {
			status: 200,
			body: masterdata
		};
	}

	/**
	 * Retrieves connection-status master data from the domain model layer.
	 *
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof Masterdata
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getConnectionStatuses
	 *
	 * @param {string} id - Optional connection status id.
	 * @param {string} localeId - Locale used to resolve translated records.
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 */
	async #getConnectionStatuses(id, localeId) {
		const masterdata = await this.#getMasterdata?.(
			'connection_status_master',
			'id',
			'connection_status_by_locale',
			'connection_status_id',
			id,
			localeId
		);

		return {
			status: 200,
			body: masterdata
		};
	}

	/**
	 * Retrieves facility-status master data from the domain model layer.
	 *
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof Masterdata
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getFacilityStatuses
	 *
	 * @param {string} id - Optional facility status id.
	 * @param {string} localeId - Locale used to resolve translated records.
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 */
	async #getFacilityStatuses(id, localeId) {
		const masterdata = await this.#getMasterdata?.(
			'facility_status_master',
			'id',
			'facility_status_by_locale',
			'facility_status_id',
			id,
			localeId
		);

		return {
			status: 200,
			body: masterdata
		};
	}

	/**
	 * Retrieves gender master data from the domain model layer.
	 *
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof Masterdata
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getGenders
	 *
	 * @param {string} id - Optional gender id.
	 * @param {string} localeId - Locale used to resolve translated records.
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 */
	async #getGenders(id, localeId) {
		const masterdata = await this.#getMasterdata?.(
			'gender_master',
			'id',
			'gender_by_locale',
			'gender_id',
			id,
			localeId
		);

		return {
			status: 200,
			body: masterdata
		};
	}

	/**
	 * Retrieves enabled locale master data from the domain model layer.
	 *
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof Masterdata
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getLocales
	 *
	 * @param {string} id - Optional locale code.
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 */
	async #getLocales(id /*localeId*/) {
		let masterdata = await this.#getMasterdata?.(
			'locale_master',
			'code',
			'locale_by_locale',
			'locale_code',
			id
		);

		masterdata = masterdata?.filter?.((locale) => {
			return locale?.is_enabled && locale?.code === locale.locale_id;
		});

		return {
			status: 200,
			body: masterdata
		};
	}

	/**
	 * Retrieves relationship-type master data from the domain model layer.
	 *
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof Masterdata
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getRelationshipTypes
	 *
	 * @param {string} id - Optional relationship type id.
	 * @param {string} localeId - Locale used to resolve translated records.
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 */
	async #getRelationshipTypes(id, localeId) {
		const masterdata = await this.#getMasterdata?.(
			'relationship_type_master',
			'id',
			'relationship_type_by_locale',
			'relationship_type_id',
			id,
			localeId
		);

		return {
			status: 200,
			body: masterdata
		};
	}

	/**
	 * Retrieves enabled country-code master data from the domain model layer.
	 *
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof Masterdata
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getCountryCodes
	 *
	 * @param {string} iso_code - Optional ISO country code.
	 * @param {string} localeId - Locale used to resolve translated records.
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 */
	async #getCountryCodes(iso_code, localeId) {
		let masterdata = await this.#getMasterdata?.(
			'country_code_master',
			'iso_code',
			'country_code_by_locale',
			'iso_code',
			iso_code,
			localeId
		);

		masterdata = masterdata?.filter?.((countryCode) => {
			return countryCode?.is_enabled;
		});

		return {
			status: 200,
			body: masterdata
		};
	}

	/**
	 * Retrieves system-message master data from the domain model layer.
	 *
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof Masterdata
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getSystemMessages
	 *
	 * @param {string} messageCode - Optional system message id.
	 * @param {string} localeId - Locale used to resolve translated records.
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 */
	async #getSystemMessages(messageCode, localeId) {
		const masterdata = await this.#getMasterdata?.(
			'system_message_master',
			'id',
			'system_message_by_locale',
			'message_id',
			messageCode,
			localeId
		);

		return {
			status: 200,
			body: masterdata
		};
	}

	// #endregion

	// #region PrivateMethods
	/**
	 * Executes the common masterdata lookup query pattern for the requested tables.
	 *
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof Masterdata
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getMasterdata
	 *
	 * @param {string} masterTableName - Primary master table to query.
	 * @param {string} masterTableField - Primary-key field in the master table.
	 * @param {string} localeTableName - Optional localized table joined for translations.
	 * @param {string} localeTableField - Join field used for localized lookups.
	 * @param {string} id - Optional record identifier to filter by.
	 * @param {string} localeId - Locale used to resolve translated records.
	 * @returns {Promise<object[]>} Matching masterdata records.
	 */
	async #getMasterdata(
		masterTableName,
		masterTableField,
		localeTableName,
		localeTableField,
		id,
		localeId
	) {
		const dbRepository =
			await this.domainInterface?.iocContainer?.resolve?.('SQLDatabase');

		// eslint-disable-next-line no-useless-assignment
		let masterdata = undefined;

		if (localeTableName) {
			masterdata = await this?._executeWithBackOff?.(async () => {
				if (id && localeId) {
					return dbRepository?.raw?.(
						`SELECT * FROM ${masterTableName} A INNER JOIN ${localeTableName} B ON (A.${masterTableField} = B.${localeTableField}) WHERE A.${masterTableField} = ? AND B.locale_id = ?`,
						[id, localeId]
					);
				}

				if (!id && localeId) {
					return dbRepository?.raw?.(
						`SELECT * FROM ${masterTableName} A INNER JOIN ${localeTableName} B ON (A.${masterTableField} = B.${localeTableField}) WHERE B.locale_id = ?`,
						[localeId]
					);
				}

				if (id && !localeId) {
					return dbRepository?.raw?.(
						`SELECT * FROM ${masterTableName} A INNER JOIN ${localeTableName} B ON (A.${masterTableField} = B.${localeTableField}) WHERE A.${masterTableField} = ?`,
						[id]
					);
				}

				if (!id && !localeId) {
					return dbRepository?.raw?.(
						`SELECT * FROM ${masterTableName} A INNER JOIN ${localeTableName} B ON (A.${masterTableField} = B.${localeTableField})`
					);
				}
			});
		} else {
			masterdata = await this?._executeWithBackOff?.(async () => {
				if (id && localeId) {
					return dbRepository?.raw?.(
						`SELECT * FROM ${masterTableName} WHERE ${masterTableField} = ? AND locale_id = ?`,
						[id, localeId]
					);
				}

				if (!id && localeId) {
					return dbRepository?.raw?.(
						`SELECT * FROM ${masterTableName} WHERE locale_id = ?`,
						[localeId]
					);
				}

				if (id && !localeId) {
					return dbRepository?.raw?.(
						`SELECT * FROM ${masterTableName} WHERE ${masterTableField} = ?`,
						[id]
					);
				}

				if (!id && !localeId) {
					return dbRepository?.raw?.(
						`SELECT * FROM ${masterTableName}`
					);
				}
			});
		}

		masterdata = masterdata?.rows;
		return masterdata;
	}
	//#endregion
}

/**
 * @category REST API Server/Bounded Contexts
 * @subcategory Masterdata/Middlewares
 *
 * @class
 * @name MasterdataMiddlewareFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Masterdata Manager Module Masterdata Middleware Class Factory.
 */
export default class MasterdataMiddlewareFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof MasterdataMiddlewareFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Masterdata} - The Masterdata middleware instance.
	 */
	static async createInstances(domainInterface) {
		if (!MasterdataMiddlewareFactory.#masterdataInstance) {
			const masterdataInstance = new Masterdata(
				MasterdataMiddlewareFactory['$disk_unc'],
				domainInterface
			);

			await masterdataInstance?.load?.();
			MasterdataMiddlewareFactory.#masterdataInstance =
				masterdataInstance;
		}

		return MasterdataMiddlewareFactory.#masterdataInstance;
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof MasterdataMiddlewareFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the Masterdata instance
	 */
	static async destroyInstances() {
		await MasterdataMiddlewareFactory.#masterdataInstance?.unload?.();
		MasterdataMiddlewareFactory.#masterdataInstance = undefined;

		return;
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof MasterdataMiddlewareFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name MiddlewareName
	 *
	 * @returns {string} - Name of this middleware.
	 *
	 * @description
	 * Returns the name of this middleware - Masterdata
	 */
	static get MiddlewareName() {
		return 'Masterdata';
	}
	// #endregion

	// #region Private Static Members
	static #masterdataInstance = undefined;
	// #endregion
}
