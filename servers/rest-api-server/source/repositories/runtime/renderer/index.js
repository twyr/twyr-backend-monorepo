/**
 * Imports for this file
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Renderer
 *
 * @ignore
 */
import { Mutex } from 'async-mutex';

import { EVASBaseRepository } from '@twyr/framework-classes';
import { EVASBaseFactory } from '@twyr/framework-classes';

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Renderer
 *
 * @class
 * @name Renderer
 * @extends EVASBaseRepository
 *
 * @param {string} [location] - __dirname for this file in CJS, basically
 * @param {object} [iocContainer] - IoC module providing DI repositories
 * @param {object} [configuration] - requested repository configuration
 *
 * @classdesc The Renderer Repository Class.
 */
class Renderer extends EVASBaseRepository {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Renderer
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
	 * @subcategory Renderer
	 *
	 * @memberof Renderer
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
	 * @subcategory Renderer
	 *
	 * @memberof Renderer
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
	 * @subcategory Renderer
	 *
	 * @memberof Renderer
	 * @async
	 * @instance
	 * @function
	 * @name render
	 *
	 * @param {Array} renderData - The data to be rendered.
	 *
	 * @returns {null} Nothing.
	 *
	 * @description
	 * Renders data, and modifies the input to include rendered data.
	 */
	async render(renderData) {
		let ejs = await import('ejs');
		ejs = ejs?.['default'];

		const options = {
			async: true,
			compileDebug: global.serverEnvironment !== 'production'
		};

		let renderResolutions = [];
		for (const renderItem of renderData) {
			renderResolutions?.push?.(
				ejs?.render?.(
					renderItem?.template?.toString?.(),
					renderItem?.data,
					options
				)
			);
		}

		renderResolutions = await Promise?.allSettled?.(renderResolutions);
		renderResolutions?.forEach?.((renderedData, index) => {
			if (renderedData?.status === 'fulfilled') {
				// eslint-disable-next-line security/detect-object-injection
				renderData[index].document = renderedData?.value?.toString?.();
			}
		});

		return renderData;
	}
	// #endregion

	// #region Getters / Setters
	/**
	 * Exposes the template rendering API.
	 *
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Renderer
	 *
	 * @memberof Renderer
	 * @instance
	 * @readonly
	 * @member {object}
	 * @name interface
	 * @returns {object} Bound template rendering methods.
	 */
	get interface() {
		return {
			render: this?.render?.bind?.(this)
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
 * @subcategory Renderer
 *
 * @class
 * @name RendererRepositoryFactory
 * @extends EVASBaseFactory
 *
 * @classdesc The Renderer Repository Class Factory.
 */
export default class RendererRepositoryFactory extends EVASBaseFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Renderer
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
	 * @subcategory Renderer
	 *
	 * @memberof RendererRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [configuration] - requested repository configuration
	 * @param {object} [iocContainer] - IoC Container providing DI Repositories
	 *
	 * @returns {Renderer} - The Renderer repository instance.
	 */
	static async createInstances(configuration, iocContainer) {
		await RendererRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (!RendererRepositoryFactory.#rendererInstance) {
				const rendererInstance = new Renderer(
					RendererRepositoryFactory['$disk_unc'],
					iocContainer,
					configuration
				);

				await rendererInstance?.load?.();
				RendererRepositoryFactory.#rendererInstance = rendererInstance;
			}
		});

		return RendererRepositoryFactory.#rendererInstance?.interface;
	}

	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Renderer
	 *
	 * @memberof RendererRepositoryFactory
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
	 * @description Clears the cached {Renderer} instances
	 */
	static async destroyInstances(/*configuration*/) {
		await RendererRepositoryFactory.#mutex?.runExclusive?.(async () => {
			if (!RendererRepositoryFactory.#rendererInstance) return;

			await RendererRepositoryFactory.#rendererInstance?.unload?.();
			RendererRepositoryFactory.#rendererInstance = undefined;
		});
	}
	// #endregion

	// #region Getters
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Renderer
	 *
	 * @memberof RendererRepositoryFactory
	 * @async
	 * @static
	 * @override
	 * @function
	 * @name RepositoryName
	 *
	 * @returns {string} - Name of this repository.
	 *
	 * @description
	 * Returns the name of this repository - Renderer
	 */
	static get RepositoryName() {
		return 'Renderer';
	}
	// #endregion

	// #region Private Static Members
	static #rendererInstance = undefined;
	static #mutex = new Mutex();
	// #endregion
}
