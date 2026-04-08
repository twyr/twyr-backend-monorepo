/* eslint-disable security/detect-object-injection */
'use strict';

const insertContactTypeMasterData = async function insertContactTypeMasterData(
	knex
) {
	const localeId = 'ml-IN'; // Default locale for English display names

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
			display_name: 'ഇമെയിൽ',
			description: 'ഉപയോക്താവിന്റെ ഇമെയിൽ വിലാസം'
		},
		{
			name: 'landline',
			display_name: 'ലാൻഡ്‌ലൈൻ / സ്ഥിര ഫോൺ',
			description: `ഉപയോക്താവിന്റെ ലാൻഡ്‌ലൈൻ നമ്പർ`
		},
		{
			name: 'mobile',
			display_name: 'മൊബൈൽ',
			description: `ഉപയോക്താവിന്റെ മൊബൈൽ നമ്പർ`
		},
		{
			name: 'fax',
			display_name: 'ഫാക്സ്',
			description: `ഉപയോക്താവിന്റെ ഫാക്സ് നമ്പർ`
		},
		{
			name: 'social',
			display_name: 'സോഷ്യൽ മീഡിയ',
			description: `ഉപയോക്താവിന്റെ സോഷ്യൽ മീഡിയ പ്രൊഫൈൽ ഹാൻഡിൽ`
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
	const localeId = 'ml-IN'; // Default locale for English display names

	// Step 0: If the data is already in there for this locale, skip...
	const artifactCount = await knex?.raw?.(
		`SELECT count(gender_id) AS masterdata_count FROM gender_by_locale WHERE locale_id = ?`,
		[localeId]
	);
	if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

	const now = knex.fn.now();

	// Step 1: Insert base gender names into gender_master
	const genders = [
		{ name: 'male', display_name: 'പുരുഷൻ', description: 'പുരുഷൻ' },
		{
			name: 'female',
			display_name: 'സ്ത്രീ',
			description: 'സ്ത്രീ'
		},
		{ name: 'other', display_name: 'മറ്റുള്ളവർ', description: 'മറ്റുള്ളവർ' }
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
		const localeId = 'ml-IN'; // Default locale for English messages

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
					'സിസ്റ്റം പിശക്. ഇത് പരിഹരിക്കാൻ ഞങ്ങൾ പ്രവർത്തിക്കുന്നു. ഉണ്ടായ അസൗകര്യത്തിന് ക്ഷമിക്കുക.'
			},
			{
				message_id: 'AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB',
				message_text: 'സിസ്റ്റത്തിൽ ഉപയോക്താവിനെ കണ്ടെത്താനായില്ല.'
			},
			{
				message_id: 'AUTH_REPOSITORY::UNSUPPORTED_USER_ROLE',
				message_text: 'പിന്തുണയ്ക്കാത്ത ഉപയോക്തൃ പങ്ക്.'
			},
			{
				message_id: 'AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID',
				message_text: 'OTP കാലഹരണപ്പെട്ടു അല്ലെങ്കിൽ അസാധുവാണ്.'
			},
			{
				message_id: 'I18N_REPOSITORY::TRANSLATION_ERROR',
				message_text:
					'പരിഭാഷ പിശക്. ഈ ഭാഷയ്ക്ക് പിന്തുണയില്ല. ഉണ്ടായ അസൗകര്യത്തിന് ക്ഷമിക്കുക.'
			},
			// Server-level validation error messages
			{
				message_id: 'INPUT_VALIDATION_ERROR',
				message_text:
					'അസാധുവായ ഇൻപുട്ട്. നൽകിയ വിവരങ്ങൾ പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_REQUIRED',
				message_text: 'ആവശ്യമാണ്.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_INVALID',
				message_text: 'അസാധുവാണ്.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ONLY',
				message_text: 'അനുവദനീയമായ മൂല്യങ്ങളിൽ ഒന്നായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ALLOW_ONLY',
				message_text: 'അനുവദനീയമായ മൂല്യങ്ങളിൽ ഒന്നായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_UNKNOWN',
				message_text: 'ഒരു അജ്ഞാത മൂല്യം അടങ്ങിയിരിക്കുന്നു.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_CUSTOM',
				message_text: 'ഇഷ്‌ടാനുസൃത മൂല്യനിർണ്ണയം പരാജയപ്പെട്ടു.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_MATCH',
				message_text: 'അനുവദനീയമായ തരങ്ങളുമായി പൊരുത്തപ്പെടുന്നില്ല.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_TYPES',
				message_text: 'അനുവദനീയമായ തരങ്ങളിൽ ഒന്നായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ANY',
				message_text: 'ഏതെങ്കിലും ഇതര സ്കീമയുമായി പൊരുത്തപ്പെടുന്നില്ല.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ALL',
				message_text: 'ആവശ്യമായ എല്ലാ ബദലുകളുമായും പൊരുത്തപ്പെടണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ONE',
				message_text:
					'അനുവദനീയമായ ബദലുകളിൽ ഒന്നുമായി കൃത്യമായി പൊരുത്തപ്പെടണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE',
				message_text: 'ഒരു സ്ട്രിംഗ് ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMPTY',
				message_text: 'ശൂന്യമാക്കാൻ കഴിയില്ല.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MIN',
				message_text:
					'കുറഞ്ഞത് {{customInfo.limit}} പ്രതീകങ്ങളെങ്കിലും ദൈർഘ്യമുണ്ടായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MAX',
				message_text:
					'പരമാവധി {{customInfo.limit}} പ്രതീകങ്ങൾ നീളമുള്ളതായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LENGTH',
				message_text:
					'കൃത്യമായി {{customInfo.limit}} പ്രതീകങ്ങൾ നീളമുള്ളതായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_ALPHANUM',
				message_text: 'അക്ഷരങ്ങളും അക്കങ്ങളും മാത്രം അടങ്ങിയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMAIL',
				message_text: 'സാധുവായ ഒരു ഇമെയിൽ വിലാസമായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_PATTERN_BASE',
				message_text: 'ഒരു അസാധുവായ ഫോർമാറ്റിലാണ്.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_GUID',
				message_text: 'സാധുവായ ഒരു GUID/UUID ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HEX',
				message_text:
					'സാധുതയുള്ള ഒരു ഹെക്സാഡെസിമൽ സ്ട്രിംഗ് ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE64',
				message_text:
					'സാധുതയുള്ള അടിസ്ഥാന64-എൻകോഡ് ചെയ്ത സ്ട്രിംഗ് ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_URI',
				message_text: 'സാധുതയുള്ള ഒരു URL ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HOSTNAME',
				message_text: 'സാധുവായ ഒരു ഹോസ്റ്റ്നാമം ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_DOMAIN',
				message_text: 'സാധുവായ ഒരു ഡൊമെയ്ൻ നാമമായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_IP',
				message_text: 'ഒരു സാധുവായ IP വിലാസം ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LOWERCASE',
				message_text: 'ചെറിയക്ഷരത്തിൽ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_UPPERCASE',
				message_text: 'വലിയക്ഷരത്തിലായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_TRIM',
				message_text: 'മുന്നിലോ പിന്നിലോ ഉള്ള ഇടങ്ങൾ ഉണ്ടാകരുത്.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_BASE',
				message_text: 'ഒരു നമ്പർ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_INTEGER',
				message_text: 'ഒരു പൂർണ്ണസംഖ്യയായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MIN',
				message_text:
					'{{customInfo.limit}} എന്നതിനേക്കാൾ വലുതോ തുല്യമോ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MAX',
				message_text:
					'{{customInfo.limit}}-നേക്കാൾ കുറവോ തുല്യമോ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_GREATER',
				message_text: '{{customInfo.limit}}-നേക്കാൾ വലുതായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_LESS',
				message_text: '{{customInfo.limit}}-ൽ കുറവായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_POSITIVE',
				message_text: 'ഒരു പോസിറ്റീവ് നമ്പർ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_NEGATIVE',
				message_text: 'ഒരു നെഗറ്റീവ് സംഖ്യയായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MULTIPLE',
				message_text:
					'{{customInfo.multiple}} എന്നതിൻ്റെ ഗുണിതമായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_PRECISION',
				message_text:
					'{{customInfo.limit}} ദശാംശ സ്ഥാനങ്ങളിൽ കൂടുതലൊന്നും ഉണ്ടായിരിക്കരുത്.'
			},
			{
				message_id: 'VALIDATION_ERROR::BOOLEAN_BASE',
				message_text: 'ഒരു ബൂളിയൻ ആയിരിക്കണം (ശരി/തെറ്റ്).'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_BASE',
				message_text: 'ഒരു സാധുവായ തീയതി ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_ISO',
				message_text: 'ISO തീയതി ഫോർമാറ്റിൽ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MIN',
				message_text:
					'{{customInfo.limit}} എന്നതിലോ അതിന് ശേഷമോ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MAX',
				message_text:
					'{{customInfo.limit}} എന്ന തീയതിയിലോ അതിന് മുമ്പോ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_GREATER',
				message_text: '{{customInfo.limit}} കഴിഞ്ഞിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_LESS',
				message_text: '{{customInfo.limit}}-ന് മുമ്പായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_BASE',
				message_text: 'ഒരു അറേ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MIN',
				message_text:
					'കുറഞ്ഞത് {{customInfo.limit}} ഇനങ്ങളെങ്കിലും അടങ്ങിയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MAX',
				message_text:
					'പരമാവധി {{customInfo.limit}} ഇനങ്ങൾ അടങ്ങിയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_LENGTH',
				message_text:
					'കൃത്യമായി {{customInfo.limit}} ഇനങ്ങൾ അടങ്ങിയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_UNIQUE',
				message_text: 'ഡ്യൂപ്ലിക്കേറ്റ് ഇനങ്ങൾ അടങ്ങിയിരിക്കരുത്.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_INCLUDES',
				message_text: 'അസാധുവായ ഒരു ഇനം അടങ്ങിയിരിക്കുന്നു.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_HAS',
				message_text: 'ആവശ്യമായ ഒരു ഇനമെങ്കിലും അടങ്ങിയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_BASE',
				message_text: 'ഒരു വസ്തുവായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_UNKNOWN',
				message_text:
					'ഒരു അജ്ഞാത ഫീൽഡ് {{customInfo.key}} അടങ്ങിയിരിക്കുന്നു.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MIN',
				message_text:
					'കുറഞ്ഞത് {{customInfo.limit}} കീകളെങ്കിലും ഉണ്ടായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MAX',
				message_text:
					'പരമാവധി {{customInfo.limit}} കീകൾ ഉണ്ടായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_LENGTH',
				message_text:
					'കൃത്യമായി {{customInfo.limit}} കീകൾ ഉണ്ടായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_AND',
				message_text:
					'ആവശ്യമായ എല്ലാ ഫീൽഡുകളും ഒരുമിച്ച് അടങ്ങിയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OR',
				message_text:
					'നിർദ്ദിഷ്‌ട ഫീൽഡുകളിൽ ഒരെണ്ണമെങ്കിലും അടങ്ങിയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_XOR',
				message_text:
					'നിർദ്ദിഷ്‌ട ഫീൽഡുകളിൽ ഒന്ന് മാത്രം അടങ്ങിയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OXOR',
				message_text:
					'നിർദ്ദിഷ്ട ഫീൽഡുകളിൽ ഒന്നിൽ കൂടുതൽ അടങ്ങിയിരിക്കരുത്.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITH',
				message_text: 'ആവശ്യമായ ഒരു സഹകാരി ഫീൽഡ് നഷ്‌ടമായി.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITHOUT',
				message_text: 'നിർദ്ദിഷ്ട ഫീൽഡിൽ ഉണ്ടായിരിക്കരുത്.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_BASE',
				message_text: 'ബൈനറി ഡാറ്റ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MIN',
				message_text:
					'കുറഞ്ഞത് {{customInfo.limit}} ബൈറ്റുകളെങ്കിലും ഉണ്ടായിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MAX',
				message_text:
					'പരമാവധി {{customInfo.limit}} ബൈറ്റുകൾ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_LENGTH',
				message_text:
					'കൃത്യമായി {{customInfo.limit}} ബൈറ്റുകൾ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_BASE',
				message_text: 'ഒരു ഫംഗ്‌ഷൻ ആയിരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_ARITY',
				message_text:
					'കൃത്യമായി {{customInfo.n}} ആർഗ്യുമെൻ്റുകൾ സ്വീകരിക്കണം.'
			},
			{
				message_id: 'VALIDATION_ERROR::LINK_REF',
				message_text: 'അസാധുവായ ഒരു റഫറൻസ് അടങ്ങിയിരിക്കുന്നു.'
			},
			// Users domain, Session Manager context messages
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_SMS',
				message_text:
					'Twyr നുള്ള നിങ്ങളുടെ OTP {{otp}} ആണ്. ഇത് {{expiryTime}} വരെ സാധുവാണ്.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text:
					'നിങ്ങളുടെ രജിസ്റ്റർ ചെയ്ത മൊബൈൽ നമ്പറിലേക്ക് OTP അയച്ചിരിക്കുന്നു.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'ലോഗ് ഔട്ട് ചെയ്ത രോഗി: {{userName}}.'
			},
			// Users domain, Session Manager context errors
			{
				message_id: 'USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'ഇതിനകം ഒരു സജീവ സെഷൻ നിലവിലുണ്ട്.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'സജീവ സെഷൻ ഇല്ല.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'അനുമതി നിഷേധിച്ചു. പ്രശ്നം പരിഹരിക്കാൻ സഹായ ടീമിനെ ബന്ധപ്പെടുക.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'"username" രാഷ്ട്ര കോഡ് ഉൾപ്പെടുത്തി സാധുവായ മൊബൈൽ നമ്പർ ആയിരിക്കണം, ഉദാഹരണത്തിന് +911234567890'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'"username" സാധുവായ മൊബൈൽ നമ്പർ ആയിരിക്കണം സാധുവായ 4-അക്ക OTP ആയിരിക്കണം'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'"username" സാധുവായ മൊബൈൽ നമ്പർ ആയിരിക്കണം സാധുവായ 4-അക്ക OTP ആയിരിക്കണം'
			}, // Users domain, Profile context errors
			{
				message_id: 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.first_name}} {{user.last_name}} ന് ഈ പ്രവർത്തനം നടത്താനുള്ള അനുമതി ഇല്ല.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.first_name}} {{body.last_name}} നുള്ള പ്രൊഫൈൽ സൃഷ്ടിക്കാനാവില്ല. OTP പൊരുത്തപ്പെടുന്നില്ല.'
			},
			{
				message_id: 'USERS::PROFILE::MOBILE_NO_MISMATCH',
				message_text:
					'{{body.first_name}} {{body.last_name}} നുള്ള പ്രൊഫൈൽ സൃഷ്ടിക്കാനാവില്ല. മൊബൈൽ നമ്പറുകൾ പൊരുത്തപ്പെടുന്നില്ല.'
			},
			{
				message_id: 'USERS::PROFILE::MINOR_USER',
				message_text:
					'{{body.first_name}} {{body.last_name}} നുള്ള പ്രൊഫൈൽ സൃഷ്ടിക്കാനാവില്ല. ഉപയോക്താവ് പ്രായപൂർത്തിയാകാത്തവരാണ്.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'പ്രൊഫൈൽ സൃഷ്ടി അഭ്യർത്ഥന അസാധുവാണ്: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഫീൽഡുകൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'പ്രൊഫൈൽ അപ്‌ഡേറ്റ് അഭ്യർത്ഥന അസാധുവാണ്: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഫീൽഡുകൾ അസാധുവാണ്.'
			},
			// locale-specific validation errors for new surfaces
			{
				message_id: 'USERS::ADDRESS::INVALID_CREATE_REQUEST',
				message_text:
					'അസാധുവായ വിലാസ സൃഷ്ടി അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ സവിശേഷതകൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::ADDRESS::INVALID_UPDATE_REQUEST',
				message_text:
					'അസാധുവായ വിലാസ അപ്‌ഡേറ്റ് അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ സവിശേഷതകൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'അസാധുവായ കോൺടാക്റ്റ് സൃഷ്ടി അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ സവിശേഷതകൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'അസാധുവായ കോൺടാക്റ്റ് അപ്‌ഡേറ്റ് അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ സവിശേഷതകൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'അസാധുവായ പ്രദേശസൃഷ്ടി അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ സവിശേഷതകൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'അസാധുവായ പ്രദേശ അപ്‌ഡേറ്റ് അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ സവിശേഷതകൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_CREATE_REQUEST',
				message_text:
					'അസാധുവായ രക്ഷിതാവ് ബന്ധ സൃഷ്ടി അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ സവിശേഷതകൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_UPDATE_REQUEST',
				message_text:
					'അസാധുവായ രക്ഷിതാവ് ബന്ധ അപ്‌ഡേറ്റ് അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ സവിശേഷതകൾ അസാധുവാണ്.'
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
	console.log('Processing 008-master-data-by-locale-seed-ml-IN.cjs');
	// Step 1: Insert master data into contact types master
	await insertContactTypeMasterData(knex);

	// Step 2: Insert master data into genders master
	await insertGenderMasterData(knex);

	// Step 3: Insert master data into the system message master
	await insertSystemMessageMasterData(knex);
};
