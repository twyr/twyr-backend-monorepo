/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Base Classes
 *
 * @ignore
 */
import { BaseSurface } from 'baseclass:surface';

const HTTP_ERROR_UNAUTHORIZED = 401;
const HTTP_ERROR_FORBIDDEN = 403;

/**
 * @category REST API Server/Domains/Users
 * @subcategory Base Classes
 *
 * @class
 * @name UserBaseSurface
 * @extends BaseSurface
 *
 * @param {string} [location] - The artifact directory on disk.
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts.
 *
 * @classdesc Shared surface behaviour for the users domain.
 */
export class UserBaseSurface extends BaseSurface {
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @memberof UserBaseSurface
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {UserBaseSurface} A new UserBaseSurface instance.
	 *
	 * @description
	 * Initializes the UserBaseSurface surface using its base class.
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @memberof UserBaseSurface
	 * @async
	 * @instance
	 * @protected
	 * @function
	 * @name _rbac
	 *
	 * @param {string} permission - The permission label to enforce.
	 *
	 * @returns {Promise<Function>} Koa middleware that validates the request.
	 *
	 * @description
	 * Builds RBAC middleware for the requested permission level.
	 */
	async _rbac(permission) {
		/**
		 * @category REST API Server/Domains/Users
		 * @subcategory Base Classes
		 *
		 * @memberof UserBaseSurface
		 * @async
		 * @inner
		 * @private
		 * @function
		 * @name permissionCheckerMiddleware
		 *
		 * @param {object} ctxt - Koa request context.
		 * @param {Function} next - Next Koa middleware.
		 *
		 * @returns {Promise<void>} Resolves after downstream middleware completes.
		 *
		 * @description
		 * Ensures a user session exists and that the requested permission is allowed.
		 */
		const permissionCheckerMiddleware =
			async function permissionCheckerMiddleware(ctxt, next) {
				// Step 1: Reject requests without an authenticated session.
				if (!ctxt.state.user) {
					const userError = new Error(
						'EVASERVER::USERS::SESSION_MANAGER::NO_ACTIVE_SESSION'
					);
					userError.status = HTTP_ERROR_UNAUTHORIZED;
					userError.code =
						'EVASERVER::USERS::SESSION_MANAGER::NO_ACTIVE_SESSION';

					throw userError;
				}

				// Step 2: Continue only when the required permission matches the user role.
				if (
					permission === 'registered' &&
					ctxt.state.user.role === 'user'
				) {
					await next();
					return;
				}

				// Step 3: Reject requests that do not satisfy the permission check.
				const permissionError = new Error(
					'EVASERVER::USERS::SESSION_MANAGER::AUTHORIZATION_FAILURE'
				);
				permissionError.status = HTTP_ERROR_FORBIDDEN;
				permissionError.code =
					'EVASERVER::USERS::SESSION_MANAGER::AUTHORIZATION_FAILURE';

				throw permissionError;
			};

		return permissionCheckerMiddleware.bind(this);
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @memberof UserBaseSurface
	 * @async
	 * @instance
	 * @protected
	 * @function
	 * @name _abac
	 *
	 * @returns {Promise<Function>} Koa middleware that validates asset access.
	 *
	 * @description
	 * Builds ABAC middleware for asset-level checks.
	 */
	async _abac() {
		/**
		 * @category REST API Server/Domains/Users
		 * @subcategory Base Classes
		 *
		 * @memberof UserBaseSurface
		 * @async
		 * @inner
		 * @private
		 * @function
		 * @name assetAccessCheckerMiddleware
		 *
		 * @param {object} ctxt - Koa request context.
		 * @param {Function} next - Next Koa middleware.
		 *
		 * @returns {Promise<void>} Resolves after downstream middleware completes.
		 *
		 * @description
		 * Placeholder ABAC middleware for user-owned resources.
		 */
		const assetAccessCheckerMiddleware =
			async function assetAccessCheckerMiddleware(ctxt, next) {
				await next();
			};

		return assetAccessCheckerMiddleware.bind(this);
	}
}
