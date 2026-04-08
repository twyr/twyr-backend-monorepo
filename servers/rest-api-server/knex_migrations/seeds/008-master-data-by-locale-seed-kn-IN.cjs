/* eslint-disable security/detect-object-injection */
'use strict';

const insertContactTypeMasterData = async function insertContactTypeMasterData(
	knex
) {
	const localeId = 'kn-IN'; // Default locale for English display names

	// Step 0: If the data is already in there for this locale, skip...
	const artifactCount = await knex?.raw?.(
		`SELECT count(contact_type_id) AS masterdata_count FROM contact_type_by_locale WHERE locale_id = ?`,
		[localeId]
	);
	if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

	const now = knex.fn.now();

	// Step 1: Insert base contact type names into contact_type_master
	const contactTypes = [
		{
			name: 'email',
			display_name: 'ಇಮೇಲ್',
			description: 'ಬಳಕೆದಾರರ ಇಮೇಲ್ ವಿಳಾಸ'
		},
		{
			name: 'landline',
			display_name: 'ಲ್ಯಾಂಡ್‌ಲೈನ್ / ಸ್ಥಿರ ದೂರವಾಣಿ',
			description: `ಬಳಕೆದಾರರ ಲ್ಯಾಂಡ್‌ಲೈನ್ ಸಂಖ್ಯೆ`
		},
		{
			name: 'mobile',
			display_name: 'ಮೊಬೈಲ್',
			description: `ಬಳಕೆದಾರರ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ`
		},
		{
			name: 'fax',
			display_name: 'ಫ್ಯಾಕ್ಸ್',
			description: `ಬಳಕೆದಾರರ ಫ್ಯಾಕ್ಸ್ ಸಂಖ್ಯೆ`
		},
		{
			name: 'social',
			display_name: 'ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ',
			description: `ಬಳಕೆದಾರರ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಪ್ರೊಫೈಲ್ ಹ್ಯಾಂಡಲ್`
		}
	];

	// Insert base contact type names and get back generated IDs
	const baseContactTypes = await knex?.raw?.(
		`SELECT id, name FROM contact_type_master WHERE name = ANY (?)`,
		[contactTypes.map((ct) => ct.name)]
	);
	const contactTypeIdByName = new Map(
		baseContactTypes?.rows?.map((ct) => [ct.name, ct.id])
	);

	// Step 2: Insert localized contact type display names into contact_type_by_locale
	const localizedContactTypes = contactTypes.map((ct) => ({
		contact_type_id: contactTypeIdByName.get(ct.name),
		locale_id: localeId,
		display_name: ct.display_name,
		description: ct.description,
		created_at: now,
		updated_at: now
	}));

	await knex('contact_type_by_locale').insert(localizedContactTypes);
};

const insertGenderMasterData = async function insertGenderMasterData(knex) {
	const localeId = 'kn-IN'; // Default locale for English display names

	// Step 0: If the data is already in there for this locale, skip...
	const artifactCount = await knex?.raw?.(
		`SELECT count(gender_id) AS masterdata_count FROM gender_by_locale WHERE locale_id = ?`,
		[localeId]
	);
	if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

	const now = knex.fn.now();

	// Step 1: Insert base gender names into gender_master
	const genders = [
		{ name: 'male', display_name: 'ಪುರುಷ', description: 'ಪುರುಷ' },
		{
			name: 'female',
			display_name: 'ಮಹಿಳೆ',
			description: 'ಮಹಿಳೆ'
		},
		{ name: 'other', display_name: 'ಇತರೆ', description: 'ಇತರೆ' }
	];

	const baseGenders = await knex?.raw?.(
		`SELECT id, name FROM gender_master WHERE name = ANY (?)`,
		[genders.map((g) => g.name)]
	);
	const genderIdByName = new Map(
		baseGenders?.rows?.map((g) => [g.name, g.id])
	);

	// Step 2: Insert localized gender display names into gender_by_locale
	const localizedGenders = genders.map((g) => ({
		gender_id: genderIdByName.get(g.name),
		locale_id: localeId,
		display_name: g.display_name,
		description: g.description,
		created_at: now,
		updated_at: now
	}));

	await knex('gender_by_locale').insert(localizedGenders);
};

