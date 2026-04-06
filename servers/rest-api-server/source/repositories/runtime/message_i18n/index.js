/**
 * Imports for this file
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Message I18n
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

import { Mutex } from 'async-mutex';

import { EVASBaseRepository } from '@twyr/framework-classes';
import { EVASBaseFactory } from '@twyr/framework-classes';

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Message I18n
 *
 * @class
 * @name MessageI18N
 * @extends EVASBaseRepository
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [iocContainer] - IoC module providing DI repositories
 * @param {object} [configuration] - requested repository configuration
 *
 * @classdesc The MessageI18N Repository Class.
 */
class MessageI18N extends EVASBaseRepository {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @ignore
	 */
	constructor(location, iocContainer, configuration) {
		super(location, iocContainer, configuration);
	}
	// #endregion

	// #region Lifecycle Methods
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18N
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * To be overridden by artifact implementations - for implementing custom
	 * start logic
	 */
	async load() {
		await super.load?.();

		await this.#setupI18N?.();
		await this.#loadTranslations?.();

		return;
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18N
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {null} - Nothing
	 *
	 * @description
	 * To be overridden by artifact implementations - for implementing custom
	 * stop logic
	 */
	async unload() {
		await super.unload?.();
		this.#i18n = undefined;
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * Exposes translation helpers and the enabled locale list.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18N
	 * @instance
	 * @readonly
	 * @member {object}
	 * @name interface
	 * @returns {object} Bound translation helpers and supported locales.
	 */
	get interface() {
		return {
			translate: this.#translate.bind(this),
			supportedLocales: this.#enabledLocales
				? [...this.#enabledLocales]
				: []
		};
	}
	// #endregion

	// #region Private Methods
	/**
	 * Initializes the i18n library with enabled locales and fallback mappings from the database.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18N
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #setupI18N
	 *
	 * @returns {Promise<void>} Resolves after the i18n instance is configured.
	 */
	async #setupI18N() {
		const databaseRepository =
			await this?.iocContainer?.resolve?.('SQLDatabase');

		// Step 1: Get all the locales we've enabled in the system,
		// along with the fallbacks
		let enabledLocales = await databaseRepository?.raw?.(
			`SELECT code FROM locale_master WHERE is_enabled = true;`
		);
		this.#enabledLocales =
			enabledLocales?.rows?.map?.((row) => row?.code) ?? [];

		const staticCatalog = {};
		(this.#enabledLocales ?? []).forEach((el) => {
			// eslint-disable-next-line security/detect-object-injection
			staticCatalog[el] = {};
		});

		// TODO: Write a DB FUNCTION to walk up the priority tree of fallbacks
		// and return the full list of fallbacks for each locale.
		// For now, just get the direct fallbacks
		const fallbackLocales = await databaseRepository?.(
			'locale_fallback_master'
		)
			?.select('locale_code', 'fallback_locale_code')
			?.whereIn?.('locale_code', this.#enabledLocales)
			?.andWhere('priority', 1);

		const i18nFallbacks = {};
		(fallbackLocales ?? []).forEach((row) => {
			const { locale_code, fallback_locale_code } = row;
			// eslint-disable-next-line security/detect-object-injection
			i18nFallbacks[locale_code] = fallback_locale_code;
		});

		// Step 2: Setup the i18n instance
		let I18n = await import('i18n');
		I18n = I18n?.['default'];

		I18n?.configure?.({
			debug: global.serverEnvironment !== 'production',
			locales: this.#enabledLocales,
			staticCatalog: staticCatalog,
			fallbacks: i18nFallbacks,
			defaultLocale: 'en-IN',
			objectNotation: false,
			updateFiles: false,
			syncFiles: false,
			autoReload: false,

			logDebugFn: this.#i18nDebugLog?.bind(this),
			logWarnFn: this.#i18nWarnLog?.bind(this),
			logErrorFn: this.#i18nErrorLog?.bind(this)
		});

		this.#i18n = I18n;
	}

	/**
	 * Loads translated system messages from the database into the configured i18n catalog.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18N
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #loadTranslations
	 *
	 * @returns {Promise<void>} Resolves after all translations are loaded.
	 */
	async #loadTranslations() {
		const databaseRepository =
			await this?.iocContainer?.resolve?.('SQLDatabase');

		// Step 2: Fetch the system messages from the database
		let systemMessages = await databaseRepository?.(
			'system_message_by_locale'
		)
			?.select('message_id', 'locale_id', 'message_text')
			?.whereIn?.('locale_id', this.#enabledLocales);

		// Step 3: Organize the messages into locales, etc.
		const i18nCatalog = {};
		for (const systemMessage of systemMessages) {
			const { message_id, locale_id, message_text } = systemMessage;

			// eslint-disable-next-line security/detect-object-injection
			if (!i18nCatalog[locale_id]) {
				// eslint-disable-next-line security/detect-object-injection
				i18nCatalog[locale_id] = {};
			}

			// eslint-disable-next-line security/detect-object-injection
			i18nCatalog[locale_id][message_id] = message_text;
		}

		// Step 4: Load the messages into i18n
		for (const localeCode of Object.keys(i18nCatalog)) {
			this.#i18n?.addLocale?.(localeCode);
			this.#i18n?.setLocale?.(localeCode);

			const localeCatalog = this.#i18n?.getCatalog?.(localeCode);
			// eslint-disable-next-line security/detect-object-injection
			for (const messageCode of Object.keys(i18nCatalog[localeCode])) {
				// eslint-disable-next-line security/detect-object-injection
				localeCatalog[messageCode] =
					// eslint-disable-next-line security/detect-object-injection
					i18nCatalog[localeCode][messageCode];
			}
		}
		return;
	}

	/**
	 * Translates a message key for a locale, reloading catalogs on cache misses.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18N
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #translate
	 *
	 * @param {string} key - Message key to translate.
	 * @param {string} locale - Requested locale.
	 * @param {object} variables - Template variables passed to i18n.
	 * @returns {Promise<string>} The translated message.
	 */
	async #translate(key, locale, variables) {
		// Implementation for translation logic goes here
		// This is a placeholder implementation
		// return `Translated(${key}, ${locale}, ${safeJsonStringify?.(variables ?? {})})`;
		let translatedMessage = this.#i18n?.__?.(
			{ phrase: key, locale: locale },
			variables
		);

		if (translatedMessage === key) {
			await this.#translationReloadMutex?.runExclusive?.(async () => {
				this.#i18n = undefined;
				await this.#setupI18N?.();
				await this.#loadTranslations?.();
			});
		}

		if (translatedMessage === key) {
			translatedMessage = this.#i18n?.__?.(
				{ phrase: key, locale: locale },
				variables
			);
		}

		if (translatedMessage === key) {
			translatedMessage = this.#i18n?.__?.(
				{
					phrase: 'I18N_REPOSITORY::TRANSLATION_ERROR',
					locale: locale
				},
				variables
			);
		}

		if (translatedMessage === key) {
			translatedMessage = this.#i18n?.__?.(
				{
					phrase: 'I18N_REPOSITORY::TRANSLATION_ERROR',
					locale: 'en-IN'
				},
				variables
			);
		}

		return translatedMessage;
	}

	/**
	 * Writes i18n debug messages through the shared logger.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18N
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #i18nDebugLog
	 *
	 * @param {string} message - Debug message emitted by the i18n library.
	 * @returns {Promise<void>} Resolves after the message is logged.
	 */
	async #i18nDebugLog(message) {
		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.debug?.(`i18n::debug: ${message}`);
	}

	/**
	 * Writes i18n warning messages through the shared logger.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18N
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #i18nWarnLog
	 *
	 * @param {string} message - Warning message emitted by the i18n library.
	 * @returns {Promise<void>} Resolves after the message is logged.
	 */
	async #i18nWarnLog(message) {
		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.warn?.(`i18n::warn: ${message}`);
	}

	/**
	 * Writes i18n error messages through the shared logger.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18N
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #i18nErrorLog
	 *
	 * @param {string} message - Error message emitted by the i18n library.
	 * @returns {Promise<void>} Resolves after the message is logged.
	 */
	async #i18nErrorLog(message) {
		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.error?.(`i18n::error: ${message}`);
	}
	// #endregion

	// #region Private Fields
	#i18n = undefined;
	#enabledLocales = undefined;
	#translationReloadMutex = new Mutex();
	// #endregion
}

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Message I18n
 *
 * @class
 * @name MessageI18NRepositoryFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The MessageI18N Repository Class Factory.
 */
