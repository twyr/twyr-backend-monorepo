/* eslint-disable no-useless-assignment */
import safeJsonStringify from 'safe-json-stringify';

const SESSION_CACHE_TIMEOUT_DEVELOPMENT = 3_600;
const SESSION_CACHE_TIMEOUT_PRODUCTION = 86_400;

const getSystemAdminDetails = async function getSystemAdminDetails(
	userId,
	cacheRepository,
	databaseRepository
) {
	// Step 1: Return the cached session snapshot when it is available.
	const userRole = 'system_admin';
	const cacheKey = `twyr!entity!value!aggregate!${userRole}!${userId}!basics`;

	let cachedUser = await cacheRepository.get(cacheKey);
	if (cachedUser) {
		return JSON.parse(cachedUser);
	}

	// Step 2: Load the active account from the database on a cache miss.
	cachedUser = await databaseRepository.raw(
		`SELECT * FROM system_admins WHERE id = ? AND is_deleted = false`,
		[userId]
	);

	if (!cachedUser.rows.length) {
		const userError = new Error(
			'EVASERVER::AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB'
		);
		userError.status = 404;
		userError.code = 'EVASERVER::AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB';
		throw userError;
	}

	cachedUser = cachedUser.rows[0];
	cachedUser.role = userRole;

	// Step 3: Resolve the primary profile locale.
	let primaryLocale = undefined;
	const localeDetails = await databaseRepository.raw(
		`SELECT locale_id FROM system_admin_locales WHERE system_admin_id = ? AND is_primary = true`,
		[userId]
	);
	primaryLocale = localeDetails.rows.shift()?.locale_id;

	// Step 4: Load an available name record for the profile locale.
	let localizedName = undefined;
	if (primaryLocale) {
		localizedName = await databaseRepository.raw(
			`SELECT
				first_name,
				middle_names,
				last_name,
				nickname
			FROM
				system_admin_names_by_locale
			WHERE
				system_admin_id = ? AND
				locale_id = ?
			LIMIT 1`,
			[userId, primaryLocale]
		);
	} else {
		localizedName = await databaseRepository.raw(
			`SELECT
				first_name,
				middle_names,
				last_name,
				nickname
			FROM
				system_admin_names_by_locale
			WHERE
				system_admin_id = ?
			LIMIT 1`,
			[userId]
		);
	}

	const localizedNameRow = localizedName.rows[0] ?? {};
	cachedUser['first_name'] = localizedNameRow.first_name;
	cachedUser['middle_names'] = localizedNameRow.middle_names;
	cachedUser['last_name'] = localizedNameRow.last_name;
	cachedUser['nickname'] = localizedNameRow.nickname;

	// Step 5: Add localized gender, contact, and locale details to the session snapshot.
	let genderDetails = undefined;
	if (primaryLocale) {
		genderDetails = await databaseRepository.raw(
			`SELECT gender_id as id, display_name, description FROM gender_by_locale WHERE gender_id = ? AND locale_id = ?`,
			[cachedUser.gender_id, primaryLocale]
		);
	} else {
		genderDetails = await databaseRepository.raw(
			`SELECT gender_id as id, display_name, description FROM gender_by_locale WHERE gender_id = ? LIMIT 1`,
			[cachedUser.gender_id]
		);
	}
	cachedUser['gender'] = genderDetails.rows[0];

	const contactDetails = await databaseRepository.raw(
		`SELECT A.id, B.name as type, A.contact AS contact, A.verified AS verified, A.is_primary FROM system_admin_contacts A INNER JOIN contact_type_master B ON (A.contact_type_id = B.id) WHERE A.system_admin_id = ?`,
		[userId]
	);
	cachedUser['contacts'] = contactDetails.rows;
	cachedUser['primary_contact'] = contactDetails.rows.filter(
		(row) => row.is_primary
	)[0]?.['id'];

	let localizedLocaleDetails = { rows: [] };
	if (primaryLocale) {
		localizedLocaleDetails = await databaseRepository.raw(
			`SELECT
				A.locale_id AS locale_code,
				A.is_primary,
				B.language_name
			FROM
				system_admin_locales A
			LEFT JOIN
				locale_by_locale B
			ON
				A.locale_id = B.locale_code
			WHERE
				A.system_admin_id = ? AND
				B.locale_id = ?`,
			[userId, primaryLocale]
		);
	} else {
		localizedLocaleDetails = await databaseRepository.raw(
			`SELECT
				A.locale_id AS locale_code,
				A.is_primary,
				B.language_name
			FROM
				system_admin_locales A
			LEFT JOIN
				locale_by_locale B
			ON
				A.locale_id = B.locale_code
			 WHERE
				A.system_admin_id = ?`,
			[userId]
		);
	}
	cachedUser['locales'] = localizedLocaleDetails.rows ?? [];
	cachedUser['primary_locale'] = primaryLocale;

	// Step 6: Cache the assembled snapshot with the environment-specific expiry.
	const cacheMulti = await cacheRepository.multi();
	cacheMulti.set(
		`twyr!entity!value!aggregate!${userRole}!${userId}!basics`,
		safeJsonStringify(cachedUser)
	);
	cacheMulti.expire(
		`twyr!entity!value!aggregate!${userRole}!${userId}!basics`,
		global.serverEnvironment === 'development'
			? SESSION_CACHE_TIMEOUT_DEVELOPMENT
			: SESSION_CACHE_TIMEOUT_PRODUCTION
	);
	await cacheMulti.exec();

	return cachedUser;
};

/**
 * Restores the system admin session snapshot from cache or the database.
 *
 * @param userId
 * @param cacheRepository
 * @param databaseRepository
 * @returns {Promise<object>} The restored system admin session snapshot.
 */
export default async function systemAdminSessionCache(
	userId,
	cacheRepository,
	databaseRepository
) {
	return getSystemAdminDetails(userId, cacheRepository, databaseRepository);
}
