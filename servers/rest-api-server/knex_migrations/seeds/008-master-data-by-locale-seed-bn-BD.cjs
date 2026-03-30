/* eslint-disable security/detect-object-injection */
'use strict';

const insertContactTypeMasterData = async function insertContactTypeMasterData(
	knex
) {
	const localeId = 'bn-BD'; // Default locale for Bengali (Bangladesh) display names

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
			display_name: 'ইমেইল',
			description: 'ব্যবহারকারীর ইমেইল ঠিকানা'
		},
		{
			name: 'landline',
			display_name: 'ল্যান্ডলাইন / স্থির ফোন',
			description: 'ব্যবহারকারীর ল্যান্ডলাইন ফোন নম্বর'
		},
		{
			name: 'mobile',
			display_name: 'মোবাইল',
			description: 'ব্যবহারকারীর মোবাইল নম্বর'
		},
		{
			name: 'fax',
			display_name: 'ফ্যাক্স',
			description: 'ব্যবহারকারীর ফ্যাক্স নম্বর'
		},
		{
			name: 'social',
			display_name: 'সোশ্যাল মিডিয়া',
			description: 'ব্যবহারকারীর সোশ্যাল মিডিয়া প্রোফাইল হ্যান্ডেল'
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
	const localeId = 'bn-BD'; // Default locale for Bengali (Bangladesh) display names

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
			display_name: 'পুরুষ',
			description: 'পুরুষ'
		},
		{
			name: 'female',
			display_name: 'মহিলা',
			description: 'মহিলা'
		},
		{
			name: 'other',
			display_name: 'অন্যান্য',
			description: 'অন্যান্য'
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
		const localeId = 'bn-BD'; // Default locale for Bengali (Bangladesh) messages

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
					'সিস্টেম ত্রুটি। আমরা এটি ঠিক করার জন্য কাজ করছি। অসুবিধার জন্য দুঃখিত।'
			},
			{
				message_id: 'AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB',
				message_text: 'সিস্টেমে ব্যবহারকারীকে পাওয়া যায়নি।'
			},
			{
				message_id: 'AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID',
				message_text: 'OTP অবৈধ অথবা এর মেয়াদ শেষ হয়ে গেছে।'
			},
			{
				message_id: 'I18N_REPOSITORY::TRANSLATION_ERROR',
				message_text:
					'অনুবাদ ত্রুটি। ভাষাটি সমর্থিত নয়। অসুবিধার জন্য দুঃখিত।'
			},
			{
				message_id: 'INPUT_VALIDATION_ERROR',
				message_text:
					'অবৈধ ইনপুট। অনুগ্রহ করে পাঠানো তথ্য যাচাই করে আবার চেষ্টা করুন।'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_REQUIRED',
				message_text: 'প্রয়োজনীয়।'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_INVALID',
				message_text: 'অবৈধ।'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ONLY',
				message_text: 'অনুমোদিত মানগুলোর একটি হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ALLOW_ONLY',
				message_text: 'অনুমোদিত মানগুলোর একটি হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_UNKNOWN',
				message_text: 'অজানা মান রয়েছে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_CUSTOM',
				message_text: 'কাস্টম যাচাই ব্যর্থ হয়েছে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_MATCH',
				message_text: 'অনুমোদিত কোনো ধরনের সাথেই মেলে না।'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_TYPES',
				message_text: 'অনুমোদিত ধরনগুলোর একটি হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ANY',
				message_text: 'কোনো বিকল্প স্কিমার সাথে মেলেনি।'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ALL',
				message_text: 'সব প্রয়োজনীয় বিকল্পের সাথে মিলতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ONE',
				message_text: 'অনুমোদিত বিকল্পগুলোর ঠিক একটির সাথে মিলতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE',
				message_text: 'স্ট্রিং হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMPTY',
				message_text: 'খালি হতে পারবে না।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MIN',
				message_text: 'কমপক্ষে {{customInfo.limit}} অক্ষরের হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MAX',
				message_text: 'সর্বোচ্চ {{customInfo.limit}} অক্ষরের হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LENGTH',
				message_text: 'ঠিক {{customInfo.limit}} অক্ষরের হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_ALPHANUM',
				message_text: 'শুধুমাত্র অক্ষর এবং সংখ্যা থাকতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMAIL',
				message_text: 'একটি বৈধ ইমেইল ঠিকানা হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_PATTERN_BASE',
				message_text: 'অবৈধ ফরম্যাটে রয়েছে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_GUID',
				message_text: 'একটি বৈধ GUID/UUID হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HEX',
				message_text: 'একটি বৈধ হেক্সাডেসিমাল স্ট্রিং হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE64',
				message_text: 'একটি বৈধ base64-এনকোডেড স্ট্রিং হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_URI',
				message_text: 'একটি বৈধ URL হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HOSTNAME',
				message_text: 'একটি বৈধ হোস্টনেম হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_DOMAIN',
				message_text: 'একটি বৈধ ডোমেইন নাম হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_IP',
				message_text: 'একটি বৈধ IP ঠিকানা হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LOWERCASE',
				message_text: 'লোয়ারকেসে হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_UPPERCASE',
				message_text: 'আপারকেসে হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_TRIM',
				message_text: 'শুরু বা শেষে ফাঁকা স্থান থাকা চলবে না।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_BASE',
				message_text: 'সংখ্যা হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_INTEGER',
				message_text: 'পূর্ণসংখ্যা হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MIN',
				message_text:
					'{{customInfo.limit}} এর চেয়ে বড় বা সমান হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MAX',
				message_text:
					'{{customInfo.limit}} এর চেয়ে ছোট বা সমান হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_GREATER',
				message_text: '{{customInfo.limit}} এর চেয়ে বড় হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_LESS',
				message_text: '{{customInfo.limit}} এর চেয়ে ছোট হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_POSITIVE',
				message_text: 'ধনাত্মক সংখ্যা হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_NEGATIVE',
				message_text: 'ঋণাত্মক সংখ্যা হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MULTIPLE',
				message_text: '{{customInfo.multiple}} এর গুণিতক হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_PRECISION',
				message_text:
					'{{customInfo.limit}} এর বেশি দশমিক ঘর থাকা চলবে না।'
			},
			{
				message_id: 'VALIDATION_ERROR::BOOLEAN_BASE',
				message_text: 'বুলিয়ান (true/false) হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_BASE',
				message_text: 'একটি বৈধ তারিখ হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_ISO',
				message_text: 'ISO তারিখ ফরম্যাটে হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MIN',
				message_text: '{{customInfo.limit}} অথবা তার পরে হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MAX',
				message_text: '{{customInfo.limit}} অথবা তার আগে হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_GREATER',
				message_text: '{{customInfo.limit}} এর পরে হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_LESS',
				message_text: '{{customInfo.limit}} এর আগে হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_BASE',
				message_text: 'অ্যারে হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MIN',
				message_text: 'কমপক্ষে {{customInfo.limit}}টি আইটেম থাকতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MAX',
				message_text: 'সর্বোচ্চ {{customInfo.limit}}টি আইটেম থাকতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_LENGTH',
				message_text: 'ঠিক {{customInfo.limit}}টি আইটেম থাকতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_UNIQUE',
				message_text: 'ডুপ্লিকেট আইটেম থাকা চলবে না।'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_INCLUDES',
				message_text: 'একটি অবৈধ আইটেম রয়েছে।'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_HAS',
				message_text: 'কমপক্ষে একটি প্রয়োজনীয় আইটেম থাকতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_BASE',
				message_text: 'অবজেক্ট হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_UNKNOWN',
				message_text: 'অজানা ফিল্ড {{customInfo.key}} রয়েছে।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MIN',
				message_text: 'কমপক্ষে {{customInfo.limit}}টি কী থাকতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MAX',
				message_text: 'সর্বোচ্চ {{customInfo.limit}}টি কী থাকতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_LENGTH',
				message_text: 'ঠিক {{customInfo.limit}}টি কী থাকতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_AND',
				message_text: 'সব প্রয়োজনীয় ফিল্ড একসাথে থাকতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OR',
				message_text: 'নির্দিষ্ট ফিল্ডগুলোর অন্তত একটি থাকতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_XOR',
				message_text: 'নির্দিষ্ট ফিল্ডগুলোর মাত্র একটি থাকতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OXOR',
				message_text: 'নির্দিষ্ট ফিল্ডগুলোর একটির বেশি থাকা যাবে না।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITH',
				message_text: 'প্রয়োজনীয় সহগামী ফিল্ড অনুপস্থিত।'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITHOUT',
				message_text: 'নির্দিষ্ট ফিল্ডের সাথে উপস্থিত থাকা যাবে না।'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_BASE',
				message_text: 'বাইনারি ডেটা হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MIN',
				message_text: 'কমপক্ষে {{customInfo.limit}} বাইট হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MAX',
				message_text: 'সর্বোচ্চ {{customInfo.limit}} বাইট হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_LENGTH',
				message_text: 'ঠিক {{customInfo.limit}} বাইট হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_BASE',
				message_text: 'ফাংশন হতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_ARITY',
				message_text:
					'ঠিক {{customInfo.n}}টি আর্গুমেন্ট গ্রহণ করতে হবে।'
			},
			{
				message_id: 'VALIDATION_ERROR::LINK_REF',
				message_text: 'অবৈধ রেফারেন্স রয়েছে।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_SMS',
				message_text:
					'Twyr-এর জন্য আপনার OTP হলো {{otp}}। এটি {{expiryTime}} পর্যন্ত বৈধ।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text:
					'আপনার নিবন্ধিত মোবাইল নম্বরে একটি OTP পাঠানো হয়েছে।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'ব্যবহারকারী লগ আউট হয়েছে: {{userName}}।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'সক্রিয় সেশন ইতিমধ্যেই রয়েছে।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'কোনো সক্রিয় সেশন নেই।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'অনুমতি অস্বীকৃত। এই সমস্যার সমাধানের জন্য প্রশাসন দলের সাথে যোগাযোগ করুন।'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'"username" দেশ কোডসহ একটি বৈধ মোবাইল নম্বর হতে হবে, যেমন +911234567890'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'"username" একটি বৈধ মোবাইল নম্বর হতে হবে এবং "password" একটি বৈধ 4-সংখ্যার OTP হতে হবে'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'"username" একটি বৈধ মোবাইল নম্বর হতে হবে এবং "password" একটি বৈধ 4-সংখ্যার OTP হতে হবে'
			},
			{
				message_id: 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.first_name}} {{user.last_name}} এই কাজটি করার জন্য অনুমোদিত নন।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.first_name}} {{body.last_name}} এর জন্য প্রোফাইল তৈরি করা যায়নি। OTP মেলেনি।'
			},
			{
				message_id: 'USERS::PROFILE::MOBILE_NO_MISMATCH',
				message_text:
					'{{body.first_name}} {{body.last_name}} এর জন্য প্রোফাইল তৈরি করা যায়নি। মোবাইল নম্বরগুলো মেলেনি।'
			},
			{
				message_id: 'USERS::PROFILE::MINOR_USER',
				message_text:
					'{{body.first_name}} {{body.last_name}} এর জন্য প্রোফাইল তৈরি করা যায়নি। ব্যবহারকারী অপ্রাপ্তবয়স্ক।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'অবৈধ প্রোফাইল তৈরির অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'অবৈধ প্রোফাইল আপডেট অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::ADDRESS::INVALID_CREATE_REQUEST',
				message_text:
					'অবৈধ ঠিকানা তৈরির অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::ADDRESS::INVALID_UPDATE_REQUEST',
				message_text:
					'অবৈধ ঠিকানা আপডেট অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'অবৈধ যোগাযোগ তৈরির অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'অবৈধ যোগাযোগ আপডেট অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'অবৈধ লোকেল তৈরির অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'অবৈধ লোকেল আপডেট অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_CREATE_REQUEST',
				message_text:
					'অবৈধ অভিভাবক তৈরির অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_UPDATE_REQUEST',
				message_text:
					'অবৈধ অভিভাবক আপডেট অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
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
	console.log('Processing 008-master-data-by-locale-seed-bn-BD.cjs');
	await insertContactTypeMasterData(knex);
	await insertGenderMasterData(knex);
	await insertSystemMessageMasterData(knex);
};
