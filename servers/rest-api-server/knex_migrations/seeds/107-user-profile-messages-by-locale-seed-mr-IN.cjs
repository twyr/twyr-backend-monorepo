'use strict';

const insertUserProfileMessagesByLocale =
	async function insertUserProfileMessagesByLocale(knex) {
		const localeId = 'mr-IN';
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
					'{{user.mobile_no}} यांना ही क्रिया करण्याची परवानगी नाही.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} यांच्यासाठी प्रोफाइल तयार करता येणार नाही. OTP जुळत नाही.'
			},
			{
				message_id: 'USERS::PROFILE::USER_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} यांच्यासाठी प्रोफाइल तयार करता येणार नाही. या मोबाइल क्रमांकासाठी आधीच एक वापरकर्ता अस्तित्वात आहे.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'अवैध प्रोफाइल तयार करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'अवैध प्रोफाइल अद्यतन विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'अवैध संपर्क तयार करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'अवैध संपर्क अद्यतन विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::CONTACT::CANNOT_DELETE_PRIMARY',
				message_text: 'प्राथमिक संपर्क हटवता येणार नाही.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'अवैध लोकेल तयार करण्याची विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'अवैध लोकेल अद्यतन विनंती: एक किंवा अधिक गुणधर्म अवैध आहेत.'
			},
			{
				message_id: 'USERS::LOCALE::CANNOT_DELETE_PRIMARY',
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
		'Processing 107-user-profile-messages-by-locale-seed-mr-IN.cjs'
	);
	await insertUserProfileMessagesByLocale(knex);
};
