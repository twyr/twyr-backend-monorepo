/**
 * HTTP Error constants
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Auth/Strategies
 *
 * @ignore
 */
const HTTP_ERROR_UNAUTHORIZED = 401;
const HTTP_ERROR_NOT_FOUND = 404;

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Auth/Strategies
 *
 * @async
 * @function
 * @name localStrategy
 *
 * @param {object} [passportInstance] - Instance of koa-passport
 * @param {object} [cacheRepository] - Instance of cache repository
 * @param {object} [databaseRepository] - Instance of sql_database repository
 *
 * @returns {null} - Nothing
 *
 * @description
 * Sets up local authentication strategy for users.
 */
export default async function localStrategy(
	passportInstance,
	cacheRepository,
	databaseRepository
) {
	let LocalStrategy = await import('passport-local');
	LocalStrategy = LocalStrategy?.Strategy;

	passportInstance?.use?.(
		'user-local',
		new LocalStrategy(
			{ passReqToCallback: true },
			async (request, username, password, callback) => {
				try {
					let userRecord = await databaseRepository?.raw?.(
						`SELECT * FROM users WHERE mobile_no = ?`,
						[username]
					);
					userRecord = userRecord?.rows?.[0];

					if (!userRecord) {
						const userError = new Error(
							'EVASERVER::AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB'
						);
						userError.status = HTTP_ERROR_NOT_FOUND;
						userError.code =
							'EVASERVER::AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB';

						throw userError;
					}

					const otpNumber = await cacheRepository?.get?.(
						`user-otp-${username}`
					);

					if (!otpNumber) {
						const userError = new Error(
							'EVASERVER::AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID'
						);
						userError.status = HTTP_ERROR_UNAUTHORIZED;
						userError.code =
							'EVASERVER::AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID';

						throw userError;
					}

					if (otpNumber !== password) {
						const userError = new Error(
							'EVASERVER::AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID'
						);
						userError.status = HTTP_ERROR_UNAUTHORIZED;
						userError.code =
							'EVASERVER::AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID';

						throw userError;
					}

					callback?.(undefined, userRecord);
				} catch (error) {
					callback?.(error);
				}
			}
		)
	);
}
