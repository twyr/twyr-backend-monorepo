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
				userTable?.date?.('date_of_birth')?.nullable?.();
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

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE OR REPLACE FUNCTION switch_user_primary_contact()
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
			public.user_contacts
		SET
			is_primary = false
		WHERE
			user_id = NEW.user_id AND
			id <> NEW.id;
	END IF;

	-- If there are no primaries, raise exception
	does_primary_exist := 0;
	SELECT
		COUNT(id)
	FROM
		user_contacts
	WHERE
		user_id = NEW.user_id AND
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
	trigger_switch_user_primary_contact
AFTER
	INSERT OR UPDATE
ON
	public.user_contacts
FOR EACH ROW
EXECUTE FUNCTION public.switch_user_primary_contact();
	`);

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE OR REPLACE FUNCTION prevent_user_primary_contact_deletion()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
	IF OLD.is_primary = true AND pg_trigger_depth() <= 1
	THEN
		RAISE SQLSTATE '2F003' USING MESSAGE = 'EVASERVER::USERS::CONTACT::CANNOT_DELETE_PRIMARY';
		RETURN NULL;
	END IF;

	RETURN OLD;
END;
$$;
	`);

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE TRIGGER
	trigger_prevent_user_primary_contact_deletion
BEFORE
	DELETE
ON
	public.user_contacts
FOR EACH ROW
EXECUTE FUNCTION public.prevent_user_primary_contact_deletion();
	`);

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

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE OR REPLACE FUNCTION switch_user_primary_locale()
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
			public.user_locales
		SET
			is_primary = false
		WHERE
			user_id = NEW.user_id AND
			id <> NEW.id;
	END IF;

	-- If there are no primaries, raise exception
	does_primary_exist := 0;
	SELECT
		COUNT(id)
	FROM
		user_locales
	WHERE
		user_id = NEW.user_id AND
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
	trigger_switch_user_primary_locale
AFTER
	INSERT OR UPDATE
ON
	public.user_locales
FOR EACH ROW
EXECUTE FUNCTION public.switch_user_primary_locale();
	`);

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE OR REPLACE FUNCTION prevent_user_primary_locale_deletion()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
	IF OLD.is_primary = true AND pg_trigger_depth() <= 1
	THEN
		RAISE SQLSTATE '2F003' USING MESSAGE = 'EVASERVER::USERS::LOCALE::CANNOT_DELETE_PRIMARY';
		RETURN NULL;
	END IF;

	RETURN OLD;
END;
$$;
	`);

	await knex?.schema?.withSchema?.('public')?.raw?.(`
CREATE TRIGGER
	trigger_prevent_user_primary_locale_deletion
BEFORE
	DELETE
ON
	public.user_locales
FOR EACH ROW
EXECUTE FUNCTION public.prevent_user_primary_locale_deletion();
	`);

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
	await knex?.raw?.(
		'DROP FUNCTION IF EXISTS public.prevent_user_primary_locale_deletion();'
	);
	await knex?.raw?.('DROP TABLE IF EXISTS public.user_contacts CASCADE;');
	await knex?.raw?.(
		'DROP FUNCTION IF EXISTS public.prevent_user_primary_contact_deletion();'
	);
	await knex?.raw?.('DROP TABLE IF EXISTS public.users CASCADE;');
};
