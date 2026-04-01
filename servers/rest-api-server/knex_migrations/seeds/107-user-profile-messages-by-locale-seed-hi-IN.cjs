'use strict';

const insertUserProfileMessagesByLocale =
	async function insertUserProfileMessagesByLocale(knex) {
		const localeId = 'hi-IN';
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
					'{{user.mobile_no}} इस क्रिया को करने के लिए अधिकृत नहीं है।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} के लिए प्रोफ़ाइल नहीं बनाई जा सकती। OTP मेल नहीं खाता।'
			},
			{
				message_id: 'USERS::PROFILE::USER_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} के लिए प्रोफ़ाइल नहीं बनाई जा सकती। इस मोबाइल नंबर के लिए एक उपयोगकर्ता पहले से मौजूद है।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'अमान्य प्रोफ़ाइल निर्माण अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'अमान्य प्रोफ़ाइल अद्यतन अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'अमान्य संपर्क निर्माण अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'अमान्य संपर्क अद्यतन अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'USERS::CONTACT::CANNOT_DELETE_PRIMARY',
				message_text: 'प्राथमिक संपर्क को हटाया नहीं जा सकता।'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'अमान्य लोकेल निर्माण अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'अमान्य लोकेल अद्यतन अनुरोध: एक या अधिक गुण अमान्य हैं।'
			},
			{
				message_id: 'USERS::LOCALE::CANNOT_DELETE_PRIMARY',
				message_text: 'प्राथमिक लोकेल को हटाया नहीं जा सकता।'
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
		'Processing 107-user-profile-messages-by-locale-seed-hi-IN.cjs'
	);
	await insertUserProfileMessagesByLocale(knex);
};
