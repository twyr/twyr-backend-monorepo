'use strict';

const insertUserProfileMessagesByLocale =
	async function insertUserProfileMessagesByLocale(knex) {
		const localeId = 'en-IN';
		const firstMessageId = 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS';

		const existingMessage = await knex?.raw?.(
			`SELECT message_id FROM system_message_by_locale WHERE locale_id = ? AND message_id = ?`,
			[localeId, firstMessageId]
		);
		if (existingMessage?.rows?.[0]?.['message_id']) return;

		const now = knex.fn.now();

		const messages = [
			{
				message_id: 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.mobile_no}} is not authorized to perform this operation.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'Profile cannot be created for {{body.mobile_no}}. OTP mismatch.'
			},
			{
				message_id: 'USERS::PROFILE::USER_ALREADY_EXISTS',
				message_text:
					'Profile cannot be created for {{body.mobile_no}}. A user already exists for this mobile number.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'Invalid profile create request: one or more attributes are invalid.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'Invalid profile update request: one or more attributes are invalid.'
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
				message_id: 'USERS::CONTACT::CANNOT_DELETE_PRIMARY',
				message_text: 'Cannot delete the primary contact.'
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
				message_id: 'USERS::LOCALE::CANNOT_DELETE_PRIMARY',
				message_text: 'Cannot delete the primary locale.'
			}
		];

		await knex('system_message_by_locale').insert(
			messages.map((message) => ({
				message_id: message.message_id,
				locale_id: localeId,
				message_text: message.message_text,
				created_at: now,
				updated_at: now
			}))
		);
	};

exports.seed = async function (knex) {
	console.log(
		'Processing 107-user-profile-messages-by-locale-seed-en-IN.cjs'
	);
	await insertUserProfileMessagesByLocale(knex);
};
