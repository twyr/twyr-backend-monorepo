'use strict';

const insertSystemAdminMessagesByLocale =
	async function insertSystemAdminMessagesByLocale(knex) {
		const localeId = 'te-IN';
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
					'Twyr కోసం మీ సిస్టమ్ అడ్మిన్ OTP {{otp}}. ఇది {{expiryTime}} వరకు చెల్లుతుంది.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text: 'మీ నమోదిత మొబైల్ నంబర్‌కు OTP పంపబడింది.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text:
					'సిస్టమ్ అడ్మిన్ లాగ్ అవుట్ అయ్యారు: {{userName}}.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text: 'సక్రియ సిస్టమ్ అడ్మిన్ సెషన్ ఇప్పటికే ఉంది.'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text: 'ఏ సక్రియ సిస్టమ్ అడ్మిన్ సెషన్ లేదు.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'సక్రియ సిస్టమ్ అడ్మిన్ సెషన్‌కు ఈ చర్యకు అనుమతి లేదు.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text:
					'చెల్లని OTP అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'చెల్లని OTP ధృవీకరణ అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text:
					'చెల్లని లాగిన్ అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.mobile_no}} ఈ చర్యను నిర్వహించడానికి అనుమతించబడలేదు.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} కోసం ప్రొఫైల్ సృష్టించలేము. OTP సరిపోలలేదు.'
			},
			{
				message_id:
					'SYSTEM_ADMIN::PROFILE::SYSTEM_ADMIN_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} కోసం ప్రొఫైల్ సృష్టించలేము. ఈ మొబైల్ నంబర్‌కు ఇప్పటికే ఒక సిస్టమ్ అడ్మిన్ ఉన్నారు.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'చెల్లని ప్రొఫైల్ సృష్టి అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'చెల్లని ప్రొఫైల్ నవీకరణ అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'చెల్లని సంప్రదింపు సృష్టి అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'చెల్లని సంప్రదింపు నవీకరణ అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::CANNOT_DELETE_PRIMARY',
				message_text: 'ప్రాథమిక సంప్రదింపును తొలగించలేరు.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'చెల్లని లోకేల్ సృష్టి అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'చెల్లని లోకేಲ್ నవీకరణ అభ్యర్థన: ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలు చెల్లవు.'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::CANNOT_DELETE_PRIMARY',
				message_text: 'ప్రాథమిక లోకేల్‌ను త౏లగించలేరు.'
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
		'Processing 109-system-admin-messages-by-locale-seed-te-IN.cjs'
	);
	await insertSystemAdminMessagesByLocale(knex);
};
