'use strict';

exports.up = async function (knex) {
	let exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('system_admins');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.('system_admins', function (systemAdminTable) {
				systemAdminTable
					?.uuid?.('id')
					?.notNullable?.()
					?.primary?.()
					?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));
				systemAdminTable
					?.text?.('mobile_no')
					?.notNullable?.()
					?.unique?.();
				systemAdminTable
					?.boolean?.('is_deleted')
					?.notNullable?.()
					?.defaultTo?.(false);
				systemAdminTable
					?.timestamp?.('created_at')
					?.notNullable?.()
					?.defaultTo?.(knex?.fn?.now?.());
				systemAdminTable
					?.timestamp?.('updated_at')
					?.notNullable?.()
					?.defaultTo?.(knex?.fn?.now?.());
			});
	}

	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('system_admin_contacts');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.('system_admin_contacts', function (contactTable) {
				contactTable
					?.uuid?.('id')
					?.notNullable?.()
					?.primary?.()
					?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));
				contactTable
					?.uuid?.('user_id')
					?.notNullable?.()
					?.references?.('id')
					?.inTable?.('system_admins')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');
				contactTable
					?.uuid?.('contact_type_id')
					?.notNullable?.()
					?.references?.('id')
					?.inTable?.('contact_type_master')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');
				contactTable?.text?.('contact')?.notNullable?.();
				contactTable
					?.boolean?.('verified')
					?.notNullable?.()
					?.defaultTo?.(false);
				contactTable
					?.boolean?.('is_primary')
					?.notNullable?.()
					?.defaultTo?.(false);
				contactTable
					?.timestamp?.('created_at')
					?.notNullable?.()
					?.defaultTo?.(knex?.fn?.now?.());
				contactTable
					?.timestamp?.('updated_at')
					?.notNullable?.()
					?.defaultTo?.(knex?.fn?.now?.());
			});
	}

	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('system_admin_locales');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.('system_admin_locales', function (localeTable) {
				localeTable
					?.uuid?.('id')
					?.notNullable?.()
					?.primary?.()
					?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));
				localeTable
					?.uuid?.('user_id')
					?.notNullable?.()
					?.references?.('id')
					?.inTable?.('system_admins')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');
				localeTable
					?.text?.('locale_code')
					?.notNullable?.()
					?.references?.('code')
					?.inTable?.('locale_master')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');
				localeTable
					?.boolean?.('is_primary')
					?.notNullable?.()
					?.defaultTo?.(false);
				localeTable
					?.timestamp?.('created_at')
					?.notNullable?.()
					?.defaultTo?.(knex?.fn?.now?.());
				localeTable
					?.timestamp?.('updated_at')
					?.notNullable?.()
					?.defaultTo?.(knex?.fn?.now?.());
			});
	}

	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('system_admin_names_by_locale');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'system_admin_names_by_locale',
				function (nameTable) {
					nameTable
						?.uuid?.('id')
						?.notNullable?.()
						?.primary?.()
						?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));
					nameTable
						?.uuid?.('user_id')
						?.notNullable?.()
						?.references?.('id')
						?.inTable?.('system_admins')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');
					nameTable
						?.text?.('locale_code')
						?.notNullable?.()
						?.references?.('code')
						?.inTable?.('locale_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');
					nameTable?.text?.('first_name')?.notNullable?.();
					nameTable?.text?.('middle_names')?.nullable?.();
					nameTable?.text?.('last_name')?.notNullable?.();
					nameTable?.text?.('nickname')?.nullable?.();
					nameTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex?.fn?.now?.());
					nameTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex?.fn?.now?.());

					nameTable?.unique?.(['user_id', 'locale_code']);
				}
			);
	}
};

exports.down = async function (knex) {
	await knex?.raw?.(
		'DROP TABLE IF EXISTS public.system_admin_names_by_locale CASCADE;'
	);
	await knex?.raw?.(
		'DROP TABLE IF EXISTS public.system_admin_locales CASCADE;'
	);
	await knex?.raw?.(
		'DROP TABLE IF EXISTS public.system_admin_contacts CASCADE;'
	);
	await knex?.raw?.('DROP TABLE IF EXISTS public.system_admins CASCADE;');
};
