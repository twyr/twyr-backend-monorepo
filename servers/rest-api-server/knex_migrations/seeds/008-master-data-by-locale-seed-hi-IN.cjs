/* eslint-disable security/detect-object-injection */
'use strict';

const insertContactTypeMasterData = async function insertContactTypeMasterData(
	knex
) {
	const localeId = 'hi-IN'; // Default locale for English display names

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
			display_name: 'ईमेल',
			description: 'उपयोगकर्ता का ईमेल पता'
		},
		{
			name: 'landline',
			display_name: 'लैंडलाइन / स्थिर फोन',
			description: `उपयोगकर्ता के लैंडलाइन फोन का नंबर`
		},
		{
			name: 'mobile',
			display_name: 'मोबाइल',
			description: `उपयोगकर्ता का मोबाइल नंबर`
		},
		{
			name: 'fax',
			display_name: 'फ़ैक्स',
			description: `उपयोगकर्ता का फ़ैक्स नंबर`
		},
		{
			name: 'social',
			display_name: 'सोशल मीडिया',
			description: `उपयोगकर्ता का सोशल मीडिया प्रोफ़ाइल हैंडल`
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
	const localeId = 'hi-IN'; // Default locale for English display names

	// Step 0: If the data is already in there for this locale, skip...
	const artifactCount = await knex?.raw?.(
		`SELECT count(gender_id) AS masterdata_count FROM gender_by_locale WHERE locale_id = ?`,
		[localeId]
	);
	if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

	const now = knex.fn.now();

	// Step 1: Insert base gender names into gender_master
	const genders = [
		{ name: 'male', display_name: 'पुरुष', description: 'पुरुष' },
		{
			name: 'female',
			display_name: 'महिला',
			description: 'महिला'
		},
		{ name: 'other', display_name: 'अन्य', description: 'अन्य' }
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
		const localeId = 'hi-IN'; // Default locale for English messages

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
					'सिस्टम त्रुटि। हम इसे ठीक करने पर काम कर रहे हैं। असुविधा के लिए खेद है।'
			},
			{
				message_id: 'AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB',
				message_text: 'उपयोगकर्ता सिस्टम में नहीं मिला।'
			},
			{
				message_id: 'AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID',
				message_text:
					'ओटीपी अमान्य है या उसकी समय-सीमा समाप्त हो गई है।'
			},
			{
				message_id: 'I18N_REPOSITORY::TRANSLATION_ERROR',
				message_text:
					'अनुवाद त्रुटि। भाषा समर्थित नहीं है। हुई असुविधा के लिए खेद है।'
			},
			// Server-level validation error messages
			{
				message_id: 'INPUT_VALIDATION_ERROR',
				message_text:
					'अमान्य इनपुट। कृपया भेजे गए डेटा की जांच करें और फिर से प्रयास करें।'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_REQUIRED',
				message_text: 'आवश्यक है।'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_INVALID',
				message_text: 'इनवैलिड है।'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ONLY',
				message_text: 'अनुमत मानों में से एक होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ALLOW_ONLY',
				message_text: 'अनुमत मानों में से एक होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_UNKNOWN',
				message_text: 'एक अज्ञात मान शामिल है.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_CUSTOM',
				message_text: 'कस्टम सत्यापन विफल.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_MATCH',
				message_text: 'किसी भी अनुमत प्रकार से मेल नहीं खाता.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_TYPES',
				message_text: 'अनुमत प्रकारों में से एक होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ANY',
				message_text: 'किसी भी वैकल्पिक स्कीम से मिलान करने में विफल.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ALL',
				message_text: 'सभी आवश्यक विकल्पों का मिलान होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ONE',
				message_text:
					'अनुमत विकल्पों में से किसी एक से बिल्कुल मेल खाना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE',
				message_text: 'एक स्ट्रिंग होनी चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMPTY',
				message_text: 'खाली नहीं हो सकता.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MIN',
				message_text:
					'कम से कम {{customInfo.limit}} अक्षर लंबा होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MAX',
				message_text:
					'अधिकतम {{customInfo.limit}} अक्षर लंबा होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LENGTH',
				message_text:
					'बिल्कुल {{customInfo.limit}} अक्षर लंबा होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_ALPHANUM',
				message_text: 'इसमें केवल अक्षर और अंक होने चाहियें।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMAIL',
				message_text: 'एक वैध ई - मेल पता होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_PATTERN_BASE',
				message_text: 'अमान्य प्रारूप में है.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_GUID',
				message_text: 'एक वैध GUID/UUID होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HEX',
				message_text: 'एक मान्य हेक्साडेसिमल स्ट्रिंग होनी चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE64',
				message_text: 'एक वैध बेस64-एन्कोडेड स्ट्रिंग होनी चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_URI',
				message_text: 'एक वैध यूआरएल होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HOSTNAME',
				message_text: 'एक वैध होस्टनाम होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_DOMAIN',
				message_text: 'एक वैध डोमेन नाम होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_IP',
				message_text: 'एक वैध आईपी पता होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LOWERCASE',
				message_text: 'लोअरकेस में होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_UPPERCASE',
				message_text: 'अपरकेस में होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_TRIM',
				message_text: 'आगे या पीछे का स्थान नहीं होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_BASE',
				message_text: 'एक संख्या होनी चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_INTEGER',
				message_text: 'पूर्णांक होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MIN',
				message_text:
					'{{customInfo.limit}} से अधिक या उसके बराबर होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MAX',
				message_text:
					'{{customInfo.limit}} से कम या उसके बराबर होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_GREATER',
				message_text: '{{customInfo.limit}} से अधिक होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_LESS',
				message_text: '{{customInfo.limit}} से कम होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_POSITIVE',
				message_text: 'अवश्य ही एक धनात्मक संख्या होनी चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_NEGATIVE',
				message_text: 'एक ऋणात्मक संख्या होनी चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MULTIPLE',
				message_text: '{{customInfo.multiple}} का गुणज होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_PRECISION',
				message_text:
					'{{customInfo.limit}} दशमलव स्थानों से अधिक नहीं होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::BOOLEAN_BASE',
				message_text: 'बूलियन (सही/गलत) होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_BASE',
				message_text: 'मान्य तिथि होनी चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_ISO',
				message_text: 'आईएसओ दिनांक प्रारूप में होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MIN',
				message_text: '{{customInfo.limit}} पर या उसके बाद होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MAX',
				message_text: '{{customInfo.limit}} पर या उससे पहले होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_GREATER',
				message_text: '{{customInfo.limit}} के बाद होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_LESS',
				message_text: '{{customInfo.limit}} से पहले होना चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_BASE',
				message_text: 'एक सारणी होनी चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MIN',
				message_text:
					'कम से कम {{customInfo.limit}} आइटम शामिल होने चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MAX',
				message_text:
					'अधिकतम {{customInfo.limit}} आइटम शामिल होने चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_LENGTH',
				message_text:
					'बिल्कुल {{customInfo.limit}} आइटम शामिल होने चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_UNIQUE',
				message_text: 'डुप्लिकेट आइटम नहीं होने चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_INCLUDES',
				message_text: 'एक अमान्य आइटम शामिल है.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_HAS',
				message_text: 'कम से कम एक आवश्यक वस्तु अवश्य होनी चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_BASE',
				message_text: 'एक वस्तु होनी चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_UNKNOWN',
				message_text: 'एक अज्ञात फ़ील्ड {{customInfo.key}} शामिल है।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MIN',
				message_text:
					'कम से कम {{customInfo.limit}} कुंजियाँ होनी चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MAX',
				message_text: 'अधिकतम {{customInfo.limit}} कुंजियाँ होनी चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_LENGTH',
				message_text:
					'बिल्कुल {{customInfo.limit}} कुंजियाँ होनी चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_AND',
				message_text: 'सभी आवश्यक फ़ील्ड एक साथ होनी चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OR',
				message_text:
					'निर्दिष्ट फ़ील्ड में से कम से कम एक अवश्य होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_XOR',
				message_text: 'निर्दिष्ट फ़ील्ड में से केवल एक ही होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OXOR',
				message_text:
					'निर्दिष्ट फ़ील्ड में से एक से अधिक नहीं होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITH',
				message_text: 'एक आवश्यक सहयोगी फ़ील्ड गुम है.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITHOUT',
				message_text: 'निर्दिष्ट फ़ील्ड के साथ मौजूद नहीं होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_BASE',
				message_text: 'बाइनरी डेटा होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MIN',
				message_text: 'कम से कम {{customInfo.limit}} बाइट्स होनी चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MAX',
				message_text: 'अधिकतम {{customInfo.limit}} बाइट्स होनी चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_LENGTH',
				message_text: 'बिलकुल {{customInfo.limit}} बाइट्स होनी चाहिए।'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_BASE',
				message_text: 'एक समारोह होना चाहिए.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_ARITY',
				message_text:
					'बिल्कुल {{customInfo.n}} तर्कों को स्वीकार करना होगा।'
			},
			{
				message_id: 'VALIDATION_ERROR::LINK_REF',
				message_text: 'एक अमान्य संदर्भ शामिल है.'
			},
			// Users domain, Session Manager context messages
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_SMS',
				message_text:
					'Twyr के लिए आपका ओटीपी {{otp}} है। यह {{expiryTime}} तक मान्य है।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text:
					'आपके पंजीकृत मोबाइल नंबर पर ओटीपी भेज दिया गया है।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'रोगी लॉग आउट किया गया: {{userName}}।'
			},
			// Users domain, Session Manager context errors
			{
				message_id: 'USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'सक्रिय सत्र पहले से मौजूद है।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'कोई सक्रिय सत्र नहीं है।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'अनुमति नहीं है। कृपया इस समस्या के समाधान के लिए सहायता टीम से संपर्क करें।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'"username" एक मान्य मोबाइल नंबर होना चाहिए जिसमें देश कोड हो, उदाहरण के लिए +911234567890'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'"username" एक मान्य मोबाइल नंबर होना चाहिए और "password" एक मान्य 4-अंकीय ओटीपी होना चाहिए'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'"username" एक मान्य मोबाइल नंबर होना चाहिए और "password" एक मान्य 4-अंकीय ओटीपी होना चाहिए'
			},
			// Users domain, Profile context errors
			{
				message_id: 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.first_name}} {{user.last_name}} इस कार्रवाई को करने के लिए अधिकृत नहीं है।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.first_name}} {{body.last_name}} के लिए प्रोफ़ाइल नहीं बनाई जा सकती। ओटीपी मेल नहीं खाता।'
			},
			{
				message_id: 'USERS::PROFILE::MOBILE_NO_MISMATCH',
				message_text:
					'{{body.first_name}} {{body.last_name}} के लिए प्रोफ़ाइल नहीं बनाई जा सकती। मोबाइल नंबर मेल नहीं खाते।'
			},
			{
				message_id: 'USERS::PROFILE::MINOR_USER',
				message_text:
					'{{body.first_name}} {{body.last_name}} के लिए प्रोफ़ाइल नहीं बनाई जा सकती। उपयोगकर्ता नाबालिग है।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'अमान्य प्रोफ़ाइल निर्माण अनुरोध: एक या अधिक फ़ील्ड अमान्य हैं। अधिक जानकारी के लिए विवरण देखें।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'अमान्य प्रोफ़ाइल अद्यतन अनुरोध: एक या अधिक फ़ील्ड अमान्य हैं। अधिक जानकारी के लिए विवरण देखें।'
			},
			// locale-specific validation errors for new surfaces
			{
				message_id: 'USERS::ADDRESS::INVALID_CREATE_REQUEST',
				message_text:
					'अमान्य पता निर्माण अनुरोध: एक या अधिक फ़ील्ड अमान्य हैं।'
			},
			{
				message_id: 'USERS::ADDRESS::INVALID_UPDATE_REQUEST',
				message_text:
					'अमान्य पता अद्यतन अनुरोध: एक या अधिक फ़ील्ड अमान्य हैं।'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'अमान्य संपर्क निर्माण अनुरोध: एक या अधिक फ़ील्ड अमान्य हैं।'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'अमान्य संपर्क अद्यतन अनुरोध: एक या अधिक फ़ील्ड अमान्य हैं।'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'अमान्य क्षेत्र निर्माण अनुरोध: एक या अधिक फ़ील्ड अमान्य हैं।'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'अमान्य क्षेत्र अद्यतन अनुरोध: एक या अधिक फ़ील्ड अमान्य हैं।'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_CREATE_REQUEST',
				message_text:
					'अमान्य अभिभावक संबंध निर्माण अनुरोध: एक या अधिक फ़ील्ड अमान्य हैं।'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_UPDATE_REQUEST',
				message_text:
					'अमान्य अभिभावक संबंध अद्यतन अनुरोध: एक या अधिक फ़ील्ड अमान्य हैं।'
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
	console.log('Processing 008-master-data-by-locale-seed-hi-IN.cjs');
	// Step 1: Insert master data into contact types master
	await insertContactTypeMasterData(knex);

	// Step 2: Insert master data into genders master
	await insertGenderMasterData(knex);

	// Step 3: Insert master data into the system message master
	await insertSystemMessageMasterData(knex);
};
