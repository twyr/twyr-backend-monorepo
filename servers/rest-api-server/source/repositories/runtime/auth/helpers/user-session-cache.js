const SESSION_CACHE_TIMEOUT_DEVELOPMENT = 3_600;
const SESSION_CACHE_TIMEOUT_PRODUCTION = 86_400;

const getUserDetails = async function getUserDetails(
	userId,
	cacheRepository,
	databaseRepository
) {
	const userRole = 'user';
	const cacheKey = `twyr!entity!value!aggregate!${userRole}!${userId}!basics`;

	let cachedUser = await cacheRepository?.get?.(cacheKey);
	if (cachedUser) {
		return JSON?.parse?.(cachedUser);
	}

	cachedUser = await databaseRepository?.raw?.(
		`SELECT * FROM users WHERE id = ? AND is_deleted = false`,
		[userId]
	);

	if (!cachedUser?.rows?.length) {
		const userError = new Error(
			'EVASERVER::AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB'
		);
		userError.code = 'EVASERVER::AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB';
		throw userError;
	}

	cachedUser = cachedUser?.rows?.[0];
	cachedUser.role = userRole;

	const contactDetails = await databaseRepository?.raw?.(
		`SELECT A.id, B.name AS type, A.contact, A.verified, A.is_primary
		 FROM user_contacts A
		 INNER JOIN contact_type_master B ON (A.contact_type_id = B.id)
		 WHERE A.user_id = ?`,
		[userId]
	);
	cachedUser.contacts = contactDetails?.rows ?? [];
	cachedUser.primary_contact =
		cachedUser?.contacts?.find?.((row) => row?.is_primary) ?? null;

	const localeDetails = await databaseRepository?.raw?.(
		`SELECT A.id, A.locale_code, A.is_primary, B.language_name
		 FROM user_locales A
		 INNER JOIN locale_master B ON (A.locale_code = B.code)
		 WHERE A.user_id = ?`,
		[userId]
	);
	cachedUser.locales = localeDetails?.rows ?? [];
	cachedUser.primary_locale =
		cachedUser?.locales?.find?.((row) => row?.is_primary)?.locale_code ??
		null;

	const cacheMulti = await cacheRepository?.multi?.();
	cacheMulti?.set?.(cacheKey, JSON?.stringify?.(cachedUser));
	cacheMulti?.expire?.(
		cacheKey,
		global.serverEnvironment === 'development'
			? SESSION_CACHE_TIMEOUT_DEVELOPMENT
			: SESSION_CACHE_TIMEOUT_PRODUCTION
	);
	await cacheMulti?.exec?.();

	return cachedUser;
};

// eslint-disable-next-line jsdoc/require-jsdoc
export default async function userSessionCache(
	userId,
	cacheRepository,
	databaseRepository
) {
	return getUserDetails(userId, cacheRepository, databaseRepository);
}
