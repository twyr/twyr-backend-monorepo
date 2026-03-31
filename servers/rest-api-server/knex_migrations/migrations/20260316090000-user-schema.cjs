'use strict';

exports.up = async function (knex) {
	let exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('users');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.('users', function (userTable) {
				userTable
					?.uuid?.('id')
					?.notNullable?.()
					?.primary?.()
					?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));
				userTable?.text?.('mobile_no')?.notNullable?.()?.unique?.();
				userTable
					?.uuid?.('gender_id')
					?.notNullable?.()
					?.references?.('id')
					?.inTable?.('gender_master')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');
				userTable
					?.boolean?.('is_deleted')
					?.notNullable?.()
					?.defaultTo?.(false);
				userTable
					?.timestamp?.('created_at')
					?.notNullable?.()
					?.defaultTo?.(knex?.fn?.now?.());
				userTable
					?.timestamp?.('updated_at')
					?.notNullable?.()
					?.defaultTo?.(knex?.fn?.now?.());
			});
	}

	let hasColumn = await knex?.schema
		?.withSchema?.('public')
		?.hasColumn?.('users', 'gender_id');
	if (!hasColumn) {
		await knex?.schema
			?.withSchema?.('public')
			?.alterTable?.('users', function (userTable) {
				userTable
					?.uuid?.('gender_id')
					?.notNullable?.()
					?.references?.('id')
					?.inTable?.('gender_master')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');
			});
	}

	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('user_contacts');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.('user_contacts', function (contactTable) {
				contactTable
					?.uuid?.('id')
					?.notNullable?.()
					?.primary?.()
					?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));
				contactTable
					?.uuid?.('user_id')
					?.notNullable?.()
					?.references?.('id')
					?.inTable?.('users')
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
		?.hasTable?.('user_locales');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.('user_locales', function (localeTable) {
				localeTable
					?.uuid?.('id')
					?.notNullable?.()
					?.primary?.()
					?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));
				localeTable
					?.uuid?.('user_id')
					?.notNullable?.()
					?.references?.('id')
					?.inTable?.('users')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');
				localeTable
					?.text?.('locale_id')
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
		?.hasTable?.('user_names_by_locale');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.('user_names_by_locale', function (nameTable) {
				nameTable
					?.uuid?.('id')
					?.notNullable?.()
					?.primary?.()
					?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));
				nameTable
					?.uuid?.('user_id')
					?.notNullable?.()
					?.references?.('id')
					?.inTable?.('users')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');
				nameTable
					?.text?.('locale_id')
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

				nameTable?.unique?.(['user_id', 'locale_id']);
			});
	}
};

exports.down = async function (knex) {
	await knex?.raw?.(
		'DROP TABLE IF EXISTS public.user_names_by_locale CASCADE;'
	);
	await knex?.raw?.('DROP TABLE IF EXISTS public.user_locales CASCADE;');
	await knex?.raw?.('DROP TABLE IF EXISTS public.user_contacts CASCADE;');
	await knex?.raw?.('DROP TABLE IF EXISTS public.users CASCADE;');
};
