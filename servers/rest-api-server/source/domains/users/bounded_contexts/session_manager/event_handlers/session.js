/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Session Manager/Event Handlers
 *
 * @ignore
 */
import { Mutex } from 'async-mutex';

import { createErrorForPropagation } from '@twyr/error-serializer';
import { EVASBaseFactory } from '@twyr/framework-classes';

import { BaseEventHandler } from 'baseclass:event-handler';

/**
 * @category REST API Server/Domains/Users
 * @subcategory Session Manager/Event Handlers
 *
 * @class
 * @name Session
 * @extends BaseEventHandler
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
 *
 * @classdesc Event handler for user session side effects.
 */
export class Session extends BaseEventHandler {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof Session
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {Session} A new Session instance.
	 *
	 * @description
	 * Initializes the Session event handler using its base class.
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof Session
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _registerHandlers
	 *
	 * @returns {Promise<void>} Resolves after registration changes complete.
	 *
	 * @description
	 * Registers the user session event handlers with the domain event emitter.
	 */
	async _registerHandlers() {
		// Step 1: Register inherited and local event handlers, collecting any failures.
		const errors = [];

		try {
			const eventEmitter = this.domainInterface.eventEmitter;
			let registerResolutions = [];

			const baseHandlers = await super._registerHandlers();
			for (const baseHandler of baseHandlers ?? []) {
				registerResolutions.push(
					eventEmitter.on(baseHandler.event, baseHandler.handler)
				);
			}

			registerResolutions.push(
				eventEmitter.on(
					'USER::INVALIDATE_CACHE',
					this.#postLogoutCleanup.bind(this)
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
			`${this.name}::_registerHandler error`,
			errors
		);

		if (propagatedError) throw propagatedError;
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof Session
	 * @async
	 * @instance
	 * @protected
	 * @override
	 * @function
	 * @name _unregisterHandlers
	 *
	 * @returns {Promise<void>} Resolves after registration changes complete.
	 *
	 * @description
	 * Removes the user session event handlers from the domain event emitter.
	 */
	async _unregisterHandlers() {
		// Step 1: Remove the local event handlers, collecting any failures.
		const errors = [];

		try {
			const eventEmitter = this.domainInterface.eventEmitter;
			let unregisterResolutions = [];

			unregisterResolutions.push(
				eventEmitter.off(
					'USER::INVALIDATE_CACHE',
					this.#postLogoutCleanup.bind(this)
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

			await super._unregisterHandlers();
		} catch (error) {
			errors.push(error);
		}

		// Step 4: Propagate collected failures after all operations have been attempted.
		if (!errors.length) return;

		const propagatedError = createErrorForPropagation(
			`${this.name}::_unregisterHandlers error`,
			errors
		);

		if (propagatedError) throw propagatedError;
	}
	// #endregion

	// #region Handlers
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof Session
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #postLogoutCleanup
	 *
	 * @param {object} eventData - Event payload emitted during logout.
	 * @param {string} eventData.userId - User identifier whose cache should be cleared.
	 *
	 * @returns {Promise<void>} Resolves when the cache entry is deleted and logged.
	 *
	 * @description
	 * Deletes the cached session snapshot for the event user and logs completion.
	 * Runs when the domain emits its cache invalidation event, including after logout
	 * and profile, contact, or locale changes.
	 */
	async #postLogoutCleanup(eventData) {
		// Step 1: Delete the cached session snapshot for the event user.
		const cache = await this.domainInterface.iocContainer.resolve('Cache');
		await cache.del(
			`twyr!entity!value!aggregate!user!${eventData.userId}!basics`
		);

		// Step 2: Log the completed cache invalidation.
		const logger =
			await this.domainInterface.iocContainer.resolve('Logger');
		logger.debug(
			`${this.name}::postLogoutCleanup: ${eventData.userId} cache cleared`
		);
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/Users
 * @subcategory Session Manager/Event Handlers
 *
 * @class
 * @name SessionEventHandlerFactory
 * @extends EVASBaseFactory
 *
 * @classdesc Factory for the session event handler.
 */
export default class SessionEventHandlerFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof SessionEventHandlerFactory
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @returns {SessionEventHandlerFactory} A new SessionEventHandlerFactory instance.
	 *
	 * @description
	 * Initializes the SessionEventHandlerFactory factory using its base class.
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof SessionEventHandlerFactory
	 * @async
	 * @static
	 * @public
	 * @override
	 * @function
	 * @name createInstances
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<Session>} Resolves to the loaded Session event handler instance.
	 *
	 * @description
	 * Creates and loads the event handler instance on first use, then reuses it.
	 * Serializes access to the cached instance with the factory mutex.
	 */
	static async createInstances(domainInterface) {
		// Create or reuse the loaded instance under the factory lock.
		return await SessionEventHandlerFactory.#mutex.runExclusive(
			async () => {
				if (!SessionEventHandlerFactory.#eventHandlerInstance) {
					const sessionInstance = new Session(
						SessionEventHandlerFactory['$disk_unc'],
						domainInterface
					);

					await sessionInstance.load();
					SessionEventHandlerFactory.#eventHandlerInstance =
						sessionInstance;
				}

				return SessionEventHandlerFactory.#eventHandlerInstance;
			}
		);
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof SessionEventHandlerFactory
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
	 * Unloads the cached event handler instance and clears the factory reference
	 * under the factory mutex.
	 */
	static async destroyInstances() {
		// Unload and release cached instances under the factory lock.
		await SessionEventHandlerFactory.#mutex.runExclusive(async () => {
			await SessionEventHandlerFactory.#eventHandlerInstance?.unload();
			SessionEventHandlerFactory.#eventHandlerInstance = undefined;

			return;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof SessionEventHandlerFactory
	 * @static
	 * @public
	 * @override
	 * @readonly
	 * @function
	 * @name EventHandlerName
	 *
	 * @returns {string} Name of this event handler.
	 *
	 * @description
	 * Returns the registered event handler name: `Session`.
	 */
	static get EventHandlerName() {
		return 'Session';
	}
	// #endregion

	// #region Private Static Members
	static #mutex = new Mutex();
	static #eventHandlerInstance = undefined;
	// #endregion
}
