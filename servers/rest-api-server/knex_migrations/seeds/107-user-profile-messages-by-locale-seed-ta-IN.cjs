'use strict';

const insertUserProfileMessagesByLocale =
	async function insertUserProfileMessagesByLocale(knex) {
		const localeId = 'ta-IN';
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
					'{{user.mobile_no}} அவர்களுக்கு இந்த செயலை செய்ய அனுமதி இல்லை.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} க்கான சுயவிவரத்தை உருவாக்க முடியாது. OTP பொருந்தவில்லை.'
			},
			{
				message_id: 'USERS::PROFILE::USER_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} க்கான சுயவிவரத்தை உருவாக்க முடியாது. இந்த மொபைல் எண்ணிற்கு ஏற்கனவே ஒரு பயனர் உள்ளார்.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'தவறான சுயவிவர உருவாக்க கோரிக்கை: ஒரு அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'தவறான சுயவிவர புதுப்பிப்பு கோரிக்கை: ஒரு அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'தவறான தொடர்பு உருவாக்க கோரிக்கை: ஒரு அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'தவறான தொடர்பு புதுப்பிப்பு கோரிக்கை: ஒரு அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'தவறான மொழிமுறை உருவாக்க கோரிக்கை: ஒரு அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'தவறான மொழிமுறை புதுப்பிப்பு கோரிக்கை: ஒரு அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
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
		'Processing 107-user-profile-messages-by-locale-seed-ta-IN.cjs'
	);
	await insertUserProfileMessagesByLocale(knex);
};
