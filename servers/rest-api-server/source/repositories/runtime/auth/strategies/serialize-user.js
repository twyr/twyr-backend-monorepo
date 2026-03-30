import systemAdminSessionCache from '../helpers/system-admin-session-cache.js';
import userSessionCache from '../helpers/user-session-cache.js';

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Auth/Strategies
 *
 * @async
 * @function
 * @name serializeDeserialize
 *
 * @param {object} [passportInstance] - Instance of koa-passport
 * @param {object} [cacheRepository] - Instance of cache repository
 * @param {object} [databaseRepository] - Instance of sql_database repository
 *
 * @returns {null} - Nothing
 *
 * @description
 * Sets up user serialization / deserialization for koa-passport.
 */
export default async function serializeDeserialize(
	passportInstance,
	cacheRepository,
	databaseRepository
) {
	passportInstance?.serializeUser?.(async (request, user, callback) => {
		callback?.(undefined, user?.id);
	});

	passportInstance?.deserializeUser?.(
		async (request, sessionUser, callback) => {
			try {
				let deserializedUser = undefined;

				if (sessionUser?.role === 'user') {
					deserializedUser = await userSessionCache(
						sessionUser?.id,
						cacheRepository,
						databaseRepository
					);
				} else if (sessionUser?.role === 'system_admin') {
					deserializedUser = await systemAdminSessionCache(
						sessionUser?.id,
						cacheRepository,
						databaseRepository
					);
				} else {
					const userError = new Error(
						'EVASERVER::AUTH_REPOSITORY::UNSUPPORTED_USER_ROLE'
					);
					userError.code =
						'EVASERVER::AUTH_REPOSITORY::UNSUPPORTED_USER_ROLE';

					throw userError;
				}

				callback?.(undefined, deserializedUser);
			} catch (error) {
				callback?.(error);
			}
		}
	);
}
