'use strict';

const insertUserProfileMessagesByLocale =
	async function insertUserProfileMessagesByLocale(knex) {
		const localeId = 'gu-IN';
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
					'{{user.mobile_no}} ને આ ક્રિયા કરવા માટે અધિકૃત નથી.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} માટે પ્રોફાઇલ બનાવી શકાતી નથી. OTP મેળ ખાતો નથી.'
			},
			{
				message_id: 'USERS::PROFILE::USER_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} માટે પ્રોફાઇલ બનાવી શકાતી નથી. આ મોબાઇલ નંબર માટે પહેલેથી જ એક વપરાશકર્તા અસ્તિત્વમાં છે.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'અમાન્ય પ્રોફાઇલ બનાવવાની વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'અમાન્ય પ્રોફાઇલ અપડેટ વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'અમાન્ય સંપર્ક બનાવવાની વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'અમાન્ય સંપર્ક અપડેટ વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'અમાન્ય લોકેલ બનાવવાની વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'અમાન્ય લોકેલ અપડેટ વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
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
		'Processing 107-user-profile-messages-by-locale-seed-gu-IN.cjs'
	);
	await insertUserProfileMessagesByLocale(knex);
};
