/* eslint-disable security/detect-object-injection */
'use strict';

const insertContactTypeMasterData = async function insertContactTypeMasterData(
	knex
) {
	const localeId = 'ta-IN'; // Default locale for English display names

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
			display_name: 'மின்னஞ்சல்',
			description: 'பயனரின் மின்னஞ்சல் முகவரி'
		},
		{
			name: 'landline',
			display_name: 'லேண்ட்லைன் / நிலை தொலைபேசி',
			description: `பயனரின் நிலை தொலைபேசி எண்`
		},
		{
			name: 'mobile',
			display_name: 'மொபைல்',
			description: `பயனரின் மொபைல் எண்`
		},
		{
			name: 'fax',
			display_name: 'ஃபாக்ஸ்',
			description: `பயனரின் ஃபாக்ஸ் எண்`
		},
		{
			name: 'social',
			display_name: 'சமூக ஊடகம்',
			description: `பயனரின் சமூக ஊடக சுயவிவர அடையாளம்`
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
	const localeId = 'ta-IN'; // Default locale for English display names

	// Step 0: If the data is already in there for this locale, skip...
	const artifactCount = await knex?.raw?.(
		`SELECT count(gender_id) AS masterdata_count FROM gender_by_locale WHERE locale_id = ?`,
		[localeId]
	);
	if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

	const now = knex.fn.now();

	// Step 1: Insert base gender names into gender_master
	const genders = [
		{ name: 'male', display_name: 'ஆண்', description: 'ஆண்' },
		{
			name: 'female',
			display_name: 'பெண்',
			description: 'பெண்'
		},
		{ name: 'other', display_name: 'மற்றவை', description: 'மற்றவை' }
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
		const localeId = 'ta-IN'; // Default locale for English messages

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
					'கணினி பிழை. இதை சரிசெய்ய முயற்சித்து வருகிறோம். ஏற்பட்ட 불편த்திற்கு மன்னிக்கவும்.'
			},
			{
				message_id: 'AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB',
				message_text: 'பயனர் கணினியில் காணப்படவில்லை.'
			},
			{
				message_id: 'AUTH_REPOSITORY::UNSUPPORTED_USER_ROLE',
				message_text: 'ஆதரிக்கப்படாத பயனர் பங்கு.'
			},
			{
				message_id: 'AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID',
				message_text: 'OTP காலாவதியானது அல்லது தவறானது.'
			},
			{
				message_id: 'I18N_REPOSITORY::TRANSLATION_ERROR',
				message_text:
					'மொழிபெயர்ப்பு பிழை. இந்த மொழிக்கு ஆதரவு இல்லை. ஏற்பட்ட சிரமத்திற்கு மன்னிக்கவும்.'
			},
			// Server-level validation error messages
			{
				message_id: 'INPUT_VALIDATION_ERROR',
				message_text:
					'தவறான உள்ளீடு. சமர்ப்பித்த தரவைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_REQUIRED',
				message_text: 'தேவை.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_INVALID',
				message_text: 'செல்லாதது.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ONLY',
				message_text:
					'அனுமதிக்கப்பட்ட மதிப்புகளில் ஒன்றாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ALLOW_ONLY',
				message_text:
					'அனுமதிக்கப்பட்ட மதிப்புகளில் ஒன்றாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_UNKNOWN',
				message_text: 'அறியப்படாத மதிப்பைக் கொண்டுள்ளது.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_CUSTOM',
				message_text: 'தனிப்பயன் சரிபார்ப்பு தோல்வியடைந்தது.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_MATCH',
				message_text:
					'அனுமதிக்கப்பட்ட வகைகளில் எதனுடனும் பொருந்தவில்லை.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_TYPES',
				message_text: 'அனுமதிக்கப்பட்ட வகைகளில் ஒன்றாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ANY',
				message_text: 'மாற்றுத் திட்டத்துடன் பொருந்த முடியவில்லை.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ALL',
				message_text: 'தேவையான அனைத்து மாற்றுகளுடன் பொருந்த வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ONE',
				message_text:
					'அனுமதிக்கப்பட்ட மாற்றுகளில் ஒன்றை சரியாகப் பொருத்த வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE',
				message_text: 'ஒரு சரமாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMPTY',
				message_text: 'காலியாக இருக்க முடியாது.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MIN',
				message_text:
					'குறைந்தது {{customInfo.limit}} எழுத்துக்கள் நீளமாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MAX',
				message_text:
					'அதிகபட்சம் {{customInfo.limit}} எழுத்துகள் நீளமாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LENGTH',
				message_text:
					'சரியாக {{customInfo.limit}} எழுத்துக்கள் நீளமாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_ALPHANUM',
				message_text:
					'எழுத்துக்கள் மற்றும் எண்கள் மட்டுமே இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMAIL',
				message_text: 'சரியான மின்னஞ்சல் முகவரியாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_PATTERN_BASE',
				message_text: 'தவறான வடிவத்தில் உள்ளது.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_GUID',
				message_text: 'சரியான GUID/UUID ஆக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HEX',
				message_text:
					'செல்லுபடியாகும் ஹெக்ஸாடெசிமல் சரமாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE64',
				message_text:
					'சரியான அடிப்படை64-குறியீடு செய்யப்பட்ட சரமாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_URI',
				message_text: 'சரியான URL ஆக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HOSTNAME',
				message_text: 'சரியான ஹோஸ்ட்பெயராக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_DOMAIN',
				message_text: 'சரியான டொமைன் பெயராக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_IP',
				message_text: 'சரியான ஐபி முகவரியாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LOWERCASE',
				message_text: 'சிறிய எழுத்தில் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_UPPERCASE',
				message_text: 'பெரிய எழுத்தில் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_TRIM',
				message_text:
					'முன்னணி அல்லது பின்தங்கிய இடங்கள் இருக்கக்கூடாது.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_BASE',
				message_text: 'ஒரு எண்ணாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_INTEGER',
				message_text: 'முழு எண்ணாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MIN',
				message_text:
					'{{customInfo.limit}} ஐ விட அதிகமாகவோ அல்லது சமமாகவோ இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MAX',
				message_text:
					'{{customInfo.limit}} ஐ விட குறைவாகவோ அல்லது சமமாகவோ இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_GREATER',
				message_text:
					'{{customInfo.limit}} ஐ விட அதிகமாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_LESS',
				message_text:
					'{{customInfo.limit}} ஐ விட குறைவாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_POSITIVE',
				message_text: 'நேர்மறை எண்ணாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_NEGATIVE',
				message_text: 'எதிர்மறை எண்ணாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MULTIPLE',
				message_text:
					'{{customInfo.multiple}} இன் பெருக்கமாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_PRECISION',
				message_text:
					'{{customInfo.limit}} தசம இடங்களுக்கு மேல் இருக்கக்கூடாது.'
			},
			{
				message_id: 'VALIDATION_ERROR::BOOLEAN_BASE',
				message_text: 'பூலியனாக இருக்க வேண்டும் (உண்மை/தவறு).'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_BASE',
				message_text: 'சரியான தேதியாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_ISO',
				message_text: 'ISO தேதி வடிவத்தில் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MIN',
				message_text:
					'{{customInfo.limit}} அன்று அல்லது அதற்குப் பிறகு இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MAX',
				message_text:
					'{{customInfo.limit}} அன்று அல்லது அதற்கு முன் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_GREATER',
				message_text:
					'{{customInfo.limit}}க்குப் பிறகு இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_LESS',
				message_text: '{{customInfo.limit}}க்கு முன் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_BASE',
				message_text: 'வரிசையாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MIN',
				message_text:
					'குறைந்தது {{customInfo.limit}} உருப்படிகள் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MAX',
				message_text:
					'அதிகபட்சம் {{customInfo.limit}} உருப்படிகள் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_LENGTH',
				message_text:
					'சரியாக {{customInfo.limit}} உருப்படிகளைக் கொண்டிருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_UNIQUE',
				message_text: 'நகல் பொருட்கள் இருக்கக்கூடாது.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_INCLUDES',
				message_text: 'தவறான பொருளைக் கொண்டுள்ளது.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_HAS',
				message_text:
					'குறைந்தபட்சம் ஒரு தேவையான பொருளைக் கொண்டிருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_BASE',
				message_text: 'ஒரு பொருளாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_UNKNOWN',
				message_text: 'அறியப்படாத புலம் {{customInfo.key}} உள்ளது.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MIN',
				message_text:
					'குறைந்தபட்சம் {{customInfo.limit}} விசைகள் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MAX',
				message_text:
					'அதிகபட்சம் {{customInfo.limit}} விசைகள் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_LENGTH',
				message_text:
					'கண்டிப்பாக {{customInfo.limit}} விசைகள் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_AND',
				message_text:
					'தேவையான அனைத்து புலங்களையும் ஒன்றாகக் கொண்டிருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OR',
				message_text:
					'குறிப்பிடப்பட்ட புலங்களில் குறைந்தபட்சம் ஒன்றைக் கொண்டிருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_XOR',
				message_text:
					'குறிப்பிடப்பட்ட புலங்களில் ஒன்றை மட்டுமே கொண்டிருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OXOR',
				message_text:
					'குறிப்பிடப்பட்ட புலங்களில் ஒன்றுக்கு மேற்பட்டவை இருக்கக்கூடாது.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITH',
				message_text: 'தேவையான துணை புலம் இல்லை.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITHOUT',
				message_text: 'குறிப்பிட்ட புலத்துடன் இருக்கக்கூடாது.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_BASE',
				message_text: 'பைனரி தரவு இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MIN',
				message_text:
					'குறைந்தபட்சம் {{customInfo.limit}} பைட்டுகள் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MAX',
				message_text:
					'அதிகபட்சம் {{customInfo.limit}} பைட்டுகள் இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_LENGTH',
				message_text:
					'சரியாக {{customInfo.limit}} பைட்டுகளாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_BASE',
				message_text: 'ஒரு செயல்பாடாக இருக்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_ARITY',
				message_text: 'சரியாக {{customInfo.n}} வாதங்களை ஏற்க வேண்டும்.'
			},
			{
				message_id: 'VALIDATION_ERROR::LINK_REF',
				message_text: 'தவறான குறிப்பு உள்ளது.'
			},
			// Users domain, Session Manager context messages
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_SMS',
				message_text:
					'Twyr க்கான உங்கள் OTP {{otp}}. இது {{expiryTime}} வரை செல்லுபடியாகும்.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text:
					'உங்கள் பதிவு செய்யப்பட்ட மொபைல் எண்ணிற்கு OTP அனுப்பப்பட்டுள்ளது.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'வெளியேற்றப்பட்ட நோயாளர்: {{userName}}.'
			},
			// Users domain, Session Manager context errors
			{
				message_id: 'USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'ஏற்கனவே செயலில் உள்ள அமர்வு உள்ளது.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'செயலில் உள்ள அமர்வு இல்லை.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'அனுமதி மறுக்கப்பட்டது. இந்த பிரச்சினையை சரிசெய்ய ஆதரவு குழுவை தொடர்பு கொள்ளவும்.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'"username" நாட்டின் குறியீட்டுடன் கூடிய செல்லுபடியான மொபைல் எண்ணாக இருக்க வேண்டும், எ.கா. +911234567890'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'"username" செல்லுபடியான மொபைல் எண்ணாக இருக்க வேண்டும் மற்றும் "password" செல்லுபடியான 4-இலக்க OTP ஆக இருக்க வேண்டும்'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'"username" செல்லுபடியான மொபைல் எண்ணாக இருக்க வேண்டும் மற்றும் "password" செல்லுபடியான 4-இலக்க OTP ஆக இருக்க வேண்டும்'
			},
			// Users domain, Profile context errors
			{
				message_id: 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.first_name}} {{user.last_name}} இந்த செயல்பாட்டை செய்ய அனுமதிக்கப்படவில்லை.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.first_name}} {{body.last_name}} க்கான சுயவிவரத்தை உருவாக்க முடியவில்லை. OTP பொருந்தவில்லை.'
			},
			{
				message_id: 'USERS::PROFILE::MOBILE_NO_MISMATCH',
				message_text:
					'{{body.first_name}} {{body.last_name}} க்கான சுயவிவரத்தை உருவாக்க முடியவில்லை. மொபைல் எண்கள் பொருந்தவில்லை.'
			},
			{
				message_id: 'USERS::PROFILE::MINOR_USER',
				message_text:
					'{{body.first_name}} {{body.last_name}} க்கான சுயவிவரத்தை உருவாக்க முடியவில்லை. பயனர் சிறுவர்.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'சுயவிவர உருவாக்க கோரிக்கை தவறான உள்ளது: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புக்கள் தவறான உள்ளது.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'சுயவிவர புதுப்பிப்பு கோரிக்கை தவறான உள்ளது: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புக்கள் தவறான உள்ளது.'
			},
			// locale-specific validation errors for new surfaces
			{
				message_id: 'USERS::ADDRESS::INVALID_CREATE_REQUEST',
				message_text:
					'தவறான முகவரி உருவாக்க கோரிக்கை: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::ADDRESS::INVALID_UPDATE_REQUEST',
				message_text:
					'தவறான முகவரி மேம்படுத்துதல் கோரிக்கை: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'தவறான தொடர்பு உருவாக்க கோரிக்கை: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'தவறான தொடர்பு மேம்படுத்துதல் கோரிக்கை: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'தவறான பகுதி உருவாக்க கோரிக்கை: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'தவறான பகுதி மேம்படுத்துதல் கோரிக்கை: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_CREATE_REQUEST',
				message_text:
					'தவறான பாதுகாவலர் உறவு உருவாக்க கோரிக்கை: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_UPDATE_REQUEST',
				message_text:
					'தவறான பாதுகாவலர் உறவு மேம்படுத்துதல் கோரிக்கை: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
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
	console.log('Processing 008-master-data-by-locale-seed-ta-IN.cjs');
	// Step 1: Insert master data into contact types master
	await insertContactTypeMasterData(knex);

	// Step 2: Insert master data into genders master
	await insertGenderMasterData(knex);

	// Step 3: Insert master data into the system message master
	await insertSystemMessageMasterData(knex);
};
