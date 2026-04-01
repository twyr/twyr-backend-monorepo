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
				systemAdminTable?.date?.('date_of_birth')?.nullable?.();
				systemAdminTable
					?.uuid?.('gender_id')
					?.notNullable?.()
					?.references?.('id')
					?.inTable?.('gender_master')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');
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
					?.uuid?.('system_admin_id')
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

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE OR REPLACE FUNCTION switch_system_admin_primary_contact()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
	does_primary_exist	INTEGER;
BEGIN
	-- This is basically the switch primary contact case
	IF NEW.is_primary = true
	THEN
		UPDATE
			public.system_admin_contacts
		SET
			is_primary = false
		WHERE
			system_admin_id = NEW.system_admin_id AND
			id <> NEW.id;
	END IF;

	-- If there are no primaries, raise exception
	does_primary_exist := 0;
	SELECT
		COUNT(id)
	FROM
		system_admin_contacts
	WHERE
		system_admin_id = NEW.system_admin_id AND
		is_primary = true
	INTO
		does_primary_exist;

	IF does_primary_exist <= 0
	THEN
		RAISE SQLSTATE '2F003' USING MESSAGE = 'No primary contact detected';
		RETURN NULL;
	END IF;

	RETURN NEW;
END;
$$;
	`);

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE TRIGGER
	trigger_switch_system_admin_primary_contact
AFTER
	INSERT OR UPDATE
ON
	public.system_admin_contacts
FOR EACH ROW
EXECUTE FUNCTION public.switch_system_admin_primary_contact();
	`);

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE OR REPLACE FUNCTION prevent_system_admin_primary_contact_deletion()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
	IF OLD.is_primary = true
	THEN
		RAISE SQLSTATE '2F003' USING MESSAGE = 'EVASERVER::SYSTEM_ADMIN::CONTACT::CANNOT_DELETE_PRIMARY';
		RETURN NULL;
	END IF;

	RETURN OLD;
END;
$$;
	`);

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE TRIGGER
	trigger_prevent_system_admin_primary_contact_deletion
BEFORE
	DELETE
ON
	public.system_admin_contacts
FOR EACH ROW
EXECUTE FUNCTION public.prevent_system_admin_primary_contact_deletion();
	`);

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
					?.uuid?.('system_admin_id')
					?.notNullable?.()
					?.references?.('id')
					?.inTable?.('system_admins')
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

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE OR REPLACE FUNCTION switch_system_admin_primary_locale()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
	does_primary_exist	INTEGER;
BEGIN
	-- This is basically the switch primary locale case
	IF NEW.is_primary = true
	THEN
		UPDATE
			public.system_admin_locales
		SET
			is_primary = false
		WHERE
			system_admin_id = NEW.system_admin_id AND
			id <> NEW.id;
	END IF;

	-- If there are no primaries, raise exception
	does_primary_exist := 0;
	SELECT
		COUNT(id)
	FROM
		system_admin_locales
	WHERE
		system_admin_id = NEW.system_admin_id AND
		is_primary = true
	INTO
		does_primary_exist;

	IF does_primary_exist <= 0
	THEN
		RAISE SQLSTATE '2F003' USING MESSAGE = 'No primary locale detected';
		RETURN NULL;
	END IF;

	RETURN NEW;
END;
$$;
	`);

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE TRIGGER
	trigger_switch_system_admin_primary_locale
AFTER
	INSERT OR UPDATE
ON
	public.system_admin_locales
FOR EACH ROW
EXECUTE FUNCTION public.switch_system_admin_primary_locale();
	`);

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE OR REPLACE FUNCTION prevent_system_admin_primary_locale_deletion()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
	IF OLD.is_primary = true
	THEN
		RAISE SQLSTATE '2F003' USING MESSAGE = 'EVASERVER::SYSTEM_ADMIN::LOCALE::CANNOT_DELETE_PRIMARY';
		RETURN NULL;
	END IF;

	RETURN OLD;
END;
$$;
	`);

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE TRIGGER
	trigger_prevent_system_admin_primary_locale_deletion
BEFORE
	DELETE
ON
	public.system_admin_locales
FOR EACH ROW
EXECUTE FUNCTION public.prevent_system_admin_primary_locale_deletion();
	`);

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
						?.uuid?.('system_admin_id')
						?.notNullable?.()
						?.references?.('id')
						?.inTable?.('system_admins')
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

					nameTable?.unique?.(['system_admin_id', 'locale_id']);
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
		'DROP FUNCTION IF EXISTS public.prevent_system_admin_primary_locale_deletion();'
	);
	await knex?.raw?.(
		'DROP TABLE IF EXISTS public.system_admin_contacts CASCADE;'
	);
	await knex?.raw?.(
		'DROP FUNCTION IF EXISTS public.prevent_system_admin_primary_contact_deletion();'
	);
	await knex?.raw?.('DROP TABLE IF EXISTS public.system_admins CASCADE;');
};