const insertSystemMessageMasterData =
	async function insertSystemMessageMasterData(knex) {
		const localeId = 'kn-IN'; // Default locale for English messages

		// Step 0: If the data is already in there for this locale, skip...
		const artifactCount = await knex?.raw?.(
			`SELECT count(message_id) AS masterdata_count FROM system_message_by_locale WHERE locale_id = ?`,
			[localeId]
		);
		if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

		const now = knex.fn.now();

		// Define system messages with their message codes
		const messages = [
			// Server-level errors
			{
				message_id: 'UNKNOWN_ERROR',
				message_text:
					'ಸಿಸ್ಟಮ್ ದೋಷ. ಇದನ್ನು ಸರಿಪಡಿಸಲು ನಾವು ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದೇವೆ. ಅಸೌಕರ್ಯಕ್ಕೆ ಕ್ಷಮಿಸಿ.'
			},
			{
				message_id: 'AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB',
				message_text: 'ಸಿಸ್ಟಮ್‌ನಲ್ಲಿ ಬಳಕೆದಾರರನ್ನು ಕಂಡುಹಿಡಿಯಲಾಗಲಿಲ್ಲ.'
			},
			{
				message_id: 'AUTH_REPOSITORY::UNSUPPORTED_USER_ROLE',
				message_text: 'ಬೆಂಬಲಿಸದ ಬಳಕೆದಾರ ಪಾತ್ರ.'
			},
			{
				message_id: 'AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID',
				message_text: 'OTP ಅವಧಿ ಮುಗಿದಿದೆ ಅಥವಾ ಅಮಾನ್ಯವಾಗಿದೆ.'
			},
			{
				message_id: 'I18N_REPOSITORY::TRANSLATION_ERROR',
				message_text:
					'ಅನುವಾದ ದೋಷ. ಈ ಭಾಷೆಗೆ ಬೆಂಬಲವಿಲ್ಲ. ಉಂಟಾದ ಅಸೌಕರ್ಯಕ್ಕೆ ಕ್ಷಮೆ.'
			},
			// Server-level validation error messages
			{
				message_id: 'INPUT_VALIDATION_ERROR',
				message_text:
					'ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್. ದಯವಿಟ್ಟು ಸಲ್ಲಿಸಿದ ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_REQUIRED',
				message_text: 'ಅಗತ್ಯವಿದೆ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_INVALID',
				message_text: 'ಅಮಾನ್ಯವಾಗಿದೆ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ONLY',
				message_text: 'ಅನುಮತಿಸಲಾದ ಮೌಲ್ಯಗಳಲ್ಲಿ ಒಂದಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ALLOW_ONLY',
				message_text: 'ಅನುಮತಿಸಲಾದ ಮೌಲ್ಯಗಳಲ್ಲಿ ಒಂದಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_UNKNOWN',
				message_text: 'ಅಜ್ಞಾತ ಮೌಲ್ಯವನ್ನು ಒಳಗೊಂಡಿದೆ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_CUSTOM',
				message_text: 'ಕಸ್ಟಮ್ ಮೌಲ್ಯೀಕರಣ ವಿಫಲವಾಗಿದೆ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_MATCH',
				message_text:
					'ಅನುಮತಿಸಲಾದ ಯಾವುದೇ ಪ್ರಕಾರಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_TYPES',
				message_text: 'ಅನುಮತಿಸಲಾದ ಪ್ರಕಾರಗಳಲ್ಲಿ ಒಂದಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ANY',
				message_text: 'ಯಾವುದೇ ಪರ್ಯಾಯ ಸ್ಕೀಮಾವನ್ನು ಹೊಂದಿಸಲು ವಿಫಲವಾಗಿದೆ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ALL',
				message_text: 'ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ಪರ್ಯಾಯಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ONE',
				message_text:
					'ಅನುಮತಿಸಲಾದ ಪರ್ಯಾಯಗಳಲ್ಲಿ ಒಂದಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE',
				message_text: 'ಸ್ಟ್ರಿಂಗ್ ಆಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMPTY',
				message_text: 'ಖಾಲಿ ಇರುವಂತಿಲ್ಲ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MIN',
				message_text: 'ಕನಿಷ್ಠ {{customInfo.limit}} ಅಕ್ಷರಗಳ ಉದ್ದವಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MAX',
				message_text:
					'ಹೆಚ್ಚೆಂದರೆ {{customInfo.limit}} ಅಕ್ಷರಗಳಷ್ಟು ಉದ್ದವಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LENGTH',
				message_text:
					'ನಿಖರವಾಗಿ {{customInfo.limit}} ಅಕ್ಷರಗಳಷ್ಟು ಉದ್ದವಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_ALPHANUM',
				message_text: 'ಅಕ್ಷರಗಳು ಮತ್ತು ಸಂಖ್ಯೆಗಳನ್ನು ಮಾತ್ರ ಹೊಂದಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMAIL',
				message_text: 'ಮಾನ್ಯವಾದ ಇಮೇಲ್ ವಿಳಾಸವಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_PATTERN_BASE',
				message_text: 'ಅಮಾನ್ಯ ಸ್ವರೂಪದಲ್ಲಿದೆ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_GUID',
				message_text: 'ಮಾನ್ಯವಾದ GUID/UUID ಆಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HEX',
				message_text: 'ಮಾನ್ಯವಾದ ಹೆಕ್ಸಾಡೆಸಿಮಲ್ ಸ್ಟ್ರಿಂಗ್ ಆಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE64',
				message_text:
					'ಮಾನ್ಯವಾದ ಬೇಸ್64-ಎನ್‌ಕೋಡ್ ಮಾಡಿದ ಸ್ಟ್ರಿಂಗ್ ಆಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_URI',
				message_text: 'ಮಾನ್ಯವಾದ URL ಆಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HOSTNAME',
				message_text: 'ಮಾನ್ಯವಾದ ಹೋಸ್ಟ್ ಹೆಸರಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_DOMAIN',
				message_text: 'ಮಾನ್ಯವಾದ ಡೊಮೇನ್ ಹೆಸರಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_IP',
				message_text: 'ಮಾನ್ಯವಾದ IP ವಿಳಾಸವಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LOWERCASE',
				message_text: 'ಚಿಕ್ಕ ಅಕ್ಷರದಲ್ಲಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_UPPERCASE',
				message_text: 'ದೊಡ್ಡಕ್ಷರದಲ್ಲಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_TRIM',
				message_text: 'ಪ್ರಮುಖ ಅಥವಾ ಹಿಂದುಳಿದ ಸ್ಥಳಗಳನ್ನು ಹೊಂದಿರಬಾರದು.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_BASE',
				message_text: 'ಒಂದು ಸಂಖ್ಯೆಯಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_INTEGER',
				message_text: 'ಪೂರ್ಣಾಂಕವಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MIN',
				message_text:
					'{{customInfo.limit}} ಗಿಂತ ಹೆಚ್ಚು ಅಥವಾ ಸಮನಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MAX',
				message_text:
					'{{customInfo.limit}} ಗಿಂತ ಕಡಿಮೆ ಅಥವಾ ಸಮನಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_GREATER',
				message_text: '{{customInfo.limit}} ಗಿಂತ ಹೆಚ್ಚಿನದಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_LESS',
				message_text: '{{customInfo.limit}} ಗಿಂತ ಕಡಿಮೆ ಇರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_POSITIVE',
				message_text: 'ಧನಾತ್ಮಕ ಸಂಖ್ಯೆಯಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_NEGATIVE',
				message_text: 'ಋಣಾತ್ಮಕ ಸಂಖ್ಯೆಯಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MULTIPLE',
				message_text: '{{customInfo.multiple}} ನ ಬಹುಸಂಖ್ಯೆಯಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_PRECISION',
				message_text:
					'{{customInfo.limit}} ದಶಮಾಂಶ ಸ್ಥಾನಗಳಿಗಿಂತ ಹೆಚ್ಚಿನದನ್ನು ಹೊಂದಿರಬಾರದು.'
			},
			{
				message_id: 'VALIDATION_ERROR::BOOLEAN_BASE',
				message_text: 'ಬೂಲಿಯನ್ ಆಗಿರಬೇಕು (ನಿಜ/ಸುಳ್ಳು).'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_BASE',
				message_text: 'ಮಾನ್ಯವಾದ ದಿನಾಂಕವಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_ISO',
				message_text: 'ISO ದಿನಾಂಕ ಸ್ವರೂಪದಲ್ಲಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MIN',
				message_text: '{{customInfo.limit}} ನಲ್ಲಿ ಅಥವಾ ನಂತರ ಇರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MAX',
				message_text: '{{customInfo.limit}} ನಲ್ಲಿ ಅಥವಾ ಮೊದಲು ಇರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_GREATER',
				message_text: '{{customInfo.limit}} ನಂತರ ಇರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_LESS',
				message_text: '{{customInfo.limit}} ಮೊದಲು ಇರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_BASE',
				message_text: 'ಒಂದು ಶ್ರೇಣಿಯಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MIN',
				message_text:
					'ಕನಿಷ್ಠ {{customInfo.limit}} ಐಟಂಗಳನ್ನು ಹೊಂದಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MAX',
				message_text:
					'ಹೆಚ್ಚೆಂದರೆ {{customInfo.limit}} ಐಟಂಗಳನ್ನು ಹೊಂದಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_LENGTH',
				message_text:
					'ನಿಖರವಾಗಿ {{customInfo.limit}} ಐಟಂಗಳನ್ನು ಹೊಂದಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_UNIQUE',
				message_text: 'ನಕಲಿ ವಸ್ತುಗಳನ್ನು ಹೊಂದಿರಬಾರದು.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_INCLUDES',
				message_text: 'ಅಮಾನ್ಯವಾದ ಐಟಂ ಅನ್ನು ಒಳಗೊಂಡಿದೆ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_HAS',
				message_text: 'ಅಗತ್ಯವಿರುವ ಕನಿಷ್ಠ ಒಂದು ಐಟಂ ಅನ್ನು ಹೊಂದಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_BASE',
				message_text: 'ವಸ್ತುವಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_UNKNOWN',
				message_text: 'ಅಜ್ಞಾತ ಕ್ಷೇತ್ರವನ್ನು {{customInfo.key}} ಹೊಂದಿದೆ.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MIN',
				message_text: 'ಕನಿಷ್ಠ {{customInfo.limit}} ಕೀಗಳನ್ನು ಹೊಂದಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MAX',
				message_text:
					'ಹೆಚ್ಚೆಂದರೆ {{customInfo.limit}} ಕೀಗಳನ್ನು ಹೊಂದಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_LENGTH',
				message_text:
					'ನಿಖರವಾಗಿ {{customInfo.limit}} ಕೀಗಳನ್ನು ಹೊಂದಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_AND',
				message_text:
					'ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಒಟ್ಟಿಗೆ ಒಳಗೊಂಡಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OR',
				message_text:
					'ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಕನಿಷ್ಠ ಒಂದನ್ನಾದರೂ ಹೊಂದಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_XOR',
				message_text:
					'ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಒಂದನ್ನು ಮಾತ್ರ ಒಳಗೊಂಡಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OXOR',
				message_text:
					'ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಒಳಗೊಂಡಿರಬಾರದು.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITH',
				message_text: 'ಅಗತ್ಯವಿರುವ ಒಡನಾಡಿ ಕ್ಷೇತ್ರವನ್ನು ಕಾಣೆಯಾಗಿದೆ.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITHOUT',
				message_text: 'ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಕ್ಷೇತ್ರದೊಂದಿಗೆ ಇರಬಾರದು.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_BASE',
				message_text: 'ಬೈನರಿ ಡೇಟಾ ಇರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MIN',
				message_text: 'ಕನಿಷ್ಠ {{customInfo.limit}} ಬೈಟ್‌ಗಳಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MAX',
				message_text: 'ಹೆಚ್ಚೆಂದರೆ {{customInfo.limit}} ಬೈಟ್‌ಗಳು ಇರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_LENGTH',
				message_text: 'ನಿಖರವಾಗಿ {{customInfo.limit}} ಬೈಟ್‌ಗಳಾಗಿರಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_BASE',
				message_text: 'ಒಂದು ಕಾರ್ಯವಾಗಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_ARITY',
				message_text:
					'ನಿಖರವಾಗಿ {{customInfo.n}} ವಾದಗಳನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಬೇಕು.'
			},
			{
				message_id: 'VALIDATION_ERROR::LINK_REF',
				message_text: 'ಅಮಾನ್ಯವಾದ ಉಲ್ಲೇಖವನ್ನು ಒಳಗೊಂಡಿದೆ.'
			},
			// Users domain, Session Manager context messages
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_SMS',
				message_text:
					'Twyr ಗಾಗಿ ನಿಮ್ಮ OTP {{otp}}. ಇದು {{expiryTime}} ವರೆಗೆ ಮಾನ್ಯವಾಗಿದೆ.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text: 'ನಿಮ್ಮ ನೋಂದಾಯಿತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ OTP ಕಳುಹಿಸಲಾಗಿದೆ.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'ಲಾಗ್ ಔಟ್ ಮಾಡಿದ ರೋಗಿ: {{userName}}.'
			},
			// Users domain, Session Manager context errors
			{
				message_id: 'USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'ಈಗಾಗಲೇ ಸಕ್ರಿಯ ಸೆಷನ್ ಇದೆ.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'ಯಾವುದೇ ಸಕ್ರಿಯ ಸೆಷನ್ ಇಲ್ಲ.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'ಅನುಮತಿ ನಿರಾಕರಿಸಲಾಗಿದೆ. ಸಮಸ್ಯೆ ಪರಿಹಾರಕ್ಕೆ ಸಹಾಯ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'"username" ದೇಶದ ಕೋಡ್‌ನೊಂದಿಗೆ ಮಾನ್ಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಆಗಿರಬೇಕು, ಉದಾಹರಣೆಗೆ +911234567890'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'"username" ಮಾನ್ಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಆಗಿರಬೇಕು ಮತ್ತು "password" ಮಾನ್ಯ 4-ಅಂಕಿ ಓಟಿಪಿ ಆಗಿರಬೇಕು'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'"username" ಮಾನ್ಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಆಗಿರಬೇಕು ಮತ್ತು "password" ಮಾನ್ಯ 4-ಅಂಕಿ ಓಟಿಪಿ ಆಗಿರಬೇಕು'
			},
			// Users domain, Profile context errors
			{
				message_id: 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.first_name}} {{user.last_name}} ಅವರಿಗೆ ಈ ಕಾರ್ಯಾಚರಣೆಯನ್ನು ಮಾಡಲು ಅನುಮತಿ ಇಲ್ಲ.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.first_name}} {{body.last_name}} ಗಾಗಿ ಪ್ರೊಫೈಲ್ ರಚಿಸಲಾಗುವುದಿಲ್ಲ. OTP ಹೊಂದಿಕೆಯಾಗಿಲ್ಲ.'
			},
			{
				message_id: 'USERS::PROFILE::MOBILE_NO_MISMATCH',
				message_text:
					'{{body.first_name}} {{body.last_name}} ಗಾಗಿ ಪ್ರೊಫೈಲ್ ರಚಿಸಲಾಗುವುದಿಲ್ಲ. ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗಳು ಹೊಂದಿಕೆಯಾಗಿಲ್ಲ.'
			},
			{
				message_id: 'USERS::PROFILE::MINOR_USER',
				message_text:
					'{{body.first_name}} {{body.last_name}} ಗಾಗಿ ಪ್ರೊಫೈಲ್ ರಚಿಸಲಾಗುವುದಿಲ್ಲ. ಬಳಕೆದಾರರು ಅಪ್ರಾಪ್ತ ವಯಸ್ಕರು.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಪ್ರೊಫೈಲ್ ರಚನಾ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಫೀಲ್ಡ್‌ಗಳು ಅಮಾನ್ಯವಾಗಿವೆ. ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗೆ ದಯವಿಟ್ಟು ವಿವರಗಳನ್ನು ನೋಡಿ.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಪ್ರೊಫೈಲ್ ನವೀಕರಣ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಫೀಲ್ಡ್‌ಗಳು ಅಮಾನ್ಯವಾಗಿವೆ. ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗೆ ದಯವಿಟ್ಟು ವಿವರಗಳನ್ನು ನೋಡಿ.'
			},
			// locale-specific validation errors for new surfaces
			{
				message_id: 'USERS::ADDRESS::INVALID_CREATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ವಿಳಾಸ ರಚನಾ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::ADDRESS::INVALID_UPDATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ವಿಳಾಸ ನವೀಕರಣ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಸಂಪರ್ಕ ರಚನಾ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಸಂಪರ್ಕ ನವೀಕರಣ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಪ್ರದೇಶ ರಚನಾ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಪ್ರದೇಶ ನವೀಕರಣ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_CREATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಪಾಲಕ ಸಂಬಂಧ ರಚನಾ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_UPDATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಪಾಲಕ ಸಂಬಂಧ ನವೀಕರಣ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			}
		];

		const baseMessages = await knex?.raw?.(
			`SELECT id FROM system_message_master WHERE id = ANY (?)`,
			[messages.map((m) => m.message_id)]
		);
		const messageIdByCode = new Map(
			baseMessages?.rows?.map((m) => [m.id, m.id])
		);

		// Step 2: Insert localized message text into system_message_by_locale
		const localizedMessages = messages.map((m) => ({
			message_id: messageIdByCode.get(m.message_id),
			locale_id: localeId,
			message_text: m.message_text,
			created_at: now,
			updated_at: now
		}));

		await knex('system_message_by_locale').insert(localizedMessages);
	};

exports.seed = async function (knex) {
	console.log('Processing 008-master-data-by-locale-seed-kn-IN.cjs');
	// Step 1: Insert master data into contact types master
	await insertContactTypeMasterData(knex);

	// Step 2: Insert master data into genders master
	await insertGenderMasterData(knex);

	// Step 3: Insert master data into the system message master
	await insertSystemMessageMasterData(knex);
};
