'use strict';

const insertSystemAdminMessagesByLocale =
	async function insertSystemAdminMessagesByLocale(knex) {
		const localeId = 'kn-IN';
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
					'Twyr ಗಾಗಿ ನಿಮ್ಮ ಸಿಸ್ಟಮ್ ಆಡ್ಮಿನ್ OTP {{otp}} ಆಗಿದೆ. ಇದು {{expiryTime}} ವರೆಗೆ ಮಾನ್ಯವಾಗಿದೆ.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text: 'ನಿಮ್ಮ ನೋಂದಾಯಿತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ OTP ಕಳುಹಿಸಲಾಗಿದೆ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text:
					'ಸಿಸ್ಟಮ್ ಆಡ್ಮಿನ್ ಲಾಗ್ ಔಟ್ ಆಗಿದ್ದಾರೆ: {{userName}}.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text:
					'ಸಕ್ರಿಯ ಸಿಸ್ಟಮ್ ಆಡ್ಮಿನ್ ಸೆಷನ್ ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'ಯಾವುದೇ ಸಕ್ರಿಯ ಸಿಸ್ಟಮ್ ಆಡ್ಮಿನ್ ಸೆಷನ್ ಇಲ್ಲ.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'ಸಕ್ರಿಯ ಸಿಸ್ಟಮ್ ಆಡ್ಮಿನ್ ಸೆಷನ್‌ಗೆ ಈ ಕಾರ್ಯಕ್ಕೆ ಅನುಮತಿ ಇಲ್ಲ.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ OTP ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'ಅಮಾನ್ಯ OTP ಪರಿಶೀಲನೆ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಲಾಗಿನ್ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮાન્યವಾಗಿವೆ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.mobile_no}} ಅವರಿಗೆ ಈ ಕ್ರಿಯೆಯನ್ನು ನಿರ್ವಹಿಸಲು ಅನುಮತಿ ಇಲ್ಲ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}}ಗಾಗಿ ಪ್ರೊಫೈಲ್ ರಚಿಸಲಾಗುವುದಿಲ್ಲ. OTP ಹೊಂದಿಕೆಯಾಗಿಲ್ಲ.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::PROFILE::SYSTEM_ADMIN_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}}ಗಾಗಿ ಪ್ರೊಫೈಲ್ ರಚಿಸಲಾಗುವುದಿಲ್ಲ. ಈ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ ಈಗಾಗಲೇ ಒಬ್ಬ ಸಿಸ್ಟಮ್ ಆಡ್ಮಿನ್ ಇದ್ದಾನೆ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಪ್ರೊಫೈಲ್ ರಚನೆ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಪ್ರೊಫೈಲ್ ನವೀಕರಣ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಸಂಪರ್ಕ ರಚನೆ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಸಂಪರ್ಕ ನವೀಕರಣ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::CANNOT_DELETE_PRIMARY',
				message_text: 'ಪ್ರಾಥಮಿಕ ಸಂಪರ್ಕವನ್ನು ಅಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಲೊಕೇಲ್ ರಚನೆ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಲೊಕೇಲ್ ನವೀಕರಣ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::CANNOT_DELETE_PRIMARY',
				message_text: 'ಪ್ರಾಥಮಿಕ ಲೊಕೇಲ್ ಅನ್ನು ಅಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.'
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
		'Processing 109-system-admin-messages-by-locale-seed-kn-IN.cjs'
	);
	await insertSystemAdminMessagesByLocale(knex);
};
