'use strict';

const insertSystemAdminMessagesByLocale =
	async function insertSystemAdminMessagesByLocale(knex) {
		const localeId = 'ml-IN';
		const firstMessageId = 'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_SMS';

		const existingMessage = await knex?.raw?.(
			`SELECT message_id FROM system_message_by_locale WHERE locale_id = ? AND message_id = ?`,
			[localeId, firstMessageId]
		);
		if (existingMessage?.rows?.[0]?.['message_id']) return;

		const now = knex.fn.now();
		const messages = [
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_SMS',
				message_text:
					'Twyr-നുള്ള നിങ്ങളുടെ സിസ്റ്റം അഡ്മിൻ OTP {{otp}} ആണ്. ഇത് {{expiryTime}} വരെ സാധുവാണ്.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text:
					'നിങ്ങളുടെ രജിസ്റ്റർ ചെയ്ത മൊബൈൽ നമ്പറിലേക്ക് OTP അയച്ചിട്ടുണ്ട്.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'സിസ്റ്റം അഡ്മിൻ ലോഗ് ഔട്ട് ചെയ്തു: {{userName}}.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'സജീവമായ സിസ്റ്റം അഡ്മിൻ സെഷൻ ഇതിനകം നിലവിലുണ്ട്.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'സജീവമായ സിസ്റ്റം അഡ്മിൻ സെഷൻ ഒന്നുമില്ല.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'സജീവമായ സിസ്റ്റം അഡ്മിൻ സെഷന് ഈ പ്രവർത്തനത്തിന് അനുമതിയില്ല.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'അസാധുവായ OTP അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'അസാധുവായ OTP പരിശോധന അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'അസാധുവായ ലോഗിൻ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.mobile_no}} ന് ഈ പ്രവർത്തനം നടത്താൻ അനുമതിയില്ല.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}}യ്ക്കായി പ്രൊഫൈൽ സൃഷ്ടിക്കാനാകില്ല. OTP പൊരുത്തപ്പെടുന്നില്ല.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::PROFILE::SYSTEM_ADMIN_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}}യ്ക്കായി പ്രൊഫൈൽ സൃഷ്ടിക്കാനാകില്ല. ഈ മൊബൈൽ നമ്പറിന് ഇതിനകം ഒരു സിസ്റ്റം അഡ്മിൻ നിലവിലുണ്ട്.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'അസാധുവായ പ്രൊഫൈൽ സൃഷ്ടിക്കൽ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'അസാധുവായ പ്രൊഫൈൽ പുതുക്കൽ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'അസാധുവായ കോൺടാക്റ്റ് സൃഷ്ടിക്കൽ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'അസാധുവായ കോൺടാക്റ്റ് പുതുക്കൽ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'അസാധുവായ ലോക്കേൽ സൃഷ്ടിക്കൽ അഭ്യർത്ഥന: ഒരു അല്ലെങ്കിൽ കൂടുതൽ ഗുണങ്ങൾ അസാധുവാണ്.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_UPDATE_REQUEST',
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
		'Processing 109-system-admin-messages-by-locale-seed-ml-IN.cjs'
	);
	await insertSystemAdminMessagesByLocale(knex);
};
