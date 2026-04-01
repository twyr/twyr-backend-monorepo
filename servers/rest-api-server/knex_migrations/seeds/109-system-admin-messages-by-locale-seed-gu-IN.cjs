'use strict';

const insertSystemAdminMessagesByLocale =
	async function insertSystemAdminMessagesByLocale(knex) {
		const localeId = 'gu-IN';
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
					'Twyr માટે તમારો સિસ્ટમ એડમિન OTP {{otp}} છે. તે {{expiryTime}} સુધી માન્ય છે.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text: 'OTP સફળતાપૂર્વક જનરેટ થયો છે.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text:
					'સિસ્ટમ એડમિન {{userName}} સફળતાપૂર્વક લોગ આઉટ થયા છે.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text:
					'સક્રિય સિસ્ટમ એડમિન સત્ર પહેલેથી જ અસ્તિત્વમાં છે.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'કોઈ સક્રિય સિસ્ટમ એડમિન સત્ર મળ્યું નથી.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'સક્રિય સિસ્ટમ એડમિન સત્રને આ કામગીરી માટે પરવાનગી નથી.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'અમાન્ય OTP વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'અમાન્ય OTP ચકાસણી વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'અમાન્ય લોગિન વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.mobile_no}} ને આ ક્રિયા કરવા માટે અધિકૃત નથી.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} માટે પ્રોફાઇલ બનાવી શકાતી નથી. OTP મેળ ખાતો નથી.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::PROFILE::SYSTEM_ADMIN_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} માટે પ્રોફાઇલ બનાવી શકાતી નથી. આ મોબાઇલ નંબર માટે પહેલેથી જ એક સિસ્ટમ એડમિન અસ્તિત્વમાં છે.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'અમાન્ય પ્રોફાઇલ બનાવવાની વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'અમાન્ય પ્રોફાઇલ અપડેટ વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'અમાન્ય સંપર્ક બનાવવાની વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'અમાન્ય સંપર્ક અપડેટ વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::CANNOT_DELETE_PRIMARY',
				message_text: 'પ્રાથમિક સંપર્ક ભૂંસી શકાશે નહીં.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'અમાન્ય લોકેલ બનાવવાની વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'અમાન્ય લોકેલ અપડેટ વિનંતી: એક અથવા વધુ ગુણધર્મો અમાન્ય છે.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::CANNOT_DELETE_PRIMARY',
				message_text: 'પ્રાથમિક લોકેલ ભૂંસી શકાશે નહીં.'
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
		'Processing 109-system-admin-messages-by-locale-seed-gu-IN.cjs'
	);
	await insertSystemAdminMessagesByLocale(knex);
};
