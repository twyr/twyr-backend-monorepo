'use strict';

exports.seed = async function (knex) {
	console.log('Processing 101-user-seed.cjs');

	const existingUser = await knex?.raw?.(
		`SELECT id FROM users WHERE mobile_no = '+919900000001'`
	);
	if (existingUser?.rows?.[0]?.['id']) return;

	let mobileContactTypeId = await knex?.raw?.(
		`SELECT id FROM contact_type_master WHERE name = 'mobile'`
	);
	mobileContactTypeId = mobileContactTypeId?.rows?.[0]?.['id'];

	let emailContactTypeId = await knex?.raw?.(
		`SELECT id FROM contact_type_master WHERE name = 'email'`
	);
	emailContactTypeId = emailContactTypeId?.rows?.[0]?.['id'];

	let userId = await knex?.('users')
		?.insert({
			mobile_no: '+919900000001'
		})
		?.returning?.('id');
	userId = userId?.[0]?.['id'];

	await knex?.('user_contacts')?.insert?.([
		{
			user_id: userId,
			contact_type_id: mobileContactTypeId,
			contact: '+919900000001',
			is_primary: true,
			verified: true
		},
		{
			user_id: userId,
			contact_type_id: emailContactTypeId,
			contact: 'dr.meera.sharma@twyr.ai',
			is_primary: false,
			verified: true
		}
	]);

	await knex?.('user_locales')?.insert?.({
		user_id: userId,
		locale_code: 'en-IN',
		is_primary: true
	});

	userId = await knex?.('users')
		?.insert({
			mobile_no: '+919900000002'
		})
		?.returning?.('id');
	userId = userId?.[0]?.['id'];

	await knex?.('user_contacts')?.insert?.([
		{
			user_id: userId,
			contact_type_id: mobileContactTypeId,
			contact: '+919900000002',
			is_primary: true,
			verified: true
		},
		{
			user_id: userId,
			contact_type_id: emailContactTypeId,
			contact: 'dr.arjun.rao@twyr.ai',
			is_primary: false,
			verified: true
		}
	]);

	await knex?.('user_locales')?.insert?.({
		user_id: userId,
		locale_code: 'en-IN',
		is_primary: true
	});
};
