'use strict';

exports.seed = async function (knex) {
	console.log('Processing 102-system-admin-seed.cjs');

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

	let existingSystemAdmin = await knex?.raw?.(
		`SELECT id FROM system_admins WHERE mobile_no = '+919900000011'`
	);
	let systemAdminId = existingSystemAdmin?.rows?.[0]?.['id'];
	let isNewSystemAdmin = false;
	if (!systemAdminId) {
		systemAdminId = await knex?.('system_admins')
			?.insert({
				mobile_no: '+919900000011',
				gender_id: genderIds?.get?.('male'),
				date_of_birth: '1988-03-11'
			})
			?.returning?.('id');
		systemAdminId = systemAdminId?.[0]?.['id'];
		isNewSystemAdmin = true;
	}
	await knex?.('system_admins')
		?.where?.('id', '=', systemAdminId)
		?.update?.({
			gender_id: genderIds?.get?.('male'),
			date_of_birth: '1988-03-11'
		});

	if (isNewSystemAdmin) {
		await knex?.('system_admin_contacts')?.insert?.([
			{
				system_admin_id: systemAdminId,
				contact_type_id: mobileContactTypeId,
				contact: '+919900000011',
				is_primary: true,
				verified: true
			},
			{
				system_admin_id: systemAdminId,
				contact_type_id: emailContactTypeId,
				contact: 'admin.one@twyr.ai',
				is_primary: false,
				verified: true
			}
		]);

		await knex?.('system_admin_locales')?.insert?.({
			system_admin_id: systemAdminId,
			locale_id: 'en-IN',
			is_primary: true
		});

		await knex?.('system_admin_names_by_locale')?.insert?.({
			system_admin_id: systemAdminId,
			locale_id: 'en-IN',
			first_name: 'System',
			middle_names: null,
			last_name: 'Admin One',
			nickname: 'A1'
		});
	}

	existingSystemAdmin = await knex?.raw?.(
		`SELECT id FROM system_admins WHERE mobile_no = '+919900000012'`
	);
	systemAdminId = existingSystemAdmin?.rows?.[0]?.['id'];
	isNewSystemAdmin = false;
	if (!systemAdminId) {
		systemAdminId = await knex?.('system_admins')
			?.insert({
				mobile_no: '+919900000012',
				gender_id: genderIds?.get?.('female'),
				date_of_birth: '1991-10-05'
			})
			?.returning?.('id');
		systemAdminId = systemAdminId?.[0]?.['id'];
		isNewSystemAdmin = true;
	}
	await knex?.('system_admins')
		?.where?.('id', '=', systemAdminId)
		?.update?.({
			gender_id: genderIds?.get?.('female'),
			date_of_birth: '1991-10-05'
		});

	if (isNewSystemAdmin) {
		await knex?.('system_admin_contacts')?.insert?.([
			{
				system_admin_id: systemAdminId,
				contact_type_id: mobileContactTypeId,
				contact: '+919900000012',
				is_primary: true,
				verified: true
			},
			{
				system_admin_id: systemAdminId,
				contact_type_id: emailContactTypeId,
				contact: 'admin.two@twyr.ai',
				is_primary: false,
				verified: true
			}
		]);

		await knex?.('system_admin_locales')?.insert?.({
			system_admin_id: systemAdminId,
			locale_id: 'en-IN',
			is_primary: true
		});

		await knex?.('system_admin_names_by_locale')?.insert?.({
			system_admin_id: systemAdminId,
			locale_id: 'en-IN',
			first_name: 'System',
			middle_names: null,
			last_name: 'Admin Two',
			nickname: 'A2'
		});
	}
};
