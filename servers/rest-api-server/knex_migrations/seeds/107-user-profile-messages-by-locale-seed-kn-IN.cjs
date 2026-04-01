'use strict';

const insertUserProfileMessagesByLocale =
	async function insertUserProfileMessagesByLocale(knex) {
		const localeId = 'kn-IN';
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
					'{{user.mobile_no}} ಅವರಿಗೆ ಈ ಕ್ರಿಯೆಯನ್ನು ನಿರ್ವಹಿಸಲು ಅನುಮತಿ ಇಲ್ಲ.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}}ಗಾಗಿ ಪ್ರೊಫೈಲ್ ರಚಿಸಲಾಗುವುದಿಲ್ಲ. OTP ಹೊಂದಿಕೆಯಾಗಿಲ್ಲ.'
			},
			{
				message_id: 'USERS::PROFILE::USER_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}}ಗಾಗಿ ಪ್ರೊಫೈಲ್ ರಚಿಸಲಾಗುವುದಿಲ್ಲ. ಈ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ ಈಗಾಗಲೇ ಒಬ್ಬ ಬಳಕೆದಾರ ಇದ್ದಾನೆ.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಪ್ರೊಫೈಲ್ ರಚನೆ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಪ್ರೊಫೈಲ್ ನವೀಕರಣ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಸಂಪರ್ಕ ರಚನೆ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಸಂಪರ್ಕ ನವೀಕರಣ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::CONTACT::CANNOT_DELETE_PRIMARY',
				message_text: 'ಪ್ರಾಥಮಿಕ ಸಂಪರ್ಕವನ್ನು ಅಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಲೊಕೇಲ್ ರಚನೆ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'ಅಮಾನ್ಯ ಲೊಕೇಲ್ ನವೀಕರಣ ವಿನಂತಿ: ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಗುಣಲಕ್ಷಣಗಳು ಅಮಾನ್ಯವಾಗಿವೆ.'
			},
			{
				message_id: 'USERS::LOCALE::CANNOT_DELETE_PRIMARY',
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
		'Processing 107-user-profile-messages-by-locale-seed-kn-IN.cjs'
	);
	await insertUserProfileMessagesByLocale(knex);
};
