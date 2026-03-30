/**
 * Imports for this file
 *
 * @category REST API Server/Domains/System Admin
 * @subcategory Base Classes
 *
 * @ignore
 */
import { BaseSurface } from 'baseclass:surface';

const HTTP_ERROR_UNAUTHORIZED = 401;
const HTTP_ERROR_FORBIDDEN = 403;

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Base Classes
 *
 * @class
 * @name SystemAdminBaseSurface
 * @extends BaseSurface
 *
 * @param {string} [location] - The artifact directory on disk.
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts.
 *
 * @classdesc Shared surface behaviour for the system_admin domain.
 */
export class SystemAdminBaseSurface extends BaseSurface {
	/**
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Base Classes
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}

	/**
	 * Builds RBAC middleware for the requested permission level.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Base Classes
	 *
	 * @param {string} permission - The permission label to enforce.
	 * @returns {Promise<Function>} Koa middleware that validates the request.
	 */
	async _rbac(permission) {
		/**
		 * Ensures a user session exists and that the requested permission is allowed.
		 *
		 * @category REST API Server/Domains/System Admin
		 * @subcategory Base Classes
		 *
		 * @param {object} ctxt - Koa request context.
		 * @param {Function} next - Next Koa middleware.
		 * @returns {Promise<void>} Resolves after downstream middleware completes.
		 */
		const permissionCheckerMiddleware =
			async function permissionCheckerMiddleware(ctxt, next) {
				if (!ctxt.state.user) {
					const userError = new Error(
						'EVASERVER::SYSTEM_ADMIN::SESSION_MANAGER::NO_ACTIVE_SESSION'
					);
					userError.status = HTTP_ERROR_UNAUTHORIZED;
					userError.code =
						'EVASERVER::SYSTEM_ADMIN::SESSION_MANAGER::NO_ACTIVE_SESSION';

					throw userError;
				}

				if (permission === 'registered') {
					await next?.();
					return;
				}

				const permissionError = new Error(
					'EVASERVER::SYSTEM_ADMIN::SESSION_MANAGER::AUTHORIZATION_FAILURE'
				);
				permissionError.status = HTTP_ERROR_FORBIDDEN;
				permissionError.code =
					'EVASERVER::SYSTEM_ADMIN::SESSION_MANAGER::AUTHORIZATION_FAILURE';

				throw permissionError;
			};

		return permissionCheckerMiddleware?.bind?.(this);
	}

	/**
	 * Builds ABAC middleware for asset-level checks.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Base Classes
	 *
	 * @returns {Promise<Function>} Koa middleware that validates asset access.
	 */
	async _abac() {
		/**
		 * Placeholder ABAC middleware for user-owned resources.
		 *
		 * @category REST API Server/Domains/System Admin
		 * @subcategory Base Classes
		 *
		 * @param {object} ctxt - Koa request context.
		 * @param {Function} next - Next Koa middleware.
		 * @returns {Promise<void>} Resolves after downstream middleware completes.
		 */
		const assetAccessCheckerMiddleware =
			async function assetAccessCheckerMiddleware(ctxt, next) {
				await next?.();
			};

		return assetAccessCheckerMiddleware?.bind?.(this);
	}
}

export const MedicoBaseSurface = SystemAdminBaseSurface;
