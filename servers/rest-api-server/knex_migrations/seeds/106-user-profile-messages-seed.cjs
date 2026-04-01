'use strict';

exports.seed = async function (knex) {
	console.log('Processing 106-user-profile-messages-seed.cjs');

	const firstMessageId = 'USERS::PROFILE::INSUFFICIENT_PERMISSIONS';
	const existingMessage = await knex?.raw?.(
		`SELECT id FROM system_message_master WHERE id = ?`,
		[firstMessageId]
	);
	if (existingMessage?.rows?.[0]?.['id']) return;

	const now = knex.fn.now();

	const messageIds = [
		'USERS::PROFILE::INSUFFICIENT_PERMISSIONS',
		'USERS::PROFILE::INVALID_OTP',
		'USERS::PROFILE::USER_ALREADY_EXISTS',
		'USERS::PROFILE::INVALID_CREATE_REQUEST',
		'USERS::PROFILE::INVALID_UPDATE_REQUEST',
		'USERS::CONTACT::INVALID_CREATE_REQUEST',
		'USERS::CONTACT::INVALID_UPDATE_REQUEST',
		'USERS::CONTACT::CANNOT_DELETE_PRIMARY',
		'USERS::LOCALE::INVALID_CREATE_REQUEST',
		'USERS::LOCALE::INVALID_UPDATE_REQUEST',
		'USERS::LOCALE::CANNOT_DELETE_PRIMARY'
	];

	await knex('system_message_master').insert(
		messageIds.map((messageId) => ({
			id: messageId,
			created_at: now,
			updated_at: now
		}))
	);
};
