/**
 * Imports for this file
 *
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @ignore
 */
import { backOff } from 'exponential-backoff';

import { createErrorForPropagation } from '@twyr/error-serializer';
import { EVASBaseMiddleware } from '@twyr/framework-classes';

/**
 * Magic Number constants
 *
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @ignore
 */
const MAX_RETRY_COUNT = 5;
const HTTP_ERROR_SERVICE_UNAVAILABLE = 503;

/**
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @class
 * @name BaseMiddleware
 * @extends EVASBaseMiddleware
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc The Base Class for all Middlewares.
 */
export class BaseMiddleware extends EVASBaseMiddleware {
	// #region Constructor
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseMiddleware
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {BaseMiddleware} A new BaseMiddleware instance.
	 *
	 * @description
	 * Initializes the BaseMiddleware middleware using its base class.
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Lifecycle Methods
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseMiddleware
	 * @async
	 * @instance
	 * @public
	 * @override
	 * @function
	 * @name load
	 *
	 * @returns {Promise<void>} Resolves after loading completes.
	 *
	 * @description
	 * Loads the inherited middleware infrastructure for BaseMiddleware.
	 */
	async load() {
		// Load the base artifact, then register the derived middleware APIs.
		await super.load();
		await this._registerApi();
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseMiddleware
	 * @async
	 * @instance
	 * @public
	 * @override
	 * @function
	 * @name unload
	 *
	 * @returns {Promise<void>} Resolves after unloading completes.
	 *
	 * @description
	 * Unloads the middleware infrastructure.
	 */
	async unload() {
		// Remove middleware APIs before releasing the base artifact.
		await this._unregisterApi();
		await super.unload();
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseMiddleware
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _registerApi
	 *
	 * @returns {Promise<object[]>} Resolves to the inherited registration definitions; empty by default.
	 *
	 * @description
	 * Provides an empty set of registration definitions for derived artifacts to extend.
	 */
	async _registerApi() {
		return [];
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseMiddleware
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
	 * To be overridden by artifact implementations - for removing their API
	 * from the apiRegistry in the domainInterface
	 */
	async _unregisterApi() {
		return;
	}
	// #endregion

	// #region "Protected" methods
	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseMiddleware
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _executeWithBackOff
	 *
	 * @param {Function} method - Operation to retry until it succeeds or retries are exhausted.
	 *
	 * @returns {Promise<*>} Resolves to the operation result.
	 *
	 * @description
	 * Runs the supplied operation with exponential backoff and logs retry failures.
	 * Marks the propagated error as HTTP 503 if every retry fails.
	 */
	async _executeWithBackOff(method) {
		// Step 1: Retry the operation with exponential backoff and log each failure.
		const logger =
			await this.domainInterface.iocContainer.resolve('Logger');

		try {
			const returnValue = await backOff(method, {
				delayFirstAttempt: false,
				numOfAttempts: MAX_RETRY_COUNT,
				retry: (error) => {
					logger.error(error.message);
					return true;
				}
			});

			return returnValue;
		} catch (error) {
			// Step 2: Mark exhausted retries as service-unavailable errors before propagating them.
			error.status = HTTP_ERROR_SERVICE_UNAVAILABLE;
			throw error;
		}
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseMiddleware
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _getModelsFromDomain
	 *
	 * @param {object|object[]} modelList - Model descriptor or descriptors containing `type` and `name`.
	 *
	 * @returns {Promise<Function|Function[]|undefined>} One resolved model, multiple models, or undefined when none resolve.
	 *
	 * @description
	 * Resolves model descriptors through the domain interface.
	 * Aggregates lookup failures before returning the resolved model classes.
	 */
	async _getModelsFromDomain(modelList) {
		// Step 1: Resolve the requested models.
		let models = await this.domainInterface.models(modelList);
		const errors = [];

		// Step 2: Separate successful resolutions from lookup errors.
		models = models
			.map((model) => {
				if (model.error) {
					errors.push(model.error);
					return;
				}

				return model.model;
			})
			.filter((model) => {
				return model ?? false;
			});

		// Step 3: Propagate lookup failures before returning any resolved values.
		if (errors.length) {
			const propagatedError = createErrorForPropagation(
				`${this.name}::_getModelsFromDomain: error fetching models`,
				errors
			);

			throw propagatedError;
		}

		// Step 4: Return a single resolved value directly, or the full collection.
		if (models.length <= 1) {
			models = models.pop();
		}

		return models;
	}

	/**
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @memberof BaseMiddleware
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _getTemplatesFromDomain
	 *
	 * @param {object[]} templateList - Template descriptors containing `type` and `action`.
	 *
	 * @returns {Promise<Buffer|Buffer[]|undefined>} One template buffer, multiple buffers, or undefined when none resolve.
	 *
	 * @description
	 * Resolves template descriptors through the domain interface.
	 * Aggregates lookup failures before returning the template file contents.
	 */
	async _getTemplatesFromDomain(templateList) {
		// Step 1: Resolve the requested templates.
		let templates = await this.domainInterface.templates(templateList);
		const errors = [];

		// Step 2: Separate successful resolutions from lookup errors.
		templates = templates
			.map((template) => {
				if (template.error) {
					errors.push(template.error);
					return;
				}

				return template.template;
			})
			.filter((template) => {
				return template ?? false;
			});

		// Step 3: Propagate lookup failures before returning any resolved values.
		if (errors.length) {
			const propagatedError = createErrorForPropagation(
				`${this.name}::_getTemplatesFromDomain: error fetching templates`,
				errors
			);

			throw propagatedError;
		}

		// Step 4: Return a single resolved value directly, or the full collection.
		if (templates.length <= 1) {
			templates = templates.pop();
		}

		return templates;
	}
	// #endregion
}
