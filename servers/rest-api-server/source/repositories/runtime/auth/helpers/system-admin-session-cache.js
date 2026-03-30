const SESSION_CACHE_TIMEOUT_DEVELOPMENT = 3_600;
const SESSION_CACHE_TIMEOUT_PRODUCTION = 86_400;

const getSystemAdminDetails = async function getSystemAdminDetails(
	userId,
	cacheRepository,
	databaseRepository
) {
	const userRole = 'system_admin';
	const cacheKey = `twyr!entity!value!aggregate!${userRole}!${userId}!basics`;

	let cachedUser = await cacheRepository?.get?.(cacheKey);
	if (cachedUser) {
		return JSON?.parse?.(cachedUser);
	}

	cachedUser = await databaseRepository?.raw?.(
		`SELECT * FROM system_admins WHERE id = ? AND is_deleted = false`,
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
		 FROM system_admin_contacts A
		 INNER JOIN contact_type_master B ON (A.contact_type_id = B.id)
		 WHERE A.user_id = ?`,
		[userId]
	);
	cachedUser.contacts = contactDetails?.rows ?? [];
	cachedUser.primary_contact =
		cachedUser?.contacts?.find?.((row) => row?.is_primary) ?? null;

	const localeDetails = await databaseRepository?.raw?.(
		`SELECT A.id, A.locale_code, A.is_primary, B.language_name
		 FROM system_admin_locales A
		 INNER JOIN locale_master B ON (A.locale_code = B.code)
		 WHERE A.user_id = ?`,
		[userId]
	);
	cachedUser.locales = localeDetails?.rows ?? [];
	cachedUser.primary_locale =
		cachedUser?.locales?.find?.((row) => row?.is_primary)?.locale_code ??
		null;

	const localizedName = await databaseRepository?.raw?.(
		`SELECT first_name, middle_names, last_name, nickname
		 FROM system_admin_names_by_locale
		 WHERE user_id = ?
		 AND locale_code = COALESCE(
		 	(SELECT locale_code FROM system_admin_locales WHERE user_id = ? AND is_primary = true LIMIT 1),
		 	'en-IN'
		 )
		 LIMIT 1`,
		[userId, userId]
	);
	const nameRecord = localizedName?.rows?.[0] ?? null;
	if (nameRecord) {
		cachedUser.first_name = nameRecord?.first_name ?? null;
		cachedUser.middle_names = nameRecord?.middle_names ?? null;
		cachedUser.last_name = nameRecord?.last_name ?? null;
		cachedUser.nickname = nameRecord?.nickname ?? null;
	}

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

/**
 *
 * @param userId
 * @param cacheRepository
 * @param databaseRepository
 */
export default async function systemAdminSessionCache(
	userId,
	cacheRepository,
	databaseRepository
) {
	return getSystemAdminDetails(userId, cacheRepository, databaseRepository);
}
