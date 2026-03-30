'use strict';

exports.seed = async function (knex) {
	console.log('Processing 102-system-admin-seed.cjs');

	const existingSystemAdmin = await knex?.raw?.(
		`SELECT id FROM system_admins WHERE mobile_no = '+919900000011'`
	);
	if (existingSystemAdmin?.rows?.[0]?.['id']) return;

	let mobileContactTypeId = await knex?.raw?.(
		`SELECT id FROM contact_type_master WHERE name = 'mobile'`
	);
	mobileContactTypeId = mobileContactTypeId?.rows?.[0]?.['id'];

	let emailContactTypeId = await knex?.raw?.(
		`SELECT id FROM contact_type_master WHERE name = 'email'`
	);
	emailContactTypeId = emailContactTypeId?.rows?.[0]?.['id'];

	let systemAdminId = await knex?.('system_admins')
		?.insert({
			mobile_no: '+919900000011'
		})
		?.returning?.('id');
	systemAdminId = systemAdminId?.[0]?.['id'];

	await knex?.('system_admin_contacts')?.insert?.([
		{
			user_id: systemAdminId,
			contact_type_id: mobileContactTypeId,
			contact: '+919900000011',
			is_primary: true,
			verified: true
		},
		{
			user_id: systemAdminId,
			contact_type_id: emailContactTypeId,
			contact: 'admin.one@twyr.ai',
			is_primary: false,
			verified: true
		}
	]);

	await knex?.('system_admin_locales')?.insert?.({
		user_id: systemAdminId,
		locale_code: 'en-IN',
		is_primary: true
	});

	await knex?.('system_admin_names_by_locale')?.insert?.({
		user_id: systemAdminId,
		locale_code: 'en-IN',
		first_name: 'System',
		middle_names: null,
		last_name: 'Admin One',
		nickname: 'AdminOne'
	});

	systemAdminId = await knex?.('system_admins')
		?.insert({
			mobile_no: '+919900000012'
		})
		?.returning?.('id');
	systemAdminId = systemAdminId?.[0]?.['id'];

	await knex?.('system_admin_contacts')?.insert?.([
		{
			user_id: systemAdminId,
			contact_type_id: mobileContactTypeId,
			contact: '+919900000012',
			is_primary: true,
			verified: true
		},
		{
			user_id: systemAdminId,
			contact_type_id: emailContactTypeId,
			contact: 'admin.two@twyr.ai',
			is_primary: false,
			verified: true
		}
	]);

	await knex?.('system_admin_locales')?.insert?.({
		user_id: systemAdminId,
		locale_code: 'en-IN',
		is_primary: true
	});

	await knex?.('system_admin_names_by_locale')?.insert?.({
		user_id: systemAdminId,
		locale_code: 'en-IN',
		first_name: 'System',
		middle_names: null,
		last_name: 'Admin Two',
		nickname: 'AdminTwo'
	});
};
