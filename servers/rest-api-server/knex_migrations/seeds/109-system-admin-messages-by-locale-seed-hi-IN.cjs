'use strict';

const insertSystemAdminMessagesByLocale =
	async function insertSystemAdminMessagesByLocale(knex) {
		const localeId = 'hi-IN';
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
					'Twyr के लिए आपका ओटीपी {{otp}} है। यह {{expiryTime}} तक मान्य है।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text:
					'आपके पंजीकृत मोबाइल नंबर पर ओटीपी भेज दिया गया है।'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'सिस्टम एडमिन लॉग आउट हुआ: {{userName}}।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'सक्रिय सिस्टम एडमिन सत्र पहले से मौजूद है।'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'कोई सक्रिय सिस्टम एडमिन सत्र नहीं है।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'सक्रिय सिस्टम एडमिन सत्र को यह कार्य करने की अनुमति नहीं है।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text: 'अमान्य ओटीपी अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'अमान्य ओटीपी सत्यापन अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text: 'अमान्य लॉगिन अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.mobile_no}} इस क्रिया को करने के लिए अधिकृत नहीं है।'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} के लिए प्रोफ़ाइल नहीं बनाई जा सकती। OTP मेल नहीं खाता।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::PROFILE::SYSTEM_ADMIN_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} के लिए प्रोफ़ाइल नहीं बनाई जा सकती। इस मोबाइल नंबर के लिए एक सिस्टम एडमिन पहले से मौजूद है।'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'अमान्य प्रोफ़ाइल निर्माण अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'अमान्य प्रोफ़ाइल अद्यतन अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'अमान्य संपर्क निर्माण अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'अमान्य संपर्क अद्यतन अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'अमान्य लोकेल निर्माण अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'अमान्य लोकेल अद्यतन अनुरोध: एक या अधिक गुण अमान्य हैं।'
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
		'Processing 109-system-admin-messages-by-locale-seed-hi-IN.cjs'
	);
	await insertSystemAdminMessagesByLocale(knex);
};
