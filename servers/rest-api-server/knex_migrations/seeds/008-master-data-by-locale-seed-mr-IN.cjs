/* eslint-disable security/detect-object-injection */
'use strict';

const insertContactTypeMasterData = async function insertContactTypeMasterData(
	knex
) {
	const localeId = 'mr-IN'; // Default locale for English display names

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
			description: 'वापरकर्त्याचा ईमेल पत्ता'
		},
		{
			name: 'landline',
			display_name: 'लँडलाइन / स्थिर फोन',
			description: `वापरकर्त्याचा लँडलाइन क्रमांक`
		},
		{
			name: 'mobile',
			display_name: 'मोबाइल',
			description: `वापरकर्त्याचा मोबाइल क्रमांक`
		},
		{
			name: 'fax',
			display_name: 'फॅक्स',
			description: `वापरकर्त्याचा फॅक्स क्रमांक`
		},
		{
			name: 'social',
			display_name: 'सोशल मीडिया',
			description: `वापरकर्त्याचा सोशल मीडिया प्रोफाइल हँडल`
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
	const localeId = 'mr-IN'; // Default locale for English display names

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
		{ name: 'other', display_name: 'इतर', description: 'इतर' }
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

const insertFacilityStatusMasterData =
	async function insertFacilityStatusMasterData(knex) {
		const localeId = 'mr-IN'; // Default locale for English display names

		// Step 0: If the data is already in there for this locale, skip...
		const statusCount = await knex?.raw?.(
			`SELECT count(facility_status_id) AS status_count FROM facility_status_by_locale WHERE locale_id = ?`,
			[localeId]
		);
		if (Number?.(statusCount?.rows?.[0]['status_count'])) return;

		const now = knex.fn.now();

		// Step 1: Insert base facility statuses into facility_status_master
		const statuses = [
			{
				name: 'waiting',
				display_name: 'प्रतीक्षेत',
				description: 'सिस्टम प्रशासकाच्या मंजुरीची प्रतीक्षा आहे.'
			},
			{
				name: 'authorized',
				display_name: 'मंजूर',
				description: 'मंजूर खाते — सुविधा ऑनलाइन असून कार्यरत आहे.'
			},
			{
				name: 'disabled',
				display_name: 'निष्क्रिय',
				description: 'निष्क्रिय खाते — या प्रणालीमध्ये कार्यरत नाही.'
			}
		];

		const baseStatuses = await knex?.raw?.(
			`SELECT id, name FROM facility_status_master WHERE name = ANY (?)`,
			[statuses.map((s) => s.name)]
		);
		const facilityStatusIdByName = new Map(
			baseStatuses?.rows?.map((s) => [s.name, s.id])
		);

		// Step 2: Insert localized facility status display names into facility_status_by_locale
		const localizedStatuses = statuses.map((s) => ({
			facility_status_id: facilityStatusIdByName.get(s.name),
			locale_id: localeId,
			display_name: s.display_name,
			description: s.description,
			created_at: now,
			updated_at: now
		}));

		await knex('facility_status_by_locale').insert(localizedStatuses);
	};

const insertConnectionStatusMasterData =
	async function insertConnectionStatusMasterData(knex) {
		const localeId = 'mr-IN'; // Default locale for English display names

		// Step 0: If the data is already in there for this locale, skip...
		const artifactCount = await knex?.raw?.(
			`SELECT count(connection_status_id) AS masterdata_count FROM connection_status_by_locale WHERE locale_id = ?`,
			[localeId]
		);
		if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

		const now = knex.fn.now();

		// Step 1: Insert base connection statuses into connection_status_master
		const statuses = [
			{
				name: 'waiting',
				display_name: 'प्रतीक्षेत',
				description: 'कनेक्शन मंजुरी प्रलंबित आहे'
			},
			{
				name: 'authorized',
				display_name: 'मंजूर',
				description: 'कनेक्शन मंजूर झाले आहे'
			},
			{
				name: 'disabled',
				display_name: 'निष्क्रिय',
				description: 'कनेक्शन काढून टाकले आहे'
			}
		];

		const baseStatuses = await knex?.raw?.(
			`SELECT id, name FROM connection_status_master WHERE name = ANY (?)`,
			[statuses.map((s) => s.name)]
		);
		const connectionStatusIdByName = new Map(
			baseStatuses?.rows?.map((s) => [s.name, s.id])
		);

		// Step 2: Insert localized connection status display names into connection_status_by_locale
		const localizedStatuses = statuses.map((s) => ({
			connection_status_id: connectionStatusIdByName.get(s.name),
			locale_id: localeId,
			display_name: s.display_name,
			description: s.description,
			created_at: now,
			updated_at: now
		}));

		await knex('connection_status_by_locale').insert(localizedStatuses);
	};

const insertSystemMessageMasterData =
	async function insertSystemMessageMasterData(knex) {
		const localeId = 'mr-IN'; // Default locale for English messages

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
					'सिस्टम त्रुटी. आम्ही ती दुरुस्त करण्यासाठी काम करत आहोत. गैरसोयीबद्दल दिलगीर आहोत.'
			},
			{
				message_id: 'AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB',
				message_text: 'प्रणालीमध्ये वापरकर्ता सापडला नाही.'
			},
			{
				message_id: 'AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID',
				message_text: 'ओटीपी कालबाह्य झाला आहे किंवा अवैध आहे.'
			},
			{
				message_id: 'I18N_REPOSITORY::TRANSLATION_ERROR',
				message_text:
					'भाषांतर त्रुटी. ही भाषा समर्थित नाही. गैरसोयीबद्दल दिलगीर आहोत.'
			},
			// Server-level validation error messages
			{
				message_id: 'INPUT_VALIDATION_ERROR',
				message_text:
					'अवैध इनपुट. कृपया दिलेली माहिती तपासा आणि पुन्हा प्रयत्न करा.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_REQUIRED',
				message_text: 'आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_INVALID',
				message_text: 'अवैध आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ONLY',
				message_text: 'अनुमत मूल्यांपैकी एक असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ALLOW_ONLY',
				message_text: 'अनुमत मूल्यांपैकी एक असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_UNKNOWN',
				message_text: 'अज्ञात मूल्य समाविष्टीत आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_CUSTOM',
				message_text: 'कस्टम प्रमाणीकरण अयशस्वी.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_MATCH',
				message_text: 'परवानगी दिलेल्या कोणत्याही प्रकारांशी जुळत नाही.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_TYPES',
				message_text: 'अनुमत प्रकारांपैकी एक असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ANY',
				message_text: 'कोणत्याही पर्यायी स्कीमाशी जुळण्यात अयशस्वी.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ALL',
				message_text: 'सर्व आवश्यक पर्यायांशी जुळले पाहिजे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ONE',
				message_text:
					'परवानगी दिलेल्या पर्यायांपैकी एकाशी तंतोतंत जुळणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE',
				message_text: 'स्ट्रिंग असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMPTY',
				message_text: 'रिकामे असू शकत नाही.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MIN',
				message_text:
					'किमान {{customInfo.limit}} वर्ण लांब असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MAX',
				message_text:
					'कमाल {{customInfo.limit}} वर्ण लांब असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LENGTH',
				message_text:
					'अचूक {{customInfo.limit}} वर्ण लांब असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_ALPHANUM',
				message_text: 'फक्त अक्षरे आणि संख्या असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMAIL',
				message_text: 'एक वैध ईमेल पत्ता असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_PATTERN_BASE',
				message_text: 'अवैध स्वरूपात आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_GUID',
				message_text: 'वैध GUID/UUID असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HEX',
				message_text: 'वैध हेक्साडेसिमल स्ट्रिंग असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE64',
				message_text:
					'एक वैध बेस64-एनकोड केलेली स्ट्रिंग असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_URI',
				message_text: 'एक वैध URL असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HOSTNAME',
				message_text: 'वैध होस्टनाव असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_DOMAIN',
				message_text: 'एक वैध डोमेन नाव असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_IP',
				message_text: 'वैध IP पत्ता असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LOWERCASE',
				message_text: 'लोअरकेसमध्ये असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_UPPERCASE',
				message_text: 'अपरकेसमध्ये असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_TRIM',
				message_text: 'अग्रगण्य किंवा अनुगामी स्थाने नसावीत.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_BASE',
				message_text: 'संख्या असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_INTEGER',
				message_text: 'पूर्णांक असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MIN',
				message_text:
					'{{customInfo.limit}} पेक्षा जास्त किंवा समान असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MAX',
				message_text:
					'{{customInfo.limit}} पेक्षा कमी किंवा समान असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_GREATER',
				message_text:
					'{{customInfo.limit}} पेक्षा जास्त असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_LESS',
				message_text: '{{customInfo.limit}} पेक्षा कमी असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_POSITIVE',
				message_text: 'धन संख्या असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_NEGATIVE',
				message_text: 'ऋण संख्या असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MULTIPLE',
				message_text:
					'{{customInfo.multiple}} चा गुणाकार असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_PRECISION',
				message_text:
					'{{customInfo.limit}} दशांश स्थानांपेक्षा जास्त नसावे.'
			},
			{
				message_id: 'VALIDATION_ERROR::BOOLEAN_BASE',
				message_text: 'बुलियन (सत्य/असत्य) असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_BASE',
				message_text: 'वैध तारीख असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_ISO',
				message_text: 'ISO तारीख स्वरूपात असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MIN',
				message_text:
					'{{customInfo.limit}} वर किंवा नंतर असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MAX',
				message_text:
					'{{customInfo.limit}} वर किंवा आधी असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_GREATER',
				message_text: '{{customInfo.limit}} नंतर असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_LESS',
				message_text: '{{customInfo.limit}} पूर्वीचे असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_BASE',
				message_text: 'ॲरे असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MIN',
				message_text: 'किमान {{customInfo.limit}} आयटम असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MAX',
				message_text:
					'जास्तीत जास्त {{customInfo.limit}} आयटम असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_LENGTH',
				message_text: 'नक्की {{customInfo.limit}} आयटम असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_UNIQUE',
				message_text: 'डुप्लिकेट आयटम नसावेत.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_INCLUDES',
				message_text: 'एक अवैध आयटम आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_HAS',
				message_text: 'किमान एक आवश्यक आयटम असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_BASE',
				message_text: 'ऑब्जेक्ट असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_UNKNOWN',
				message_text: 'अज्ञात फील्ड {{customInfo.key}} आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MIN',
				message_text: 'किमान {{customInfo.limit}} की असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MAX',
				message_text:
					'जास्तीत जास्त {{customInfo.limit}} की असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_LENGTH',
				message_text: 'अचूक {{customInfo.limit}} की असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_AND',
				message_text: 'सर्व आवश्यक फील्ड एकत्र असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OR',
				message_text: 'निर्दिष्ट फील्डपैकी किमान एक असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_XOR',
				message_text: 'निर्दिष्ट फील्डपैकी फक्त एक असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OXOR',
				message_text: 'निर्दिष्ट फील्डपैकी एकापेक्षा जास्त नसावेत.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITH',
				message_text: 'आवश्यक सहचर फील्ड गहाळ आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITHOUT',
				message_text: 'निर्दिष्ट फील्डसह उपस्थित नसावे.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_BASE',
				message_text: 'बायनरी डेटा असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MIN',
				message_text:
					'किमान {{customInfo.limit}} बाइट्स असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MAX',
				message_text:
					'जास्तीत जास्त {{customInfo.limit}} बाइट्स असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_LENGTH',
				message_text:
					'अचूक {{customInfo.limit}} बाइट्स असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_BASE',
				message_text: 'फंक्शन असणे आवश्यक आहे.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_ARITY',
				message_text:
					'अचूक {{customInfo.n}} युक्तिवाद स्वीकारले पाहिजेत.'
			},
			{
				message_id: 'VALIDATION_ERROR::LINK_REF',
				message_text: 'एक अवैध संदर्भ आहे.'
			},
			// Users domain, Session Manager context messages
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_SMS',
				message_text:
					'Twyr साठी तुमचा ओटीपी {{otp}} आहे. तो {{expiryTime}} पर्यंत वैध आहे.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text:
					'तुमच्या नोंदणीकृत मोबाइल क्रमांकावर ओटीपी पाठवण्यात आला आहे.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'लॉग आउट केलेला रुग्ण: {{userName}}.'
			},
			// Users domain, Session Manager context errors
			{
				message_id: 'USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'आधीच एक सक्रिय सत्र अस्तित्वात आहे.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'कोणतेही सक्रिय सत्र नाही.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'परवानगी नाकारली आहे. ही समस्या सोडवण्यासाठी सहाय्य संघाशी संपर्क साधा.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'"username" देश कोडसह वैध मोबाइल नंबर असावा, उदाहरणार्थ +911234567890'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'"username" वैध मोबाइल नंबर असावा आणि "password" वैध 4-अंकीय OTP असावा'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'"username" वैध मोबाइल नंबर असावा आणि "password" वैध 4-अंकीय OTP असावा'
			}, // Users domain, Profile context errors
			{
				message_id: 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.first_name}} {{user.last_name}} यांना ही कारवाई करण्याची परवानगी नाही.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.first_name}} {{body.last_name}} साठी प्रोफाइल तयार करता येत नाही. ओटीपी जुळत नाही.'
			},
			{
				message_id: 'USERS::PROFILE::MOBILE_NO_MISMATCH',
				message_text:
					'{{body.first_name}} {{body.last_name}} साठी प्रोफाइल तयार करता येत नाही. मोबाइल क्रमांक जुळत नाहीत.'
			},
			{
				message_id: 'USERS::PROFILE::MINOR_USER',
				message_text:
					'{{body.first_name}} {{body.last_name}} साठी प्रोफाइल तयार करता येत नाही. वापरकर्ता अल्पवयीन आहे.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'प्रोफाइल तयार करण्याचे विनंती अवैध आहे: एक किंवा अधिक विशेषता अवैध आहेत.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'प्रोफाइल अपडेट करण्याचे विनंती अवैध आहे: एक किंवा अधिक विशेषता अवैध आहेत.'
			},
			// locale-specific validation errors for new surfaces
			{
				message_id: 'USERS::ADDRESS::INVALID_CREATE_REQUEST',
				message_text:
					'अवैध पत्ता तयार करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::ADDRESS::INVALID_UPDATE_REQUEST',
				message_text:
					'अवैध पत्ता अद्यतनित करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'अवैध संपर्क तयार करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'अवैध संपर्क अद्यतनित करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'अवैध क्षेत्र तयार करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'अवैध क्षेत्र अद्यतनित करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_CREATE_REQUEST',
				message_text:
					'अवैध पालक संबंध तयार करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_UPDATE_REQUEST',
				message_text:
					'अवैध पालक संबंध अद्यतनित करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
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

const insertRelationshipTypeMasterData =
	async function insertRelationshipTypeMasterData(knex) {
		const localeId = 'mr-IN'; // Default locale for Marathi display names

		// Step 0: If the data is already in there for this locale, skip...
		const artifactCount = await knex?.raw?.(
			`SELECT count(relationship_type_id) AS masterdata_count FROM relationship_type_by_locale WHERE locale_id = ?`,
			[localeId]
		);
		if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

		const now = knex.fn.now();

		// Step 1: Insert base relationship type names into relationship_type_master
		const relationshipTypes = [
			{
				name: 'father',
				display_name: 'पिता',
				description: 'पिता'
			},
			{
				name: 'mother',
				display_name: 'माता',
				description: 'माता'
			},
			{
				name: 'guardian',
				display_name: 'संरक्षक',
				description: 'संरक्षक'
			}
		];

		const baseRelationshipTypes = await knex?.raw?.(
			`SELECT id, name FROM relationship_type_master WHERE name = ANY (?)`,
			[relationshipTypes.map((rt) => rt.name)]
		);
		const relationshipTypeIdByName = new Map(
			baseRelationshipTypes?.rows?.map((rt) => [rt.name, rt.id])
		);

		// Step 2: Insert localized relationship type display names into relationship_type_by_locale
		const localizedRelationshipTypes = relationshipTypes.map((rt) => ({
			relationship_type_id: relationshipTypeIdByName.get(rt.name),
			locale_id: localeId,
			display_name: rt.display_name,
			description: rt.description,
			created_at: now,
			updated_at: now
		}));

		await knex('relationship_type_by_locale').insert(
			localizedRelationshipTypes
		);
	};

exports.seed = async function (knex) {
	console.log('Processing 008-master-data-by-locale-seed-mr-IN.cjs');
	// Step 1: Insert master data into contact types master
	await insertContactTypeMasterData(knex);

	// Step 2: Insert master data into genders master
	await insertGenderMasterData(knex);

	// Step 3: Insert master data into facility status master
	await insertFacilityStatusMasterData(knex);

	// Step 4: Insert master data into connection status master
	await insertConnectionStatusMasterData(knex);

	// Step 5: Insert master data into relationship types master
	await insertRelationshipTypeMasterData(knex);

	// Step 6: Insert master data into the system message master
	await insertSystemMessageMasterData(knex);
};
