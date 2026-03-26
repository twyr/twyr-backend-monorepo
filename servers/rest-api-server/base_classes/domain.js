/**
 * Imports for this file
 *
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @ignore
 */
import merge from 'lodash.merge';
import safeJsonStringify from 'safe-json-stringify';

import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

import { EVASBaseDomain } from '@twyr/framework-classes';

import { APIRegistry } from '@twyr/api-registry';
import { IocContainer } from '@twyr/server-dependency-manager';

/**
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @class
 * @name BaseDomain
 * @extends EVASBaseDomain
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [parentDomainInterface] - Parent domain interface, if any
 *
 * @classdesc A Base Domain for this Server.
 */
export class BaseDomain extends EVASBaseDomain {
	// #region Constructor
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @ignore
	 */
	constructor(location, parentDomainInterface) {
		super(location, parentDomainInterface);

		this.#modelMethods?.set?.(
			'relational',
			this.#getRelationalModel?.bind?.(this)
		);

		this.#modelMethods?.set?.(
			'mongo',
			this.#getMongooseModel?.bind?.(this)
		);

		this.#modelMethods?.set?.('cache', this.#getRedisEntity?.bind?.(this));
	}
	// #endregion

	// #region Startup / Shutdown
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseDomain
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {null} - Nothing.
	 *
	 * @description Loads / Initializes / Starts-up sub-artifacts.
	 */
	async load() {
		const domainApiRegistry = new APIRegistry(
			this?.name,
			super.domainInterface?.apiRegistry
		);

		const domainIocContainer = new IocContainer(
			this?.name,
			super.domainInterface?.iocContainer
		);

		// Call derived class method with the JSON Serializer
		// instance to register types, etc. that are domain
		// specific
		let JSONAPISerializer = await import('json-api-serializer');
		JSONAPISerializer = JSONAPISerializer?.['default'];

		this.#jsonapiSerializer = new JSONAPISerializer({
			'convert-case': 'kebab-case'
		});

		this?._registerSerializerTypes?.(this.#jsonapiSerializer);

		this.#domainInterface = merge?.({}, super.domainInterface, {
			apiRegistry: domainApiRegistry,
			iocContainer: domainIocContainer,
			models: this.#getModels?.bind?.(this),
			templates: this.#getTemplates?.bind?.(this),
			serializer: this.#jsonapiSerializer
		});

		await super.load?.();
		return;
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseDomain
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {null} - Nothing.
	 *
	 * @description Shuts-down / Un-initializes / Un-loads sub-artifacts.
	 */
	async unload() {
		// Un-instantiate / clean-up references;
		this.#domainInterface = undefined;
		this.#jsonapiSerializer = undefined;
		this.#modelMethods?.clear?.();

		// Finally, Basic un-init
		await super.unload?.();
		return;
	}
	// #endregion

	// #region "Protected" methods
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseDomain
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _registerSerializerTypes
	 *
	 * @param {object} serializer - JSON:API Serializer instance
	 *
	 * @returns {null} - Nothing.
	 *
	 * @description
	 * Empty function to be overridden by derived classes.
	 * They should register their JSON:API serializer types
	 * for their domain here.
	 */
	// eslint-disable-next-line no-unused-vars
	_registerSerializerTypes(serializer) {
		// Empty function to be overridden by derived classes.
		// They should register their JSON:API serializer types
		// for their domain here.
		return;
	}
	// #endregion

	// #region Private Methods
	/**
	 * Loads one or more model descriptors with concrete model instances.
	 *
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseDomain
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getModels
	 *
	 * @param {object[]|object} modelList - Model descriptors to resolve.
	 * @returns {Promise<object[]>} The original descriptors with `model` or `error` populated.
	 */
	async #getModels(modelList) {
		let loadModelResolutions = [];

		if (!Array?.isArray?.(modelList)) modelList = [modelList];

		for (const model of modelList) {
			if (model?.model || model?.error) continue;

			const modelMethod = this.#modelMethods?.get?.(model?.type);
			loadModelResolutions?.push?.(
				modelMethod?.(model?.name, model?.configuration)
			);
		}

		loadModelResolutions =
			await Promise?.allSettled?.(loadModelResolutions);

		loadModelResolutions?.forEach?.((loadedModel, index) => {
			if (loadedModel?.status !== 'fulfilled') {
				// eslint-disable-next-line security/detect-object-injection
				modelList[index].error = loadedModel?.reason;
				return;
			}

			// eslint-disable-next-line security/detect-object-injection
			modelList[index].model = loadedModel?.value;
		});

		return modelList;
	}

	/**
	 * Loads one or more template descriptors with their file contents.
	 *
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseDomain
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getTemplates
	 *
	 * @param {object[]} templateList - Template descriptors to resolve.
	 * @returns {Promise<object[]>} The original descriptors with `template` or `error` populated.
	 */
	async #getTemplates(templateList) {
		let readTemplateResolutions = [];

		for (const template of templateList) {
			const templateFilePath = join?.(
				this?.__dirname,
				'templates',
				template?.type,
				`${template?.action?.toLowerCase?.()}.ejs`
			);

			// eslint-disable-next-line security/detect-non-literal-fs-filename
			readTemplateResolutions?.push?.(readFile?.(templateFilePath));
		}

		readTemplateResolutions = await Promise?.allSettled?.(
			readTemplateResolutions
		);

		readTemplateResolutions?.forEach?.((templateFile, index) => {
			if (templateFile?.status !== 'fulfilled') {
				// eslint-disable-next-line security/detect-object-injection
				templateList[index].error = templateFile?.reason;
				return;
			}

			// eslint-disable-next-line security/detect-object-injection
			templateList[index].template = templateFile?.value;
		});

		return templateList;
	}

	/**
	 * Resolves and binds an Objection.js model for a relational data source.
	 *
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseDomain
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getRelationalModel
	 *
	 * @param {string} name - The model file name without extension.
	 * @param {object} configuration - Repository configuration passed to SQLDatabase.
	 * @returns {Promise<object>} The bound Objection.js model class.
	 */
	async #getRelationalModel(name, configuration) {
		const modelFile = join(
			this?.__dirname,
			'models/relational',
			`${name?.trim?.()?.toLowerCase?.()}.cjs`
		);

		let ModelClass = await import(modelFile);
		ModelClass = ModelClass?.['Model'];

		const database = await this.#domainInterface?.iocContainer?.resolve?.(
			'SQLDatabase',
			configuration
		);

		const model = ModelClass?.bindKnex?.(database);
		return model;
	}

	/**
	 * Resolves and instantiates a Mongoose model for a MongoDB data source.
	 *
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseDomain
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getMongooseModel
	 *
	 * @param {string} name - The model file name without extension.
	 * @param {object} configuration - Repository configuration passed to MongoDB.
	 * @returns {Promise<object>} The instantiated Mongoose model.
	 */
	async #getMongooseModel(name, configuration) {
		const modelFile = join(
			this?.__dirname,
			'models/mongo',
			`${name?.trim?.()?.toLowerCase?.()}.js`
		);

		let ModelClassFactory = await import(modelFile);
		ModelClassFactory = ModelClassFactory?.['default'];

		const mongooseInstance =
			await this.#domainInterface?.iocContainer?.resolve?.(
				'MongoDB',
				configuration
			);

		const ModelClass =
			await ModelClassFactory?.createInstance?.(mongooseInstance);

		return ModelClass;
	}

	/**
	 * Placeholder resolver for Redis-backed entities.
	 *
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseDomain
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #getRedisEntity
	 *
	 * @param {string} name - The cache entity name.
	 * @param {object} configuration - Repository configuration for the cache entity.
	 * @returns {Promise<void>} Nothing until Redis OM integration is implemented.
	 */
	async #getRedisEntity(name, configuration) {
		console?.info?.(
			`TODO: Implement Redis Om to get entity for ${name} with configuration: ${safeJsonStringify?.(
				configuration,
				undefined,
				'\t'
			)}`
		);

		return;
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseDomain
	 * @instance
	 * @override
	 * @member {object} domainInterface
	 *
	 * @returns {object} - Domain Interface
	 *
	 * @description
	 * Returns the domain interface instance that manages
	 * the IoC / API for this Domain
	 */
	get domainInterface() {
		return this.#domainInterface;
	}
	// #endregion

	// #region Private Fields
	#domainInterface = undefined;
	#jsonapiSerializer = undefined;

	#modelMethods = new Map();
	// #endregion
}
