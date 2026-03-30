'use strict';

const insertSystemAdminMessagesByLocale =
	async function insertSystemAdminMessagesByLocale(knex) {
		const localeId = 'bn-BD';
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
					'Twyr-এর জন্য আপনার সিস্টেম অ্যাডমিন OTP হলো {{otp}}। এটি {{expiryTime}} পর্যন্ত বৈধ।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::OTP_MESSAGE_RESPONSE',
				message_text: 'OTP সফলভাবে তৈরি হয়েছে।'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::LOGOUT_MESSAGE',
				message_text:
					'সিস্টেম অ্যাডমিন {{userName}} সফলভাবে লগ আউট হয়েছেন।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::EXISTING_ACTIVE_SESSION',
				message_text:
					'একটি সক্রিয় সিস্টেম অ্যাডমিন সেশন ইতিমধ্যেই রয়েছে।'
			},
			{
				message_id: 'SYSTEM_ADMIN::SESSION_MANAGER::NO_ACTIVE_SESSION',
				message_text:
					'কোনো সক্রিয় সিস্টেম অ্যাডমিন সেশন পাওয়া যায়নি।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::AUTHORIZATION_FAILURE',
				message_text:
					'সক্রিয় সিস্টেম অ্যাডমিন সেশন এই কাজের জন্য অনুমোদিত নয়।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_REQUEST',
				message_text: 'অবৈধ OTP অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_OTP_VALIDATION',
				message_text:
					'অবৈধ OTP যাচাইকরণ অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::SESSION_MANAGER::INVALID_LOGIN_REQUEST',
				message_text: 'অবৈধ লগইন অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS',
				message_text:
					'{{user.mobile_no}} এই কাজটি করার জন্য অনুমোদিত নন।'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} এর জন্য প্রোফাইল তৈরি করা যায়নি। OTP মেলেনি।'
			},
			{
				message_id:
					'SYSTEM_ADMIN::PROFILE::SYSTEM_ADMIN_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} এর জন্য প্রোফাইল তৈরি করা যায়নি। এই মোবাইল নম্বরের জন্য ইতিমধ্যেই একজন সিস্টেম অ্যাডমিন রয়েছে।'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'অবৈধ প্রোফাইল তৈরির অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'SYSTEM_ADMIN::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'অবৈধ প্রোফাইল আপডেট অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'অবৈধ যোগাযোগ তৈরির অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'SYSTEM_ADMIN::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'অবৈধ যোগাযোগ আপডেট অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'অবৈধ লোকেল তৈরির অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'SYSTEM_ADMIN::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'অবৈধ লোকেল আপডেট অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
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
		'Processing 109-system-admin-messages-by-locale-seed-bn-BD.cjs'
	);
	await insertSystemAdminMessagesByLocale(knex);
};
