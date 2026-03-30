/* eslint-disable security/detect-object-injection */
'use strict';

const insertContactTypeMasterData = async function insertContactTypeMasterData(
	knex
) {
	const localeId = 'gu-IN'; // Default locale for Gujarati (India) display names

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
			display_name: 'ઇમેઇલ',
			description: 'વપરાશકર્તાનું ઇમેઇલ સરનામું'
		},
		{
			name: 'landline',
			display_name: 'લેન્ડલાઇન / સ્થિર ફોન',
			description: 'વપરાશકર્તાનો લેન્ડલાઇન ફોન નંબર'
		},
		{
			name: 'mobile',
			display_name: 'મોબાઇલ',
			description: 'વપરાશકર્તાનો મોબાઇલ નંબર'
		},
		{
			name: 'fax',
			display_name: 'ફેક્સ',
			description: 'વપરાશકર્તાનો ફેક્સ નંબર'
		},
		{
			name: 'social',
			display_name: 'સોશિયલ મીડિયા',
			description: 'વપરાશકર્તાનો સોશિયલ મીડિયા પ્રોફાઇલ હેન્ડલ'
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
	const localeId = 'gu-IN'; // Default locale for Gujarati (India) display names

	// Step 0: If the data is already in there for this locale, skip...
	const artifactCount = await knex?.raw?.(
		`SELECT count(gender_id) AS masterdata_count FROM gender_by_locale WHERE locale_id = ?`,
		[localeId]
	);
	if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

	const now = knex.fn.now();

	// Step 1: Insert base gender names into gender_master
	const genders = [
		{
			name: 'male',
			display_name: 'પુરુષ',
			description: 'પુરુષ'
		},
		{
			name: 'female',
			display_name: 'મહિલા',
			description: 'મહિલા'
		},
		{
			name: 'other',
			display_name: 'અન્ય',
			description: 'અન્ય'
		}
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
		const localeId = 'gu-IN'; // Default locale for Gujarati (India) messages

		// Step 0: If the data is already in there for this locale, skip...
		const artifactCount = await knex?.raw?.(
			`SELECT count(message_id) AS masterdata_count FROM system_message_by_locale WHERE locale_id = ?`,
			[localeId]
		);
		if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

		const now = knex.fn.now();

		// Define system messages with their message codes
		const messages = [
			{
				message_id: 'UNKNOWN_ERROR',
				message_text:
					'સિસ્ટમ ભૂલ. અમે તેને સુધારવા માટે કામ કરી રહ્યા છીએ. થયેલી અસુવિધા માટે ક્ષમા.'
			},
			{
				message_id: 'AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB',
				message_text: 'સિસ્ટમમાં વપરાશકર્તા મળ્યો નથી.'
			},
			{
				message_id: 'AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID',
				message_text:
					'OTP અમાન્ય છે અથવા તેની સમયમર્યાદા સમાપ્ત થઈ ગઈ છે.'
			},
			{
				message_id: 'I18N_REPOSITORY::TRANSLATION_ERROR',
				message_text:
					'અનુવાદ ભૂલ. ભાષા સમર્થિત નથી. થયેલી અસુવિધા માટે ક્ષમા.'
			},
			{
				message_id: 'INPUT_VALIDATION_ERROR',
				message_text:
					'અમાન્ય ઇનપુટ. કૃપા કરીને મોકલેલ માહિતી તપાસો અને ફરી પ્રયાસ કરો.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_REQUIRED',
				message_text: 'જરૂરી છે.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_INVALID',
				message_text: 'અમાન્ય છે.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ONLY',
				message_text: 'માન્ય મૂલ્યોમાંથી એક હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ALLOW_ONLY',
				message_text: 'માન્ય મૂલ્યોમાંથી એક હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_UNKNOWN',
				message_text: 'અજાણ્યો મૂલ્ય સમાયેલ છે.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_CUSTOM',
				message_text: 'કસ્ટમ માન્યતા નિષ્ફળ ગઈ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_MATCH',
				message_text: 'માન્ય પ્રકારોમાંથી કોઈ સાથે મેળ ખાતું નથી.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_TYPES',
				message_text: 'માન્ય પ્રકારોમાંથી એક હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ANY',
				message_text: 'કોઈપણ વિકલ્પ સ્કીમા સાથે મેળ બેસ્યો નથી.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ALL',
				message_text: 'બધા આવશ્યક વિકલ્પો સાથે મેળ બેસવો જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ONE',
				message_text:
					'માન્ય વિકલ્પોમાંથી ચોક્કસ એક સાથે મેળ બેસવો જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE',
				message_text: 'સ્ટ્રિંગ હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMPTY',
				message_text: 'ખાલી હોઈ શકતું નથી.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MIN',
				message_text:
					'ઓછામાં ઓછા {{customInfo.limit}} અક્ષરો લાંબું હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MAX',
				message_text:
					'વધુમાં વધુ {{customInfo.limit}} અક્ષરો લાંબું હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LENGTH',
				message_text:
					'ચોક્કસ {{customInfo.limit}} અક્ષરો લાંબું હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_ALPHANUM',
				message_text: 'ફક્ત અક્ષરો અને અંકો જ હોવા જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMAIL',
				message_text: 'માન્ય ઇમેઇલ સરનામું હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_PATTERN_BASE',
				message_text: 'અમાન્ય સ્વરૂપમાં છે.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_GUID',
				message_text: 'માન્ય GUID/UUID હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HEX',
				message_text: 'માન્ય હેક્સાડેસિમલ સ્ટ્રિંગ હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE64',
				message_text: 'માન્ય base64-એન્કોડ કરેલ સ્ટ્રિંગ હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_URI',
				message_text: 'માન્ય URL હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HOSTNAME',
				message_text: 'માન્ય હોસ્ટનામ હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_DOMAIN',
				message_text: 'માન્ય ડોમેન નામ હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_IP',
				message_text: 'માન્ય IP સરનામું હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LOWERCASE',
				message_text: 'લોઅરકેસમાં હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_UPPERCASE',
				message_text: 'અપરકેસમાં હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_TRIM',
				message_text: 'શરૂઆત અથવા અંતે ખાલી જગ્યા ન હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_BASE',
				message_text: 'સંખ્યા હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_INTEGER',
				message_text: 'પૂર્ણાંક હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MIN',
				message_text:
					'{{customInfo.limit}} કરતાં મોટું અથવા બરાબર હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MAX',
				message_text:
					'{{customInfo.limit}} કરતાં નાનું અથવા બરાબર હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_GREATER',
				message_text: '{{customInfo.limit}} કરતાં મોટું હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_LESS',
				message_text: '{{customInfo.limit}} કરતાં નાનું હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_POSITIVE',
				message_text: 'ધન સંખ્યા હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_NEGATIVE',
				message_text: 'ઋણ સંખ્યા હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MULTIPLE',
				message_text: '{{customInfo.multiple}} નો ગુણાકાર હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_PRECISION',
				message_text:
					'{{customInfo.limit}} કરતાં વધુ દશાંશ સ્થાનો ન હોવા જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::BOOLEAN_BASE',
				message_text: 'બૂલિયન (true/false) હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_BASE',
				message_text: 'માન્ય તારીખ હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_ISO',
				message_text: 'ISO તારીખ સ્વરૂપમાં હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MIN',
				message_text:
					'{{customInfo.limit}} અથવા ત્યારબાદની તારીખ હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MAX',
				message_text:
					'{{customInfo.limit}} અથવા તે પહેલાંની તારીખ હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_GREATER',
				message_text: '{{customInfo.limit}} પછીની તારીખ હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_LESS',
				message_text: '{{customInfo.limit}} પહેલાંની તારીખ હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_BASE',
				message_text: 'એરે હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MIN',
				message_text:
					'ઓછામાં ઓછા {{customInfo.limit}} આઇટમ્સ હોવા જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MAX',
				message_text:
					'વધુમાં વધુ {{customInfo.limit}} આઇટમ્સ હોવા જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_LENGTH',
				message_text: 'ચોક્કસ {{customInfo.limit}} આઇટમ્સ હોવા જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_UNIQUE',
				message_text: 'નકલ આઇટમ્સ ન હોવા જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_INCLUDES',
				message_text: 'અમાન્ય આઇટમ સમાયેલ છે.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_HAS',
				message_text: 'ઓછામાં ઓછો એક આવશ્યક આઇટમ હોવો જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_BASE',
				message_text: 'ઓબ્જેક્ટ હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_UNKNOWN',
				message_text: 'અજાણ્યું ફિલ્ડ {{customInfo.key}} સમાયેલ છે.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MIN',
				message_text: 'ઓછામાં ઓછા {{customInfo.limit}} કીઓ હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MAX',
				message_text: 'વધુમાં વધુ {{customInfo.limit}} કીઓ હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_LENGTH',
				message_text: 'ચોક્કસ {{customInfo.limit}} કીઓ હોવી જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_AND',
				message_text: 'બધા આવશ્યક ફિલ્ડ્સ સાથે હોવા જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OR',
				message_text:
					'નિર્દિષ્ટ ફિલ્ડ્સમાંથી ઓછામાં ઓછું એક હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_XOR',
				message_text: 'નિર્દિષ્ટ ફિલ્ડ્સમાંથી ફક્ત એક જ હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OXOR',
				message_text:
					'નિર્દિષ્ટ ફિલ્ડ્સમાંથી એક કરતાં વધુ ન હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITH',
				message_text: 'આવશ્યક સહાયક ફિલ્ડ ગાયબ છે.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITHOUT',
				message_text: 'નિર્દિષ્ટ ફિલ્ડ સાથે હાજર ન હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_BASE',
				message_text: 'બાઇનરી ડેટા હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MIN',
				message_text:
					'ઓછામાં ઓછા {{customInfo.limit}} બાઇટ્સ હોવા જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MAX',
				message_text:
					'વધુમાં વધુ {{customInfo.limit}} બાઇટ્સ હોવા જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_LENGTH',
				message_text: 'ચોક્કસ {{customInfo.limit}} બાઇટ્સ હોવા જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_BASE',
				message_text: 'ફંક્શન હોવું જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_ARITY',
				message_text:
					'ચોક્કસ {{customInfo.n}} arguments સ્વીકારવા જોઈએ.'
			},
			{
				message_id: 'VALIDATION_ERROR::LINK_REF',
				message_text: 'અમાન્ય રેફરન્સ સમાયેલ છે.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_SMS',
				message_text:
					'Twyr માટે તમારો OTP {{otp}} છે. તે {{expiryTime}} સુધી માન્ય છે.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text:
					'તમારા નોંધાયેલ મોબાઇલ નંબર પર OTP મોકલવામાં આવ્યો છે.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'વપરાશકર્તા લોગ આઉટ થયો: {{userName}}.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'સક્રિય સત્ર પહેલેથી અસ્તિત્વમાં છે.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'કોઈ સક્રિય સત્ર નથી.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'પરવાનગી નકારી દેવામાં આવી. આ સમસ્યાનું નિરાકરણ કરવા માટે વ્યવસ્થાપન ટીમનો સંપર્ક કરો.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'"username" દેશ કોડ સાથે માન્ય મોબાઇલ નંબર હોવો જોઈએ, ઉદાહરણ તરીકે +911234567890'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'"username" માન્ય મોબાઇલ નંબર હોવો જોઈએ અને "password" માન્ય 4-અંકીય OTP હોવો જોઈએ'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'"username" માન્ય મોબાઇલ નંબર હોવો જોઈએ અને "password" માન્ય 4-અંકીય OTP હોવો જોઈએ'
			},
			{
				message_id: 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.first_name}} {{user.last_name}} આ ક્રિયા કરવા માટે અધિકૃત નથી.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.first_name}} {{body.last_name}} માટે પ્રોફાઇલ બનાવી શકાતી નથી. OTP મેળ ખાતો નથી.'
			},
			{
				message_id: 'USERS::PROFILE::MOBILE_NO_MISMATCH',
				message_text:
					'{{body.first_name}} {{body.last_name}} માટે પ્રોફાઇલ બનાવી શકાતી નથી. મોબાઇલ નંબરો મેળ ખાતા નથી.'
			},
			{
				message_id: 'USERS::PROFILE::MINOR_USER',
				message_text:
					'{{body.first_name}} {{body.last_name}} માટે પ્રોફાઇલ બનાવી શકાતી નથી. વપરાશકર્તા નાબાલિક છે.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'અમાન્ય પ્રોફાઇલ બનાવવાની વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'અમાન્ય પ્રોફાઇલ અપડેટ વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::ADDRESS::INVALID_CREATE_REQUEST',
				message_text:
					'અમાન્ય સરનામું બનાવવાની વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::ADDRESS::INVALID_UPDATE_REQUEST',
				message_text:
					'અમાન્ય સરનામું અપડેટ વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'અમાન્ય સંપર્ક બનાવવાની વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'અમાન્ય સંપર્ક અપડેટ વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'અમાન્ય લોકેલ બનાવવાની વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'અમાન્ય લોકેલ અપડેટ વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_CREATE_REQUEST',
				message_text:
					'અમાન્ય ગાર્ડિયન બનાવવાની વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_UPDATE_REQUEST',
				message_text:
					'અમાન્ય ગાર્ડિયન અપડેટ વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
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
	console.log('Processing 008-master-data-by-locale-seed-gu-IN.cjs');
	await insertContactTypeMasterData(knex);
	await insertGenderMasterData(knex);
	await insertSystemMessageMasterData(knex);
};
