/**
 * Imports for this file
 *
 * @category REST API Server/Bounded Contexts
 * @subcategory Masterdata/Middlewares
 *
 * @ignore
 */
import { Mutex } from 'async-mutex';

import { createErrorForPropagation } from '@twyr/error-serializer';
import { EVASBaseFactory } from '@twyr/framework-classes';

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
	 * @memberof Masterdata
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {Masterdata} A new Masterdata instance.
	 *
	 * @description
	 * Initializes the Masterdata middleware using its base class.
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
	 * @protected
	 * @override
	 * @function
	 * @name _registerApi
	 *
	 * @returns {Promise<void>} Resolves after registration changes complete.
	 *
	 * @description
	 * Adds the API to the apiRegistry in the domainInterface
	 */
	async _registerApi() {
		// Step 1: Register inherited and local middleware APIs, collecting any failures.
		const errors = [];

		try {
			const apiRegistry = this.domainInterface.apiRegistry;
			let registerResolutions = [];

			const baseApis = await super._registerApi();
			for (const baseApi of baseApis ?? []) {
				registerResolutions.push(
					apiRegistry.register(baseApi.pattern, baseApi.handler)
				);
			}

			registerResolutions.push(
				apiRegistry.register(
					'CONTACT_TYPE',
					this.#getContactTypes.bind(this)
				)
			);
			registerResolutions.push(
				apiRegistry.register('GENDER', this.#getGenders.bind(this))
			);
			registerResolutions.push(
				apiRegistry.register('LOCALE', this.#getLocales.bind(this))
			);
			registerResolutions.push(
				apiRegistry.register(
					'COUNTRY_CODES',
					this.#getCountryCodes.bind(this)
				)
			);
			registerResolutions.push(
				apiRegistry.register(
					'SYSTEM_MESSAGES',
					this.#getSystemMessages.bind(this)
				)
			);
			// Step 2: Wait for every registration operation to settle.
			registerResolutions = await Promise.allSettled(registerResolutions);

			// Step 3: Collect the failures from rejected operations.
			for (const registerResolution of registerResolutions) {
				if (registerResolution.status === 'fulfilled') continue;
				errors.push(registerResolution.reason);
			}
		} catch (error) {
			errors.push(error);
		}

		// Step 4: Propagate collected failures after all operations have been attempted.
		if (!errors.length) return;

		const propagatedError = createErrorForPropagation(
			`${this.name}::_registerApi error`,
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
	 * @protected
	 * @override
	 * @function
	 * @name _unregisterApi
	 *
	 * @returns {Promise<void>} Resolves after registration changes complete.
	 *
	 * @description
	 * Removes the API from the apiRegistry in the domainInterface
	 */
	async _unregisterApi() {
		// Step 1: Remove the local middleware APIs, collecting any failures.
		const errors = [];

		try {
			const apiRegistry = this.domainInterface.apiRegistry;
			let unregisterResolutions = [];

			unregisterResolutions.push(
				apiRegistry.unregister(
					'SYSTEM_MESSAGES',
					this.#getSystemMessages.bind(this)
				)
			);
			unregisterResolutions.push(
				apiRegistry.unregister(
					'COUNTRY_CODES',
					this.#getCountryCodes.bind(this)
				)
			);
			unregisterResolutions.push(
				apiRegistry.unregister('LOCALE', this.#getLocales.bind(this))
			);
			unregisterResolutions.push(
				apiRegistry.unregister('GENDER', this.#getGenders.bind(this))
			);
			unregisterResolutions.push(
				apiRegistry.unregister(
					'CONTACT_TYPE',
					this.#getContactTypes.bind(this)
				)
			);

			// Step 2: Wait for every removal operation to settle.
			unregisterResolutions = await Promise.allSettled(
				unregisterResolutions
			);

			// Step 3: Collect the failures from rejected operations.
			for (const unregisterResolution of unregisterResolutions) {
				if (unregisterResolution.status === 'fulfilled') continue;
				errors.push(unregisterResolution.reason);
			}

			await super._unregisterApi();
		} catch (error) {
			errors.push(error);
		}

		// Step 4: Propagate collected failures after all operations have been attempted.
		if (!errors.length) return;

		const propagatedError = createErrorForPropagation(
			`${this.name}::_unregisterApi error`,
			errors
		);

		if (propagatedError) throw propagatedError;
	}
	// #endregion

	// #region Handlers
	/**
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
	 *
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 *
	 * @description
	 * Retrieves contact-type master data from the domain model layer.
	 */
	async #getContactTypes(id, localeId) {
		// Fetch localized contact types.
		const masterdata = await this.#getMasterdata(
			'contact_type_master',
			'id',
			'contact_type_by_locale',
			'contact_type_id',
			id,
			localeId
		);

		// Return the fetched master data with a successful status.
		return {
			status: 200,
			body: masterdata
		};
	}

	/**
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
	 *
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 *
	 * @description
	 * Retrieves gender master data from the domain model layer.
	 */
	async #getGenders(id, localeId) {
		// Fetch localized genders.
		const masterdata = await this.#getMasterdata(
			'gender_master',
			'id',
			'gender_by_locale',
			'gender_id',
			id,
			localeId
		);

		// Return the fetched master data with a successful status.
		return {
			status: 200,
			body: masterdata
		};
	}

	/**
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
	 *
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 *
	 * @description
	 * Retrieves enabled locale master data from the domain model layer.
	 */
	async #getLocales(id /*localeId*/) {
		// Step 1: Fetch locale records and their localized labels.
		let masterdata = await this.#getMasterdata(
			'locale_master',
			'code',
			'locale_by_locale',
			'locale_code',
			id
		);

		// Step 2: Keep enabled locales whose labels are in their own language.
		masterdata = masterdata.filter((locale) => {
			return locale.is_enabled && locale.code === locale.locale_id;
		});

		return {
			status: 200,
			body: masterdata
		};
	}

	/**
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
	 *
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 *
	 * @description
	 * Retrieves enabled country-code master data from the domain model layer.
	 */
	async #getCountryCodes(iso_code, localeId) {
		// Step 1: Fetch country codes for the requested locale.
		let masterdata = await this.#getMasterdata(
			'country_code_master',
			'iso_code',
			'country_code_by_locale',
			'iso_code',
			iso_code,
			localeId
		);

		// Step 2: Return only enabled country codes.
		masterdata = masterdata.filter((countryCode) => {
			return countryCode.is_enabled;
		});

		return {
			status: 200,
			body: masterdata
		};
	}

	/**
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
	 *
	 * @returns {Promise<object>} HTTP response data containing the resolved records.
	 *
	 * @description
	 * Retrieves system-message master data from the domain model layer.
	 */
	async #getSystemMessages(messageCode, localeId) {
		// Fetch localized system messages.
		const masterdata = await this.#getMasterdata(
			'system_message_master',
			'id',
			'system_message_by_locale',
			'message_id',
			messageCode,
			localeId
		);

		// Return the fetched master data with a successful status.
		return {
			status: 200,
			body: masterdata
		};
	}

	// #endregion

	// #region PrivateMethods
	/**
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
	 *
	 * @returns {Promise<object[]>} Matching masterdata records.
	 *
	 * @description
	 * Executes the common masterdata lookup query pattern for the requested tables.
	 */
	async #getMasterdata(
		masterTableName,
		masterTableField,
		localeTableName,
		localeTableField,
		id,
		localeId
	) {
		// Step 1: Resolve the database connection for the master-data query.
		const dbRepository =
			await this.domainInterface.iocContainer.resolve('SQLDatabase');

		// eslint-disable-next-line no-useless-assignment
		let masterdata = undefined;

		// Step 2: Query the master table, joining localized records when available
		// and applying the supplied identifier and locale filters.
		if (localeTableName) {
			masterdata = await this._executeWithBackOff(async () => {
				if (id && localeId) {
					return dbRepository.raw(
						`SELECT * FROM ${masterTableName} A INNER JOIN ${localeTableName} B ON (A.${masterTableField} = B.${localeTableField}) WHERE A.${masterTableField} = ? AND B.locale_id = ?`,
						[id, localeId]
					);
				}

				if (!id && localeId) {
					return dbRepository.raw(
						`SELECT * FROM ${masterTableName} A INNER JOIN ${localeTableName} B ON (A.${masterTableField} = B.${localeTableField}) WHERE B.locale_id = ?`,
						[localeId]
					);
				}

				if (id && !localeId) {
					return dbRepository.raw(
						`SELECT * FROM ${masterTableName} A INNER JOIN ${localeTableName} B ON (A.${masterTableField} = B.${localeTableField}) WHERE A.${masterTableField} = ?`,
						[id]
					);
				}

				if (!id && !localeId) {
					return dbRepository.raw(
						`SELECT * FROM ${masterTableName} A INNER JOIN ${localeTableName} B ON (A.${masterTableField} = B.${localeTableField})`
					);
				}
			});
		} else {
			masterdata = await this._executeWithBackOff(async () => {
				if (id && localeId) {
					return dbRepository.raw(
						`SELECT * FROM ${masterTableName} WHERE ${masterTableField} = ? AND locale_id = ?`,
						[id, localeId]
					);
				}

				if (!id && localeId) {
					return dbRepository.raw(
						`SELECT * FROM ${masterTableName} WHERE locale_id = ?`,
						[localeId]
					);
				}

				if (id && !localeId) {
					return dbRepository.raw(
						`SELECT * FROM ${masterTableName} WHERE ${masterTableField} = ?`,
						[id]
					);
				}

				if (!id && !localeId) {
					return dbRepository.raw(`SELECT * FROM ${masterTableName}`);
				}
			});
		}

		// Step 3: Return the rows from the database result.
		masterdata = masterdata.rows;
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
	 * @memberof MasterdataMiddlewareFactory
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @returns {MasterdataMiddlewareFactory} A new MasterdataMiddlewareFactory instance.
	 *
	 * @description
	 * Initializes the MasterdataMiddlewareFactory factory using its base class.
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
	 * @public
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<Masterdata>} Resolves to the loaded Masterdata middleware instance.
	 *
	 * @description
	 * Creates and loads the middleware instance on first use, then reuses it.
	 * Serializes access to the cached instance with the factory mutex.
	 */
	static async createInstances(domainInterface) {
		// Create or reuse the loaded instance under the factory lock.
		return await MasterdataMiddlewareFactory.#mutex.runExclusive(
			async () => {
				if (!MasterdataMiddlewareFactory.#masterdataInstance) {
					const masterdataInstance = new Masterdata(
						MasterdataMiddlewareFactory['$disk_unc'],
						domainInterface
					);

					await masterdataInstance.load();
					MasterdataMiddlewareFactory.#masterdataInstance =
						masterdataInstance;
				}

				return MasterdataMiddlewareFactory.#masterdataInstance;
			}
		);
	}

	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof MasterdataMiddlewareFactory
	 * @async
	 * @static
	 * @public
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves after the cached instance is unloaded and released.
	 *
	 * @description
	 * Unloads the cached middleware instance and clears the factory reference
	 * under the factory mutex.
	 */
	static async destroyInstances() {
		// Unload and release cached instances under the factory lock.
		await MasterdataMiddlewareFactory.#mutex.runExclusive(async () => {
			await MasterdataMiddlewareFactory.#masterdataInstance?.unload();
			MasterdataMiddlewareFactory.#masterdataInstance = undefined;

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Bounded Contexts
	 * @subcategory Masterdata/Middlewares
	 *
	 * @memberof MasterdataMiddlewareFactory
	 * @static
	 * @public
	 * @override
	 * @readonly
	 * @function
	 * @name MiddlewareName
	 *
	 * @returns {string} - Name of this middleware.
	 *
	 * @description
	 * Returns the registered middleware name: `Masterdata`.
	 */
	static get MiddlewareName() {
		return 'Masterdata';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #masterdataInstance = undefined;
	// #endregion
}
