'use strict';

const insertUserProfileMessagesByLocale =
	async function insertUserProfileMessagesByLocale(knex) {
		const localeId = 'ml-IN';
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
					'{{user.mobile_no}} ന് ഈ പ്രവർത്തനം നടത്താൻ അനുമതിയില്ല.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}}യ്ക്കായി പ്രൊഫൈൽ സൃഷ്ടിക്കാനാകില്ല. OTP പൊരുത്തപ്പെടുന്നില്ല.'
			},
			{
				message_id: 'USERS::PROFILE::USER_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}}യ്ക്കായി പ്രൊഫൈൽ സൃഷ്ടിക്കാനാകില്ല. ഈ മൊബൈൽ നമ്പറിന് ഇതിനകം ഒരു ഉപയോക്താവ് നിലവിലുണ്ട്.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'അസാധുവായ പ്രൊഫൈൽ സൃഷ്ടിക്കൽ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'അസാധുവായ പ്രൊഫൈൽ പുതുക്കൽ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'അസാധുവായ കോൺടാക്റ്റ് സൃഷ്ടിക്കൽ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'അസാധുവായ കോൺടാക്റ്റ് പുതുക്കൽ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'അസാധുവായ ലോക്കേൽ സൃഷ്ടിക്കൽ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'അസാധുവായ ലോക്കേൽ പുതുക്കൽ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
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
		'Processing 107-user-profile-messages-by-locale-seed-ml-IN.cjs'
	);
	await insertUserProfileMessagesByLocale(knex);
};
