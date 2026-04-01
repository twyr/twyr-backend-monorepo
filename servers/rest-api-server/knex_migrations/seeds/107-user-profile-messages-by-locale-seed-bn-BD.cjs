'use strict';

const insertUserProfileMessagesByLocale =
	async function insertUserProfileMessagesByLocale(knex) {
		const localeId = 'bn-BD';
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
					'{{user.mobile_no}} এই কাজটি করার জন্য অনুমোদিত নন।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_OTP',
				message_text:
					'{{body.mobile_no}} এর জন্য প্রোফাইল তৈরি করা যায়নি। OTP মেলেনি।'
			},
			{
				message_id: 'USERS::PROFILE::USER_ALREADY_EXISTS',
				message_text:
					'{{body.mobile_no}} এর জন্য প্রোফাইল তৈরি করা যায়নি। এই মোবাইল নম্বরের জন্য ইতিমধ্যেই একজন ব্যবহারকারী রয়েছে।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_CREATE_REQUEST',
				message_text:
					'অবৈধ প্রোফাইল তৈরির অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::PROFILE::INVALID_UPDATE_REQUEST',
				message_text:
					'অবৈধ প্রোফাইল আপডেট অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_CREATE_REQUEST',
				message_text:
					'অবৈধ যোগাযোগ তৈরির অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::CONTACT::INVALID_UPDATE_REQUEST',
				message_text:
					'অবৈধ যোগাযোগ আপডেট অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::CONTACT::CANNOT_DELETE_PRIMARY',
				message_text: 'প্রাথমিক যোগাযোগ মুছে ফেলা যাবে না।'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_CREATE_REQUEST',
				message_text:
					'অবৈধ লোকেল তৈরির অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::LOCALE::INVALID_UPDATE_REQUEST',
				message_text:
					'অবৈধ লোকেল আপডেট অনুরোধ: এক বা একাধিক বৈশিষ্ট্য অবৈধ।'
			},
			{
				message_id: 'USERS::LOCALE::CANNOT_DELETE_PRIMARY',
				message_text: 'প্রাথমিক লোকেল মুছে ফেলা যাবে না।'
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
		'Processing 107-user-profile-messages-by-locale-seed-bn-BD.cjs'
	);
	await insertUserProfileMessagesByLocale(knex);
};
