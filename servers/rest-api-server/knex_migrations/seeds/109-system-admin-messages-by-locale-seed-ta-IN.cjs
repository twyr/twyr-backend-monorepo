'use strict';

const insertSystemAdminMessagesByLocale =
	async function insertSystemAdminMessagesByLocale(knex) {
		const localeId = 'ta-IN';
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
					'Twyr-க்கான உங்கள் சிஸ்டம் அட்மின் OTP {{otp}} ஆகும். இது {{expiryTime}} வரை செல்லுபடியாகும்.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text:
					'உங்கள் பதிவு செய்யப்பட்ட மொபைல் எண்ணிற்கு OTP அனுப்பப்பட்டுள்ளது.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text:
					'சிஸ்டம் அட்மின் வெளியேற்றப்பட்டார்: {{userName}}.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text:
					'செயலில் இருக்கும் சிஸ்டம் அட்மின் அமர்வு ஏற்கனவே உள்ளது.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'செயலில் இருக்கும் சிஸ்டம் அட்மின் அமர்வு இல்லை.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'செயலில் இருக்கும் சிஸ்டம் அட்மின் அமர்வுக்கு இந்த செயலை செய்ய அனுமதி இல்லை.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'தவறான OTP கோரிக்கை: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'தவறான OTP சரிபார்ப்பு கோரிக்கை: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'தவறான உள்நுழைவு கோரிக்கை: ஒன்று அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.mobile_no}} அவர்களுக்கு இந்த செயலை செய்ய அனுமதி இல்லை.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} க்கான சுயவிவரத்தை உருவாக்க முடியாது. OTP பொருந்தவில்லை.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::PROFILE::SYSTEM_ADMIN_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} க்கான சுயவிவரத்தை உருவாக்க முடியாது. இந்த மொபைல் எண்ணிற்கு ஏற்கனவே ஒரு சிஸ்டம் அட்மின் உள்ளார்.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'தவறான சுயவிவர உருவாக்க கோரிக்கை: ஒரு அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'தவறான சுயவிவர புதுப்பிப்பு கோரிக்கை: ஒரு அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'தவறான தொடர்பு உருவாக்க கோரிக்கை: ஒரு அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'தவறான தொடர்பு புதுப்பிப்பு கோரிக்கை: ஒரு அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'தவறான மொழிமுறை உருவாக்க கோரிக்கை: ஒரு அல்லது அதற்கு மேற்பட்ட பண்புகள் தவறானவை.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_UPDATE_REQUEST',
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
		'Processing 109-system-admin-messages-by-locale-seed-ta-IN.cjs'
	);
	await insertSystemAdminMessagesByLocale(knex);
};
