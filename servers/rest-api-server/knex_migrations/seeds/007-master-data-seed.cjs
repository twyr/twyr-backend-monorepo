/* eslint-disable security/detect-object-injection */
'use strict';

const insertContactTypeMasterData = async function insertContactTypeMasterData(
	knex
) {
	// Step 0: If the data is already in there for this locale, skip...
	const artifactCount = await knex?.raw?.(
		`SELECT count(id) AS masterdata_count FROM contact_type_master`
	);
	if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

	const now = knex.fn.now();

	// Step 1: Insert base contact type names into contact_type_master
	const contactTypes = [
		{
			name: 'email',
			display_name: 'Email',
			description: 'Email address of the User'
		},
		{
			name: 'landline',
			display_name: 'Landline / Fixed Line',
			description: `Phone number of the User's fixed line`
		},
		{
			name: 'mobile',
			display_name: 'Mobile',
			description: `Mobile number of the User`
		},
		{
			name: 'fax',
			display_name: 'Fax',
			description: `Fax number of the User`
		},
		{
			name: 'social',
			display_name: 'Social Media',
			description: `Social Media Profile handle of the User`
		}
	];

	// Insert base contact type names and get back generated IDs
	await knex('contact_type_master').insert(
		contactTypes.map((ct) => ({
			name: ct.name,
			created_at: now,
			updated_at: now
		}))
	);
};

const insertGenderMasterData = async function insertGenderMasterData(knex) {
	// Step 0: If the data is already in the master, skip...
	const artifactCount = await knex?.raw?.(
		`SELECT count(id) AS masterdata_count FROM gender_master`
	);
	if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

	const now = knex.fn.now();

	// Step 1: Insert base gender names into gender_master
	const genders = [
		{ name: 'male', display_name: 'Male', description: 'Male gender' },
		{
			name: 'female',
			display_name: 'Female',
			description: 'Female gender'
		},
		{ name: 'other', display_name: 'Other', description: 'Other gender' }
	];

	await knex('gender_master').insert(
		genders.map((g) => ({
			name: g.name,
			created_at: now,
			updated_at: now
		}))
	);
};

