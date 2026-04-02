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
	const sessionCacheMap = new Map();
	sessionCacheMap?.set('user', userSessionCache);
	sessionCacheMap?.set('system_admin', systemAdminSessionCache);

	passportInstance?.serializeUser?.(async (request, user, callback) => {
		callback?.(undefined, user?.id);
	});

	passportInstance?.deserializeUser?.(
		async (request, sessionUser, callback) => {
			try {
				const sessionUserId =
					sessionUser?.id ??
					sessionUser?.profile?.data?.id ??
					sessionUser?.profile?.data?.[0]?.id;

				const sessionCacheMethod = sessionCacheMap?.get(
					sessionUser?.role
				);

				if (!sessionCacheMethod) {
					const userError = new Error(
						'EVASERVER::AUTH_REPOSITORY::UNSUPPORTED_USER_ROLE'
					);
					userError.code =
						'EVASERVER::AUTH_REPOSITORY::UNSUPPORTED_USER_ROLE';

					throw userError;
				}

				const deserializedUser = await sessionCacheMethod(
					sessionUserId,
					cacheRepository,
					databaseRepository
				);

				callback?.(undefined, deserializedUser);
			} catch (error) {
				callback?.(error);
			}
		}
	);
}