export default class MessageI18NRepositoryFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18NRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [configuration] - requested repository configuration
	 * @param {object} [iocContainer] - IoC Container providing DI Repositories
	 *
	 * @returns {MessageI18N} - The MessageI18N repository instance.
	 */
	static async createInstances(configuration, iocContainer) {
		const repositoryKey = Buffer?.from?.(
			safeJsonStringify?.(configuration ?? {})
		)?.toString?.('base64');

		await MessageI18NRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (
				!MessageI18NRepositoryFactory.#messageI18NInstances?.has(
					repositoryKey
				)
			) {
				const messageI18NInstance = new MessageI18N(
					MessageI18NRepositoryFactory['$disk_unc'],
					iocContainer,
					configuration
				);

				await messageI18NInstance?.load?.();
				MessageI18NRepositoryFactory.#messageI18NInstances?.set?.(
					repositoryKey,
					messageI18NInstance
				);
			}
		});

		return MessageI18NRepositoryFactory.#messageI18NInstances?.get(
			repositoryKey
		)?.interface;
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18NRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @param {object} [configuration] - requested repository configuration
	 *
	 * @returns {undefined} - Nothing.
	 *
	 * @description Clears the cached {MessageI18N} instances
	 */
	static async destroyInstances(configuration) {
		await MessageI18NRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (configuration) {
				const repositoryKey = Buffer?.from?.(
					safeJsonStringify?.(configuration)
				)?.toString?.('base64');

				if (
					!MessageI18NRepositoryFactory.#messageI18NInstances?.has(
						repositoryKey
					)
				)
					return;

				const messageI18NInstance =
					MessageI18NRepositoryFactory.#messageI18NInstances?.get(
						repositoryKey
					);
				await messageI18NInstance?.unload?.();

				MessageI18NRepositoryFactory.#messageI18NInstances?.delete?.(
					repositoryKey
				);
				return;
			}

			const destroyResolutions = [];
			MessageI18NRepositoryFactory.#messageI18NInstances?.forEach?.(
				(sqlDatabaseInstance) => {
					destroyResolutions?.push?.(sqlDatabaseInstance?.unload?.());
				}
			);

			await Promise?.allSettled?.(destroyResolutions);
			MessageI18NRepositoryFactory.#messageI18NInstances?.clear?.();

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Message I18n
	 *
	 * @memberof MessageI18NRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name RepositoryName
	 *
	 * @returns {string} - Name of this repository.
	 *
	 * @description
	 * Returns the name of this repository - MessageI18N
	 */
	static get RepositoryName() {
		return 'MessageI18N';
	}
	// #endregion

	// #region Private Static Members
	static #messageI18NInstances = new Map();
	static #mutex = new Mutex();
	// #endregion
}
