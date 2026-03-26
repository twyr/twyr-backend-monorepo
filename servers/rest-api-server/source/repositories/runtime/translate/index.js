/**
 * Imports for this file
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Translate
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

import { Mutex } from 'async-mutex';
import { Buffer } from 'node:buffer';

import { TranslateClient } from '@aws-sdk/client-translate';
import { TranslateTextCommand } from '@aws-sdk/client-translate';
import { EVASBaseRepository } from '@twyr/framework-classes';
import { EVASBaseFactory } from '@twyr/framework-classes';

/**
 * Magic Number constants
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Translate
 *
 * @ignore
 */
const DEFAULT_TRANSLATE_REGION = 'ap-south-1';
const DEFAULT_TRANSLATE_MAX_ATTEMPTS = 3;

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Translate
 *
 * @class
 * @name Translate
 * @extends EVASBaseRepository
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [iocContainer] - IoC module providing DI repositories
 * @param {object} [configuration] - requested repository configuration
 *
 * @classdesc The Translate Repository Class.
 */
class Translate extends EVASBaseRepository {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Translate
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
	 * @subcategory Translate
	 *
	 * @memberof Translate
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

		const defaultConfiguration = {
			region: DEFAULT_TRANSLATE_REGION,
			maxAttempts: DEFAULT_TRANSLATE_MAX_ATTEMPTS,
			credentials: {
				accessKeyId: undefined,
				secretAccessKey: undefined,
				sessionToken: undefined
			}
		};

		const configuration =
			await this?._mergeConfiguration?.(defaultConfiguration);

		const translateConfiguration = {
			region: configuration?.region,
			maxAttempts: configuration?.maxAttempts
		};

		if (
			configuration?.credentials?.accessKeyId &&
			configuration?.credentials?.secretAccessKey
		) {
			translateConfiguration.credentials = {
				accessKeyId: configuration?.credentials?.accessKeyId,
				secretAccessKey: configuration?.credentials?.secretAccessKey,
				...(configuration?.credentials?.sessionToken && {
					sessionToken: configuration?.credentials?.sessionToken
				})
			};
		}

		this.#translateClient = new TranslateClient(translateConfiguration);
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Translate
	 *
	 * @memberof Translate
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
		this.#translateClient?.destroy?.();
		this.#translateClient = undefined;

		await super.unload?.();
	}
	// #endregion

	// #region Public API
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Translate
	 *
	 * @memberof Translate
	 * @async
	 * @instance
	 * @function
	 * @name translateText
	 *
	 * @param {object} [translationInput] - AWS Translate command input
	 *
	 * @returns {object} - AWS Translate response payload.
	 *
	 * @description
	 * Translates the provided text using AWS Translate.
	 */
	async translateText(translationInput) {
		const translateCommand = new TranslateTextCommand(
			translationInput ?? {}
		);

		const translatedText =
			await this.#translateClient?.send?.(translateCommand);
		return translatedText;
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * Exposes the translation repository API used by other artifacts.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Translate
	 *
	 * @memberof Translate
	 * @instance
	 * @readonly
	 * @member {object}
	 * @name interface
	 * @returns {object} Bound translation methods for runtime use.
	 */
	get interface() {
		return {
			// client: this.#translateClient,
			translateText: this?.translateText?.bind?.(this)
		};
	}
	// #endregion

	// #region Private Fields
	#translateClient = undefined;
	// #endregion
}

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Translate
 *
 * @class
 * @name TranslateRepositoryFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Translate Repository Class Factory.
 */
export default class TranslateRepositoryFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Translate
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
	 * @subcategory Translate
	 *
	 * @memberof TranslateRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [configuration] - requested repository configuration
	 * @param {object} [iocContainer] - IoC Container providing DI Repositories
	 *
	 * @returns {Translate} - The Translate repository instance.
	 */
	static async createInstances(configuration, iocContainer) {
		const repositoryKey = Buffer?.from?.(
			safeJsonStringify?.(configuration ?? {})
		)?.toString?.('base64');

		await TranslateRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (
				!TranslateRepositoryFactory.#translateInstances?.has(
					repositoryKey
				)
			) {
				const translateInstance = new Translate(
					TranslateRepositoryFactory['$disk_unc'],
					iocContainer,
					configuration
				);

				await translateInstance?.load?.();
				TranslateRepositoryFactory.#translateInstances?.set?.(
					repositoryKey,
					translateInstance
				);
			}
		});

		return TranslateRepositoryFactory.#translateInstances?.get(
			repositoryKey
		)?.interface;
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Translate
	 *
	 * @memberof TranslateRepositoryFactory
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
	 * @description Clears the cached {Translate} instances
	 */
	static async destroyInstances(configuration) {
		await TranslateRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (configuration) {
				const repositoryKey = Buffer?.from?.(
					safeJsonStringify?.(configuration)
				)?.toString?.('base64');

				if (
					!TranslateRepositoryFactory.#translateInstances?.has(
						repositoryKey
					)
				)
					return;

				const translateInstance =
					TranslateRepositoryFactory.#translateInstances?.get(
						repositoryKey
					);
				await translateInstance?.unload?.();

				TranslateRepositoryFactory.#translateInstances?.delete?.(
					repositoryKey
				);
				return;
			}

			const destroyResolutions = [];
			TranslateRepositoryFactory.#translateInstances?.forEach?.(
				(translateInstance) => {
					destroyResolutions?.push?.(translateInstance?.unload?.());
				}
			);

			await Promise?.allSettled?.(destroyResolutions);
			TranslateRepositoryFactory.#translateInstances?.clear?.();
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Translate
	 *
	 * @memberof TranslateRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name RepositoryName
	 *
	 * @returns {string} - Name of this repository.
	 *
	 * @description
	 * Returns the name of this repository - Translate
	 */
	static get RepositoryName() {
		return 'Translate';
	}
	// #endregion

	// #region Private Static Members
	static #translateInstances = new Map();
	static #mutex = new Mutex();
	// #endregion
}
