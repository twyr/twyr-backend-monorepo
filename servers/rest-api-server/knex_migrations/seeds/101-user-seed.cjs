'use strict';

exports.seed = async function (knex) {
	console.log('Processing 101-user-seed.cjs');

	let mobileContactTypeId = await knex?.raw?.(
		`SELECT id FROM contact_type_master WHERE name = 'mobile'`
	);
	mobileContactTypeId = mobileContactTypeId?.rows?.[0]?.['id'];

	let emailContactTypeId = await knex?.raw?.(
		`SELECT id FROM contact_type_master WHERE name = 'email'`
	);
	emailContactTypeId = emailContactTypeId?.rows?.[0]?.['id'];

	let genderIds = await knex?.raw?.(
		`SELECT id, name FROM gender_master WHERE name = ANY (?)`,
		[['male', 'female']]
	);
	genderIds = new Map(
		(genderIds?.rows ?? [])?.map?.((row) => [row?.name, row?.id])
	);

	let existingUser = await knex?.raw?.(
		`SELECT id FROM users WHERE mobile_no = '+919900000001'`
	);
	let userId = existingUser?.rows?.[0]?.['id'];
	let isNewUser = false;
	if (!userId) {
		userId = await knex?.('users')
			?.insert({
				mobile_no: '+919900000001',
				gender_id: genderIds?.get?.('male')
			})
			?.returning?.('id');
		userId = userId?.[0]?.['id'];
		isNewUser = true;
	}
	await knex?.('users')
		?.where?.('id', '=', userId)
		?.update?.({ gender_id: genderIds?.get?.('male') });

	if (isNewUser) {
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
				contact: 'john.doe@twyr.ai',
				is_primary: false,
				verified: true
			}
		]);

		await knex?.('user_locales')?.insert?.({
			user_id: userId,
			locale_id: 'en-IN',
			is_primary: true
		});

		await knex?.('user_names_by_locale')?.insert?.({
			user_id: userId,
			locale_id: 'en-IN',
			first_name: 'John',
			middle_names: null,
			last_name: 'Doe',
			nickname: 'Johnny'
		});
	}

	existingUser = await knex?.raw?.(
		`SELECT id FROM users WHERE mobile_no = '+919900000002'`
	);
	userId = existingUser?.rows?.[0]?.['id'];
	isNewUser = false;
	if (!userId) {
		userId = await knex?.('users')
			?.insert({
				mobile_no: '+919900000002',
				gender_id: genderIds?.get?.('female')
			})
			?.returning?.('id');
		userId = userId?.[0]?.['id'];
		isNewUser = true;
	}
	await knex?.('users')
		?.where?.('id', '=', userId)
		?.update?.({ gender_id: genderIds?.get?.('female') });

	if (isNewUser) {
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
				contact: 'jane.doe@twyr.ai',
				is_primary: false,
				verified: true
			}
		]);

		await knex?.('user_locales')?.insert?.({
			user_id: userId,
			locale_id: 'en-IN',
			is_primary: true
		});

		await knex?.('user_names_by_locale')?.insert?.({
			user_id: userId,
			locale_id: 'en-IN',
			first_name: 'Jane',
			middle_names: null,
			last_name: 'Doe',
			nickname: 'Janey'
		});
	}
};
