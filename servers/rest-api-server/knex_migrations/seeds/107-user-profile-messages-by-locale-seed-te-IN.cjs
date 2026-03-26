'use strict';

const insertUserProfileMessagesByLocale =
	async function insertUserProfileMessagesByLocale(knex) {
		const localeId = 'te-IN';
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
					'{{user.mobile_no}} ఈ చర్యను నిర్వహించడానికి అనుమతించబడలేదు.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} కోసం ప్రొఫైల్ సృష్టించలేము. OTP సరిపోలలేదు.'
			},
			{
				message_id: 'USERS::PROFILE::USER_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} కోసం ప్రొఫైల్ సృష్టించలేము. ఈ మొబైల్ నంబర్‌కు ఇప్పటికే ఒక వినియోగదారు ఉన్నారు.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'చెల్లని ప్రొఫైల్ సృష్టి అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'చెల్లని ప్రొఫైల్ నవీకరణ అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'చెల్లని సంప్రదింపు సృష్టి అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'చెల్లని సంప్రదింపు నవీకరణ అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'చెల్లని లోకేల్ సృష్టి అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'చెల్లని లోకేಲ್ నవీకరణ అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
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
		'Processing 107-user-profile-messages-by-locale-seed-te-IN.cjs'
	);
	await insertUserProfileMessagesByLocale(knex);
};