const insertSystemMessageMasterData =
	async function insertSystemMessageMasterData(knex) {
		// Step 0: If the data is already in the master, skip...
		const artifactCount = await knex?.raw?.(
			`SELECT count(id) AS masterdata_count FROM system_message_master`
		);
		if (Number?.(artifactCount?.rows?.[0]['masterdata_count'])) return;

		const now = knex.fn.now();

		// Define system messages with their message codes
		const messages = [
			// Server-level errors
			{
				message_id: 'UNKNOWN_ERROR',
				message_text:
					"System Error. We're working to fix it. Apologies for the inconvenience"
			},
			{
				message_id: 'AUTH_REPOSITORY::USER_NOT_FOUND_IN_DB',
				message_text: 'User not found in the system.'
			},
			{
				message_id: 'AUTH_REPOSITORY::UNSUPPORTED_USER_ROLE',
				message_text: 'Unsupported user role.'
			},
			{
				message_id: 'AUTH_REPOSITORY::OTP_EXPIRED_OR_INVALID',
				message_text: 'OTP expired or invalid.'
			},
			{
				message_id: 'I18N_REPOSITORY::TRANSLATION_ERROR',
				message_text:
					'Translation Error. Language not supported. Apologies for the inconvenience'
			},
			// Server-level validation error messages
			{
				message_id: 'INPUT_VALIDATION_ERROR',
				message_text:
					'Invalid input. Please check the submitted data and try again.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_REQUIRED',
				message_text: 'Is required.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_INVALID',
				message_text: 'Is invalid.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ONLY',
				message_text: 'Must be one of the allowed values.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_ALLOW_ONLY',
				message_text: 'Must be one of the allowed values.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_UNKNOWN',
				message_text: 'Contains an unknown value.'
			},
			{
				message_id: 'VALIDATION_ERROR::ANY_CUSTOM',
				message_text: 'Failed custom validation.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_MATCH',
				message_text: 'Does not match any of the allowed types.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_TYPES',
				message_text: 'Must be one of the allowed types.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ANY',
				message_text: 'Failed to match any alternative schema.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ALL',
				message_text: 'Must match all of the required alternatives.'
			},
			{
				message_id: 'VALIDATION_ERROR::ALTERNATIVES_ONE',
				message_text:
					'Must match exactly one of the allowed alternatives.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE',
				message_text: 'Must be a string.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMPTY',
				message_text: 'Cannot be empty.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MIN',
				message_text:
					'Must be at least {{customInfo.limit}} characters long.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_MAX',
				message_text:
					'Must be at most {{customInfo.limit}} characters long.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LENGTH',
				message_text:
					'Must be exactly {{customInfo.limit}} characters long.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_ALPHANUM',
				message_text: 'Must contain only letters and numbers.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_EMAIL',
				message_text: 'Must be a valid email address.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_PATTERN_BASE',
				message_text: 'Is in an invalid format.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_GUID',
				message_text: 'Must be a valid GUID/UUID.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HEX',
				message_text: 'Must be a valid hexadecimal string.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_BASE64',
				message_text: 'Must be a valid base64-encoded string.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_URI',
				message_text: 'Must be a valid URL.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_HOSTNAME',
				message_text: 'Must be a valid hostname.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_DOMAIN',
				message_text: 'Must be a valid domain name.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_IP',
				message_text: 'Must be a valid IP address.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_LOWERCASE',
				message_text: 'Must be in lowercase.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_UPPERCASE',
				message_text: 'Must be in uppercase.'
			},
			{
				message_id: 'VALIDATION_ERROR::STRING_TRIM',
				message_text: 'Must not have leading or trailing spaces.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_BASE',
				message_text: 'Must be a number.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_INTEGER',
				message_text: 'Must be an integer.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MIN',
				message_text:
					'Must be greater than or equal to {{customInfo.limit}}.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MAX',
				message_text:
					'Must be less than or equal to {{customInfo.limit}}.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_GREATER',
				message_text: 'Must be greater than {{customInfo.limit}}.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_LESS',
				message_text: 'Must be less than {{customInfo.limit}}.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_POSITIVE',
				message_text: 'Must be a positive number.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_NEGATIVE',
				message_text: 'Must be a negative number.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_MULTIPLE',
				message_text: 'Must be a multiple of {{customInfo.multiple}}.'
			},
			{
				message_id: 'VALIDATION_ERROR::NUMBER_PRECISION',
				message_text:
					'Must have no more than {{customInfo.limit}} decimal places.'
			},
			{
				message_id: 'VALIDATION_ERROR::BOOLEAN_BASE',
				message_text: 'Must be a boolean (true/false).'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_BASE',
				message_text: 'Must be a valid date.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_ISO',
				message_text: 'Must be in ISO date format.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MIN',
				message_text: 'Must be on or after {{customInfo.limit}}.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_MAX',
				message_text: 'Must be on or before {{customInfo.limit}}.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_GREATER',
				message_text: 'Must be after {{customInfo.limit}}.'
			},
			{
				message_id: 'VALIDATION_ERROR::DATE_LESS',
				message_text: 'Must be before {{customInfo.limit}}.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_BASE',
				message_text: 'Must be an array.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MIN',
				message_text:
					'Must contain at least {{customInfo.limit}} items.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_MAX',
				message_text: 'Must contain at most {{customInfo.limit}} items.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_LENGTH',
				message_text: 'Must contain exactly {{customInfo.limit}} items.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_UNIQUE',
				message_text: 'Must not contain duplicate items.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_INCLUDES',
				message_text: 'Contains an invalid item.'
			},
			{
				message_id: 'VALIDATION_ERROR::ARRAY_HAS',
				message_text: 'Must contain at least one required item.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_BASE',
				message_text: 'Must be an object.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_UNKNOWN',
				message_text: 'Contains an unknown field {{customInfo.key}}.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MIN',
				message_text: 'Must have at least {{customInfo.limit}} keys.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_MAX',
				message_text: 'Must have at most {{customInfo.limit}} keys.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_LENGTH',
				message_text: 'Must have exactly {{customInfo.limit}} keys.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_AND',
				message_text: 'Must contain all required fields together.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OR',
				message_text:
					'Must contain at least one of the specified fields.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_XOR',
				message_text: 'Must contain only one of the specified fields.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_OXOR',
				message_text:
					'Must not contain more than one of the specified fields.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITH',
				message_text: 'Is missing a required companion field.'
			},
			{
				message_id: 'VALIDATION_ERROR::OBJECT_WITHOUT',
				message_text: 'Must not be present with the specified field.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_BASE',
				message_text: 'Must be binary data.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MIN',
				message_text: 'Must be at least {{customInfo.limit}} bytes.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_MAX',
				message_text: 'Must be at most {{customInfo.limit}} bytes.'
			},
			{
				message_id: 'VALIDATION_ERROR::BINARY_LENGTH',
				message_text: 'Must be exactly {{customInfo.limit}} bytes.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_BASE',
				message_text: 'Must be a function.'
			},
			{
				message_id: 'VALIDATION_ERROR::FUNCTION_ARITY',
				message_text: 'Must accept exactly {{customInfo.n}} arguments.'
			},
			{
				message_id: 'VALIDATION_ERROR::LINK_REF',
				message_text: 'Contains an invalid reference.'
			},
			// Users domain, Session Manager context messages
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_SMS',
				message_text:
					'Your OTP for Twyr is {{otp}}. Valid until {{expiryTime}}.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text:
					'An OTP has been sent to your registered mobile number.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'Logged out user: {{userName}}.'
			},
			// Users domain, Session Manager context errors
			{
				message_id: 'USERS::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'Active session already exists.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'No active session.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'Permission denied. Contact the administration team to fix this issue.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'Invalid OTP request: username must be a valid mobile number with country code.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'Invalid OTP validation: username must be a valid mobile number and password must be a valid OTP.'
			},
			{
				message_id: 'USERS::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'Invalid login request: username must be a valid mobile number and password must be a valid OTP.'
			},
			{
				message_id: 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{body.first_name}} {{body.last_name}} is not authorized to perform this operation'
			},
			// Users domain, Profile context errors
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'Profile cannot be created for {{body.first_name}} {{body.last_name}}. OTP mismatch.'
			},
			{
				message_id: 'USERS::PROFILE::MOBILE_NO_MISMATCH',
				message_text:
					'Profile cannot be created for {{body.first_name}} {{body.last_name}}. Mobile numbers do not match.'
			},
			{
				message_id: 'USERS::PROFILE::MINOR_USER',
				message_text:
					'Profile cannot be created for {{body.first_name}} {{body.last_name}}. User is a minor.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'Invalid profile create request: one or more attributes are invalid'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'Invalid profile update request: one or more attributes are invalid'
			},
			// Validation errors for the new surfaces
			{
				message_id: 'USERS::ADDRESS::INVALID_CREATE_REQUEST',
				message_text:
					'Invalid address create request: one or more attributes are invalid.'
			},
			{
				message_id: 'USERS::ADDRESS::INVALID_UPDATE_REQUEST',
				message_text:
					'Invalid address update request: one or more attributes are invalid.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'Invalid contact create request: one or more attributes are invalid.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'Invalid contact update request: one or more attributes are invalid.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'Invalid locale create request: one or more attributes are invalid.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'Invalid locale update request: one or more attributes are invalid.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_CREATE_REQUEST',
				message_text:
					'Invalid guardian create request: one or more attributes are invalid.'
			},
			{
				message_id: 'USERS::GUARDIAN::INVALID_UPDATE_REQUEST',
				message_text:
					'Invalid guardian update request: one or more attributes are invalid.'
			}
		];

		// Step 1: Insert base message IDs into system_message_master
		const baseMessages = messages.map((m) => ({
			id: m.message_id,
			created_at: now,
			updated_at: now
		}));

		await knex('system_message_master')
			.insert(baseMessages)
			.onConflict('id')
			.ignore();
	};

exports.seed = async function (knex) {
	console.log('Processing 007-master-data-seed.cjs');
	// Step 1: Insert master data into contact types master
	await insertContactTypeMasterData(knex);

	// Step 2: Insert master data into genders master
	await insertGenderMasterData(knex);

	// Step 3: Insert master data into the system message master
	await insertSystemMessageMasterData(knex);
};
