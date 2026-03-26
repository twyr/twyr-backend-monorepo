/**
 * Imports for this file
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Notification
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

import { Mutex } from 'async-mutex';

import { EVASBaseRepository } from '@twyr/framework-classes';
import { EVASBaseFactory } from '@twyr/framework-classes';

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Notification
 *
 * @class
 * @name Notification
 * @extends EVASBaseRepository
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [iocContainer] - IoC module providing DI repositories
 * @param {object} [configuration] - requested repository configuration
 *
 * @classdesc The Notification Repository Class.
 */
class Notification extends EVASBaseRepository {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Notification
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
	 * @subcategory Notification
	 *
	 * @memberof Notification
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
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Notification
	 *
	 * @memberof Notification
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
	}
	// #endregion

	// #region Interface API
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Notification
	 *
	 * @memberof Notification
	 * @async
	 * @instance
	 * @function
	 * @name send
	 *
	 * @param {Array} notificationData - The data to be sent via notifications.
	 *
	 * @returns {null} Nothing.
	 *
	 * @description
	 * Sends out notifications based on the input data.
	 */
	async send(notificationData) {
		const logger = await this?.iocContainer?.resolve?.('Logger');
		logger?.info?.(
			`\nTODO: IMPLEMENT ACTUAL NOTIFICATION MECHANISM\nSending notifications: ${safeJsonStringify?.(
				notificationData,
				undefined,
				'\t'
			)}`
		);
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * Exposes the notification sending API.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Notification
	 *
	 * @memberof Notification
	 * @instance
	 * @readonly
	 * @member {object}
	 * @name interface
	 * @returns {object} Bound notification delivery methods.
	 */
	get interface() {
		return {
			send: this?.send?.bind?.(this)
		};
	}
	// #endregion

	// #region Private Methods
	// #endregion

	// #region Private Fields
	// #endregion
}

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Notification
 *
 * @class
 * @name NotificationRepositoryFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Notification Repository Class Factory.
 */
export default class NotificationRepositoryFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Notification
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
	 * @subcategory Notification
	 *
	 * @memberof NotificationRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [configuration] - requested repository configuration
	 * @param {object} [iocContainer] - IoC Container providing DI Repositories
	 *
	 * @returns {Notification} - The Notification repository instance.
	 */
	static async createInstances(configuration, iocContainer) {
		await NotificationRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (!NotificationRepositoryFactory.#notificationInstance) {
				const notificationInstance = new Notification(
					NotificationRepositoryFactory['$disk_unc'],
					iocContainer,
					configuration
				);

				await notificationInstance?.load?.();
				NotificationRepositoryFactory.#notificationInstance =
					notificationInstance;
			}
		});

		return NotificationRepositoryFactory.#notificationInstance?.interface;
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Notification
	 *
	 * @memberof NotificationRepositoryFactory
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
	 * @description Clears the cached {Notification} instances
	 */
	static async destroyInstances(/*configuration*/) {
		await NotificationRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (!NotificationRepositoryFactory.#notificationInstance) return;

			await NotificationRepositoryFactory.#notificationInstance?.unload?.();
			NotificationRepositoryFactory.#notificationInstance = undefined;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Notification
	 *
	 * @memberof NotificationRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name RepositoryName
	 *
	 * @returns {string} - Name of this repository.
	 *
	 * @description
	 * Returns the name of this repository - Notification
	 */
	static get RepositoryName() {
		return 'Notification';
	}
	// #endregion

	// #region Private Static Members
	static #notificationInstance = undefined;
	static #mutex = new Mutex();
	// #endregion
}
