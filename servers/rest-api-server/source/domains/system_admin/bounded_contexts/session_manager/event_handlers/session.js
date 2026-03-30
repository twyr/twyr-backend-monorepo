/**
 * Imports for this file
 *
 * @category REST API Server/Domains/System Admin
 * @subcategory Session Manager/Event Handlers
 *
 * @ignore
 */
import { EVASBaseFactory } from '@twyr/framework-classes';
import { createErrorForPropagation } from '@twyr/error-serializer';
import { BaseEventHandler } from 'baseclass:event-handler';

/**
 * @category REST API Server/Domains/System Admin
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
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}
	// #endregion

	// #region Protected Methods, to be overridden by derived classes
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof Session
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _registerHandlers
	 *
	 * @returns {Promise<void>|undefined} Resolves when handler registration completes.
	 *
	 * @description
	 * Registers the user session event handlers with the domain event emitter.
	 */
	async _registerHandlers() {
		const errors = [];

		try {
			const eventEmitter = this?.domainInterface?.eventEmitter;
			let registerResolutions = [];

			const baseHandlers = await super._registerHandlers?.();
			for (const baseHandler of baseHandlers ?? []) {
				registerResolutions?.push?.(
					eventEmitter?.on?.(baseHandler?.event, baseHandler?.handler)
				);
			}

			registerResolutions?.push?.(
				eventEmitter?.on?.(
					'SYSTEM_ADMIN::INVALIDATE_CACHE',
					this.#postLogoutCleanup?.bind?.(this)
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
			`${this?.name}::_registerHandler error`,
			errors
		);

		if (propagatedError) throw propagatedError;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof Session
	 * @async
	 * @instance
	 * @override
	 * @function
	 * @name _unregisterHandlers
	 *
	 * @returns {Promise<void>|undefined} Resolves when handler deregistration completes.
	 *
	 * @description
	 * Removes the user session event handlers from the domain event emitter.
	 */
	async _unregisterHandlers() {
		const errors = [];

		try {
			const eventEmitter = this?.domainInterface?.eventEmitter;
			let unregisterResolutions = [];

			unregisterResolutions?.push?.(
				eventEmitter?.off?.(
					'SYSTEM_ADMIN::INVALIDATE_CACHE',
					this.#postLogoutCleanup?.bind?.(this)
				)
			);

			unregisterResolutions = await Promise?.allSettled?.(
				unregisterResolutions
			);
			for (const unregisterResolution of unregisterResolutions) {
				if (unregisterResolution?.status === 'fulfilled') continue;
				errors?.push?.(unregisterResolution?.reason);
			}

			await super._unregisterHandlers?.();
		} catch (error) {
			errors?.push?.(error);
		}

		if (!errors?.length) return;

		const propagatedError = createErrorForPropagation?.(
			`${this?.name}::_unregisterHandlers error`,
			errors
		);

		if (propagatedError) throw propagatedError;
	}
	// #endregion

	// #region Handlers
	/**
	 * @category REST API Server/Domains/System Admin
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
	 * @param {string} eventData.userId - Medico identifier whose cache should be cleared.
	 *
	 * @returns {Promise<void>} Resolves when the cache entry is deleted and logged.
	 *
	 * @description
	 * Deletes the cached user session snapshot after a logout-triggered
	 * cache invalidation event.
	 */
	async #postLogoutCleanup(eventData) {
		const cache =
			await this?.domainInterface?.iocContainer?.resolve?.('Cache');
		await cache?.del?.(
			`twyr!entity!value!aggregate!system_admin!${eventData?.userId}!basics`
		);

		const logger =
			await this?.domainInterface?.iocContainer?.resolve?.('Logger');
		logger?.debug?.(
			`${this?.name}::postLogoutCleanup: ${eventData?.userId} cache cleared`
		);
	}
	// #endregion
}

/**
 * @category REST API Server/Domains/System Admin
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
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof SessionEventHandlerFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts
	 *
	 * @returns {Promise<Session>} Resolves to the Session event handler instance.
	 */
	static async createInstances(domainInterface) {
		if (!SessionEventHandlerFactory.#eventHandlerInstance) {
			const sessionInstance = new Session(
				SessionEventHandlerFactory['$disk_unc'],
				domainInterface
			);

			await sessionInstance?.load?.();
			SessionEventHandlerFactory.#eventHandlerInstance = sessionInstance;
		}

		return SessionEventHandlerFactory.#eventHandlerInstance;
	}

	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof SessionEventHandlerFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves when the cached Session instance is cleared.
	 *
	 * @description Destroys the cached Session event handler instance.
	 */
	static async destroyInstances() {
		await SessionEventHandlerFactory.#eventHandlerInstance?.unload?.();
		SessionEventHandlerFactory.#eventHandlerInstance = undefined;

		return;
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Session Manager/Event Handlers
	 *
	 * @memberof SessionEventHandlerFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name EventHandlerName
	 *
	 * @returns {string} Name of this event handler.
	 *
	 * @description
	 * Returns the event handler name: `Session`.
	 */
	static get EventHandlerName() {
		return 'Session';
	}
	// #endregion

	// #region Private Static Members
	static #eventHandlerInstance = undefined;
	// #endregion
}
