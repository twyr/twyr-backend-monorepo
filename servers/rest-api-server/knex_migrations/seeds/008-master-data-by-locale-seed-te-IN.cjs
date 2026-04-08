/* eslint-disable security/detect-object-injection */
'use strict';

const insertContactTypeMasterData = async function insertContactTypeMasterData(
	knex
) {
	const localeId = 'te-IN'; // Default locale for English display names

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
			display_name: 'ఇమెయిల్',
			description: 'వినియోగదారుడి ఇమెయిల్ చిరునామా'
		},
		{
			name: 'landline',
			display_name: 'ల్యాండ్‌లైన్ / స్థిర ఫోన్',
			description: `వినియోగదారుడి ల్యాండ్‌లైన్ నంబర్`
		},
		{
			name: 'mobile',
			display_name: 'మొబైల్',
			description: `వినియోగదారుడి మొబైల్ నంబర్`
		},
		{
			name: 'fax',
			display_name: 'ఫ్యాక్స్',
			description: `వినియోగదారుడి ఫ్యాక్స్ నంబర్`
		},
		{
			name: 'social',
			display_name: 'సోషల్ మీడియా',
			description: `వినియోగదారుడి సోషల్ మీడియా ప్రొఫైల్ హ్యాండిల్`
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
	const localeId = 'te-IN'; // Default locale for English display names

	// Step 0: If the data is already in there for this locale, skip...
	const artifactCount = await knex?.raw?.(
		`SELECT count(gender_id) AS masterdata_count FROM gender_by_locale WHERE locale_id = ?`,
		[localeId]
	);
	if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

	const now = knex.fn.now();

	// Step 1: Insert base gender names into gender_master
	const genders = [
		{ name: 'male', display_name: 'పురుషుడు', description: 'పురుషుడు' },
		{
			name: 'female',
			display_name: 'స్త్రీ',
			description: 'స్త్రీ'
		},
		{ name: 'other', display_name: 'ఇతరులు', description: 'ఇతరులు' }
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
		const localeId = 'te-IN'; // Default locale for English messages

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
					'సిస్టమ్ లోపం. దీన్ని సరిచేయడానికి పని చేస్తున్నాము. అసౌకర్యానికి క్షమించండి.'
			},
			{
				message_id: 'AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB',
				message_text: 'సిస్టమ్‌లో వినియోగదారు కనబడలేదు.'
			},
			{
				message_id: 'AUTH_REPOSITORY::UNSUPPORTED_USER_ROLE',
				message_text: 'మద్దతు లేని వినియోగదారు పాత్ర.'
			},
			{
				message_id: 'AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID',
				message_text: 'ఓటీపీ గడువు ముగిసింది లేదా చెల్లదు.'
			},
			{
				message_id: 'I18N_REPOSITORY::TRANSLATION_ERROR',
				message_text:
					'అనువాద లోపం. ఈ భాషకు మద్దతు లేదు. కలిగిన అసౌకర్యానికి క్షమించండి.'
			},
			// Server-level validation error messages
			{
				message_id: 'INPUT_VALIDATION_ERROR',
				message_text:
					'చెల్లని ఇన్‌పుట్. దయచేసి సమర్పించిన డేటాను తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_REQUIRED',
				message_text: 'అవసరం.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_INVALID',
				message_text: 'చెల్లదు.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ONLY',
				message_text: 'తప్పనిసరిగా అనుమతించబడిన విలువలలో ఒకటిగా ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ALLOW_ONLY',
				message_text: 'తప్పనిసరిగా అనుమతించబడిన విలువలలో ఒకటిగా ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_UNKNOWN',
				message_text: 'తెలియని విలువను కలిగి ఉంది.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_CUSTOM',
				message_text: 'అనుకూల ధ్రువీకరణ విఫలమైంది.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_MATCH',
				message_text: 'అనుమతించబడిన రకాలు ఏవీ సరిపోలడం లేదు.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_TYPES',
				message_text:
					'తప్పనిసరిగా అనుమతించబడిన రకాల్లో ఒకటి అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ANY',
				message_text: 'ఏదైనా ప్రత్యామ్నాయ స్కీమాతో సరిపోలడం విఫలమైంది.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ALL',
				message_text: 'అవసరమైన అన్ని ప్రత్యామ్నాయాలతో సరిపోలాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ONE',
				message_text:
					'అనుమతించబడిన ప్రత్యామ్నాయాలలో ఒకదానితో ఖచ్చితంగా సరిపోలాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE',
				message_text: 'తప్పనిసరిగా స్ట్రింగ్ అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMPTY',
				message_text: 'ఖాళీగా ఉండకూడదు.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MIN',
				message_text: 'కనీసం {{customInfo.limit}} అక్షరాల పొడవు ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MAX',
				message_text:
					'తప్పనిసరిగా గరిష్టంగా {{customInfo.limit}} అక్షరాల పొడవు ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LENGTH',
				message_text:
					'ఖచ్చితంగా {{customInfo.limit}} అక్షరాల పొడవు ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_ALPHANUM',
				message_text: 'అక్షరాలు మరియు సంఖ్యలను మాత్రమే కలిగి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMAIL',
				message_text:
					'తప్పక చెల్లుబాటు అయ్యే ఇమెయిల్ చిరునామా అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_PATTERN_BASE',
				message_text: 'చెల్లని ఆకృతిలో ఉంది.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_GUID',
				message_text:
					'తప్పనిసరిగా చెల్లుబాటు అయ్యే GUID/UUID అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HEX',
				message_text:
					'తప్పనిసరిగా చెల్లుబాటు అయ్యే హెక్సాడెసిమల్ స్ట్రింగ్ అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE64',
				message_text:
					'తప్పక చెల్లుబాటు అయ్యే బేస్64-ఎన్‌కోడ్ స్ట్రింగ్ అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_URI',
				message_text: 'తప్పనిసరిగా చెల్లుబాటు అయ్యే URL అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HOSTNAME',
				message_text: 'తప్పక చెల్లుబాటు అయ్యే హోస్ట్ పేరు అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_DOMAIN',
				message_text:
					'తప్పనిసరిగా చెల్లుబాటు అయ్యే డొమైన్ పేరు అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_IP',
				message_text:
					'తప్పనిసరిగా చెల్లుబాటు అయ్యే IP చిరునామా అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LOWERCASE',
				message_text: 'చిన్న అక్షరంలో ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_UPPERCASE',
				message_text: 'పెద్ద అక్షరంలో ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_TRIM',
				message_text: 'లీడింగ్ లేదా ట్రైలింగ్ స్పేస్‌లు ఉండకూడదు.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_BASE',
				message_text: 'ఒక సంఖ్య అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_INTEGER',
				message_text: 'పూర్ణాంకం అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MIN',
				message_text:
					'తప్పనిసరిగా {{customInfo.limit}} కంటే ఎక్కువగా లేదా సమానంగా ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MAX',
				message_text:
					'తప్పనిసరిగా {{customInfo.limit}} కంటే తక్కువగా లేదా సమానంగా ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_GREATER',
				message_text:
					'తప్పనిసరిగా {{customInfo.limit}} కంటే ఎక్కువగా ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_LESS',
				message_text:
					'తప్పనిసరిగా {{customInfo.limit}} కంటే తక్కువగా ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_POSITIVE',
				message_text: 'తప్పనిసరిగా సానుకూల సంఖ్య అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_NEGATIVE',
				message_text: 'తప్పనిసరిగా ప్రతికూల సంఖ్య అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MULTIPLE',
				message_text:
					'తప్పనిసరిగా {{customInfo.multiple}} యొక్క బహుళంగా ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_PRECISION',
				message_text:
					'తప్పనిసరిగా {{customInfo.limit}} దశాంశ స్థానాల కంటే ఎక్కువ ఉండకూడదు.'
			},
			{
				message_id: 'VALIDATION_ERROR::BOOLEAN_BASE',
				message_text: 'తప్పనిసరిగా బూలియన్ (నిజం/తప్పు) అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_BASE',
				message_text: 'తప్పనిసరిగా చెల్లుబాటు అయ్యే తేదీ అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_ISO',
				message_text: 'తప్పనిసరిగా ISO తేదీ ఆకృతిలో ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MIN',
				message_text:
					'తప్పనిసరిగా {{customInfo.limit}}లో లేదా తర్వాత ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MAX',
				message_text:
					'తప్పనిసరిగా {{customInfo.limit}}లో లేదా అంతకు ముందు ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_GREATER',
				message_text: 'తప్పనిసరిగా {{customInfo.limit}} తర్వాత ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_LESS',
				message_text:
					'తప్పనిసరిగా {{customInfo.limit}} కంటే ముందు ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_BASE',
				message_text: 'శ్రేణి అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MIN',
				message_text:
					'తప్పనిసరిగా కనీసం {{customInfo.limit}} అంశాలను కలిగి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MAX',
				message_text:
					'గరిష్టంగా {{customInfo.limit}} అంశాలను కలిగి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_LENGTH',
				message_text:
					'ఖచ్చితంగా {{customInfo.limit}} అంశాలను కలిగి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_UNIQUE',
				message_text: 'నకిలీ అంశాలను కలిగి ఉండకూడదు.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_INCLUDES',
				message_text: 'చెల్లని వస్తువును కలిగి ఉంది.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_HAS',
				message_text:
					'తప్పనిసరిగా కనీసం ఒక అవసరమైన వస్తువును కలిగి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_BASE',
				message_text: 'వస్తువుగా ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_UNKNOWN',
				message_text: 'తెలియని ఫీల్డ్ {{customInfo.key}}ని కలిగి ఉంది.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MIN',
				message_text: 'కనీసం {{customInfo.limit}} కీలను కలిగి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MAX',
				message_text:
					'గరిష్టంగా {{customInfo.limit}} కీలను కలిగి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_LENGTH',
				message_text:
					'ఖచ్చితంగా {{customInfo.limit}} కీలను కలిగి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_AND',
				message_text:
					'తప్పనిసరిగా అన్ని అవసరమైన ఫీల్డ్‌లను కలిగి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OR',
				message_text:
					'తప్పనిసరిగా పేర్కొన్న ఫీల్డ్‌లలో కనీసం ఒకదానిని కలిగి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_XOR',
				message_text:
					'తప్పనిసరిగా పేర్కొన్న ఫీల్డ్‌లలో ఒకదాన్ని మాత్రమే కలిగి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OXOR',
				message_text: 'పేర్కొన్న ఫీల్డ్‌లలో ఒకటి కంటే ఎక్కువ ఉండకూడదు.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITH',
				message_text: 'అవసరమైన సహచర ఫీల్డ్ లేదు.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITHOUT',
				message_text: 'పేర్కొన్న ఫీల్డ్‌తో ఉండకూడదు.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_BASE',
				message_text: 'బైనరీ డేటా అయి ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MIN',
				message_text: 'కనీసం {{customInfo.limit}} బైట్‌లు ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MAX',
				message_text: 'గరిష్టంగా {{customInfo.limit}} బైట్‌లు ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_LENGTH',
				message_text: 'ఖచ్చితంగా {{customInfo.limit}} బైట్‌లు ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_BASE',
				message_text: 'విధిగా ఉండాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_ARITY',
				message_text: 'ఖచ్చితంగా {{customInfo.n}} వాదనలను అంగీకరించాలి.'
			},
			{
				message_id: 'VALIDATION_ERROR::LINK_REF',
				message_text: 'చెల్లని సూచనను కలిగి ఉంది.'
			},
			// Users domain, Session Manager context messages
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_SMS',
				message_text:
					'Twyr కోసం మీ ఓటీపీ {{otp}}. ఇది {{expiryTime}} వరకు చెల్లుతుంది.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text: 'మీ నమోదు చేసిన మొబైల్ నంబర్‌కు ఓటీపీ పంపబడింది.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'లాగ్ అవుట్ చేసిన రోగి: {{userName}}.'
			},
			// Users domain, Session Manager context errors
			{
				message_id: 'USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'ఇప్పటికే ఒక క్రియాశీల సెషన్ ఉంది.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'క్రియాశీల సెషన్ లేదు.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'అనుమతి లేదు. ఈ సమస్యను పరిష్కరించడానికి సహాయ బృందాన్ని సంప్రదించండి.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'"username" దేశ కోడ్‌తో కూడిన చెల్లుబాటు చేసిన మొబైల్ నంబర్‌గా ఉండాలి, ఉదా. +911234567890'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'"username" చెల్లుబాటు చేసిన మొబైల్ నంబర్‌గా ఉండాలి మరియు "password" చెల్లుబాటు చేసిన 4-అంకెల OTP గా ఉండాలి'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'"username" చెల్లుబాటు చేసిన మొబైల్ నంబర్ గా ఉండాలి మరియు "password" చెల్లుబాటు చేసిన 4-అంకెల OTP గా ఉండాలి'
			},
			// Users domain, Profile context errors
			{
				message_id: 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.first_name}} {{user.last_name}} కు ఈ చర్యను చేయడానికి అనుమతి లేదు.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.first_name}} {{body.last_name}} కోసం ప్రొఫైల్ సృష్టించలేము. ఓటీపీ సరిపోలలేదు.'
			},
			{
				message_id: 'USERS::PROFILE::MOBILE_NO_MISMATCH',
				message_text:
					'{{body.first_name}} {{body.last_name}} కోసం ప్రొఫైల్ సృష్టించలేము. మొబైల్ నంబర్లు సరిపోలలేదు.'
			},
			{
				message_id: 'USERS::PROFILE::MINOR_USER',
				message_text:
					'{{body.first_name}} {{body.last_name}} కోసం ప్రొఫైల్ సృష్టించలేము. వినియోగదారు మైనర్.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'ప్రొఫైల్ సృష్టించడ కోసం అభ్యర్థన చెల్లదు: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లదు.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'ప్రొఫైల్ నవీకరణ కోసం అభ్యర్థన చెల్లదు: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లదు.'
			},
			// locale-specific validation errors for new surfaces
			{
				message_id: 'USERS::ADDRESS::INVALID_CREATE_REQUEST',
				message_text:
					'చెల్లని చిరునామా సృష్టి అభ్యర్థన: ఒకటి లేదా ఎక్కువ లక్షణాలు చెల్లనివి.'
			},
			{
				message_id: 'USERS::ADDRESS::INVALID_UPDATE_REQUEST',
				message_text:
					'చెల్లని చిరునామా నవీకరణ అభ్యర్థన: ఒకటి లేదా ఎక్కువ లక్షణాలు చెల్లనివి.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'చెల్లని సంప్రదింపు సృష్టి అభ్యర్థన: ఒకటి లేదా ఎక్కువ లక్షణాలు చెల్లనివి.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'చెల్లని సంప్రదింపు నవీకరణ అభ్యర్థन: ఒకటి లేదా ఎక్కువ లక్షణాలు చెల్లనివి.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'చెల్లని ప్రాంతం సృష్టి అభ్యర్థన: ఒకటి లేదా ఎక్కువ లక్షణాలు చెల్లనివి.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'చెల్లని ప్రాంతం నవీకరణ అభ్యర్థన: ఒకటి లేదా ఎక్కువ లక్షణాలు చెల్లనివి.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_CREATE_REQUEST',
				message_text:
					'చెల్లని సంరక్షక సంబంధ సృష్టి అభ్యర్థన: ఒకటి లేదా ఎక్కువ లక్షణాలు చెల్లనివి.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_UPDATE_REQUEST',
				message_text:
					'చెల్లని సంరక్షక సంబంధ నవీకరణ అభ్యర్థన: ఒకటి లేదా ఎక్కువ లక్షణాలు చెల్లనివి.'
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
	console.log('Processing 008-master-data-by-locale-seed-te-IN.cjs');
	// Step 1: Insert master data into contact types master
	await insertContactTypeMasterData(knex);

	// Step 2: Insert master data into genders master
	await insertGenderMasterData(knex);

	// Step 3: Insert master data into the system message master
	await insertSystemMessageMasterData(knex);
};
