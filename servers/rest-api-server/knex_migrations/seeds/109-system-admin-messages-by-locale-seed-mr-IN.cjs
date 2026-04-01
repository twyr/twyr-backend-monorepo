'use strict';

const insertSystemAdminMessagesByLocale =
	async function insertSystemAdminMessagesByLocale(knex) {
		const localeId = 'mr-IN';
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
					'Twyr साठी तुमचा सिस्टम अॅडमिन OTP {{otp}} आहे. तो {{expiryTime}} पर्यंत वैध आहे.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text:
					'तुमच्या नोंदणीकृत मोबाईल क्रमांकावर OTP पाठवण्यात आला आहे.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text: 'सिस्टम अॅडमिन लॉग आउट झाला: {{userName}}.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text:
					'सक्रिय सिस्टम अॅडमिन सत्र आधीपासून अस्तित्वात आहे.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'कोणतेही सक्रिय सिस्टम अॅडमिन सत्र नाही.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'सक्रिय सिस्टम अॅडमिन सत्राला ही कृती करण्याची परवानगी नाही.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'अवैध OTP विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'अवैध OTP पडताळणी विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'अवैध लॉगिन विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.mobile_no}} यांना ही क्रिया करण्याची परवानगी नाही.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} यांच्यासाठी प्रोफाइल तयार करता येणार नाही. OTP जुळत नाही.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::PROFILE::SYSTEM_ADMIN_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} यांच्यासाठी प्रोफाइल तयार करता येणार नाही. या मोबाइल क्रमांकासाठी आधीच एक सिस्टम अॅडमिन अस्तित्वात आहे.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'अवैध प्रोफाइल तयार करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'अवैध प्रोफाइल अद्यतन विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'अवैध संपर्क तयार करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'अवैध संपर्क अद्यतन विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::CANNOT_DELETE_PRIMARY',
				message_text: 'प्राथमिक संपर्क हटवता येणार नाही.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'अवैध लोकेल तयार करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'अवैध लोकेल अद्यतन विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::CANNOT_DELETE_PRIMARY',
				message_text: 'प्राथमिक लोकेल हटवता येणार नाही.'
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
		'Processing 109-system-admin-messages-by-locale-seed-mr-IN.cjs'
	);
	await insertSystemAdminMessagesByLocale(knex);
};
