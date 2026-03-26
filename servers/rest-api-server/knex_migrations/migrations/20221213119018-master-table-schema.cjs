'use strict';

exports.up = async function (knex) {
	let exists;

	// Country code master (base)
	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('country_code_master');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'country_code_master',
				function (countryCodeMasterTable) {
					countryCodeMasterTable
						?.text?.('iso_code')
						?.notNullable?.()
						?.primary?.()
						?.comment?.(
							`The 3-letter alphabetic code used by the International Standards Organization for each country`
						);

					countryCodeMasterTable
						?.text?.('unsd_code')
						?.notNullable?.()
						?.comment?.(
							`The 3-digit numeric code used by the United Nations Statistics Division for each country`
						);

					countryCodeMasterTable
						?.boolean?.('is_enabled')
						?.notNullable?.()
						?.defaultTo?.(false);

					countryCodeMasterTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					countryCodeMasterTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
				}
			);
	}

	// Locale master
	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('locale_master');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.('locale_master', function (localesMasterTable) {
				localesMasterTable
					?.text?.('code')
					?.notNullable?.()
					?.primary?.();
				localesMasterTable?.text?.('language_code')?.notNullable?.();
				localesMasterTable
					?.boolean?.('is_rtl')
					?.notNullable?.()
					?.defaultTo?.(false);
				localesMasterTable
					?.boolean?.('is_enabled')
					?.notNullable?.()
					?.defaultTo?.(false);

				localesMasterTable
					?.text?.('country_code')
					?.notNullable?.()
					?.references?.('iso_code')
					?.inTable?.('country_code_master')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');

				localesMasterTable
					?.timestamp?.('created_at')
					?.notNullable?.()
					?.defaultTo?.(knex.fn.now());
				localesMasterTable
					?.timestamp?.('updated_at')
					?.notNullable?.()
					?.defaultTo?.(knex.fn.now());
			});
	}

	// Locale localized names
	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('locale_by_locale');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.('locale_by_locale', function (localeByLocaleTable) {
				localeByLocaleTable
					?.uuid?.('id')
					?.notNullable?.()
					?.primary?.()
					?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

				localeByLocaleTable
					?.text?.('locale_code')
					?.notNullable?.()
					?.references?.('code')
					?.inTable?.('locale_master')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');

				localeByLocaleTable
					?.text?.('locale_id')
					?.notNullable?.()
					?.references?.('code')
					?.inTable?.('locale_master')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');
				localeByLocaleTable?.text?.('language_name')?.notNullable?.();

				localeByLocaleTable
					?.timestamp?.('created_at')
					?.notNullable?.()
					?.defaultTo?.(knex.fn.now());
				localeByLocaleTable
					?.timestamp?.('updated_at')
					?.notNullable?.()
					?.defaultTo?.(knex.fn.now());

				localeByLocaleTable?.unique?.(['locale_code', 'locale_id']);
			});
	}

	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('locale_fallback_master');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'locale_fallback_master',
				function (localesFallbackMasterTable) {
					localesFallbackMasterTable
						?.text?.('locale_code')
						?.notNullable?.()
						?.references?.('code')
						?.inTable?.('locale_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');

					localesFallbackMasterTable
						?.text?.('fallback_locale_code')
						?.notNullable?.()
						?.references?.('code')
						?.inTable?.('locale_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');

					localesFallbackMasterTable
						?.integer?.('priority')
						?.notNullable?.();

					localesFallbackMasterTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					localesFallbackMasterTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());

					localesFallbackMasterTable?.primary?.([
						'locale_code',
						'priority'
					]);
				}
			);
	}

	// Country code localized names
	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('country_code_by_locale');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'country_code_by_locale',
				function (countryCodeByLocaleTable) {
					countryCodeByLocaleTable
						?.uuid?.('id')
						?.notNullable?.()
						?.primary?.()
						?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

					countryCodeByLocaleTable
						?.text?.('iso_code')
						?.notNullable?.()
						?.references?.('iso_code')
						?.inTable?.('country_code_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');

					countryCodeByLocaleTable
						?.text?.('locale_id')
						?.notNullable?.()
						?.references?.('code')
						?.inTable?.('locale_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');
					countryCodeByLocaleTable
						?.text?.('country_name')
						?.notNullable?.();

					countryCodeByLocaleTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					countryCodeByLocaleTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());

					countryCodeByLocaleTable?.unique?.([
						'iso_code',
						'locale_id'
					]);
				}
			);
	}

	// Contact type master
	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('contact_type_master');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'contact_type_master',
				function (contactTypeMasterTable) {
					contactTypeMasterTable
						?.uuid?.('id')
						?.notNullable?.()
						?.primary?.()
						?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

					contactTypeMasterTable
						?.text?.('name')
						?.notNullable?.()
						?.unique?.();

					contactTypeMasterTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					contactTypeMasterTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
				}
			);
	}

	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('contact_type_by_locale');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'contact_type_by_locale',
				function (contactTypeByLocaleTable) {
					contactTypeByLocaleTable
						?.uuid?.('id')
						?.notNullable?.()
						?.primary?.()
						?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

					contactTypeByLocaleTable
						?.uuid?.('contact_type_id')
						?.notNullable?.()
						?.references?.('id')
						?.inTable?.('contact_type_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');

					contactTypeByLocaleTable
						?.text?.('locale_id')
						?.notNullable?.()
						?.references?.('code')
						?.inTable?.('locale_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');
					contactTypeByLocaleTable
						?.text?.('display_name')
						?.notNullable?.();
					contactTypeByLocaleTable
						?.text?.('description')
						?.notNullable?.();

					contactTypeByLocaleTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					contactTypeByLocaleTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());

					contactTypeByLocaleTable?.unique?.([
						'contact_type_id',
						'locale_id'
					]);
				}
			);
	}

	// Genders
	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('gender_master');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.('gender_master', function (genderMasterTable) {
				genderMasterTable
					?.uuid?.('id')
					?.notNullable?.()
					?.primary?.()
					?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

				genderMasterTable?.text?.('name')?.notNullable?.()?.unique?.();

				genderMasterTable
					?.timestamp?.('created_at')
					?.notNullable?.()
					?.defaultTo?.(knex.fn.now());
				genderMasterTable
					?.timestamp?.('updated_at')
					?.notNullable?.()
					?.defaultTo?.(knex.fn.now());
			});
	}

	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('gender_by_locale');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.('gender_by_locale', function (genderByLocaleTable) {
				genderByLocaleTable
					?.uuid?.('id')
					?.notNullable?.()
					?.primary?.()
					?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

				genderByLocaleTable
					?.uuid?.('gender_id')
					?.notNullable?.()
					?.references?.('id')
					?.inTable?.('gender_master')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');

				genderByLocaleTable
					?.text?.('locale_id')
					?.notNullable?.()
					?.references?.('code')
					?.inTable?.('locale_master')
					?.onDelete?.('CASCADE')
					?.onUpdate?.('CASCADE');
				genderByLocaleTable?.text?.('display_name')?.notNullable?.();
				genderByLocaleTable?.text?.('description')?.notNullable?.();

				genderByLocaleTable
					?.timestamp?.('created_at')
					?.notNullable?.()
					?.defaultTo?.(knex.fn.now());
				genderByLocaleTable
					?.timestamp?.('updated_at')
					?.notNullable?.()
					?.defaultTo?.(knex.fn.now());

				genderByLocaleTable?.unique?.(['gender_id', 'locale_id']);
			});
	}

	// Facility status
	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('facility_status_master');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'facility_status_master',
				function (facilityStatusMasterTable) {
					facilityStatusMasterTable
						?.uuid?.('id')
						?.notNullable?.()
						?.primary?.()
						?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

					facilityStatusMasterTable
						?.text?.('name')
						?.notNullable?.()
						?.unique?.();

					facilityStatusMasterTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					facilityStatusMasterTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
				}
			);
	}

	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('facility_status_by_locale');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'facility_status_by_locale',
				function (facilityStatusByLocaleTable) {
					facilityStatusByLocaleTable
						?.uuid?.('id')
						?.notNullable?.()
						?.primary?.()
						?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

					facilityStatusByLocaleTable
						?.uuid?.('facility_status_id')
						?.notNullable?.()
						?.references?.('id')
						?.inTable?.('facility_status_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');

					facilityStatusByLocaleTable
						?.text?.('locale_id')
						?.notNullable?.()
						?.references?.('code')
						?.inTable?.('locale_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');
					facilityStatusByLocaleTable
						?.text?.('display_name')
						?.notNullable?.();
					facilityStatusByLocaleTable
						?.text?.('description')
						?.notNullable?.();

					facilityStatusByLocaleTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					facilityStatusByLocaleTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());

					facilityStatusByLocaleTable?.unique?.([
						'facility_status_id',
						'locale_id'
					]);
				}
			);
	}

	// Connection status
	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('connection_status_master');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'connection_status_master',
				function (connectionStatusMasterTable) {
					connectionStatusMasterTable
						?.uuid?.('id')
						?.notNullable?.()
						?.primary?.()
						?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

					connectionStatusMasterTable
						?.text?.('name')
						?.notNullable?.()
						?.unique?.();

					connectionStatusMasterTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					connectionStatusMasterTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
				}
			);
	}

	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('connection_status_by_locale');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'connection_status_by_locale',
				function (connectionStatusByLocaleTable) {
					connectionStatusByLocaleTable
						?.uuid?.('id')
						?.notNullable?.()
						?.primary?.()
						?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

					connectionStatusByLocaleTable
						?.uuid?.('connection_status_id')
						?.notNullable?.()
						?.references?.('id')
						?.inTable?.('connection_status_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');

					connectionStatusByLocaleTable
						?.text?.('locale_id')
						?.notNullable?.()
						?.references?.('code')
						?.inTable?.('locale_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');
					connectionStatusByLocaleTable
						?.text?.('display_name')
						?.notNullable?.();
					connectionStatusByLocaleTable
						?.text?.('description')
						?.notNullable?.();

					connectionStatusByLocaleTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					connectionStatusByLocaleTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());

					connectionStatusByLocaleTable?.unique?.([
						'connection_status_id',
						'locale_id'
					]);
				}
			);
	}

	// Relationship type master
	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('relationship_type_master');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'relationship_type_master',
				function (relationshipTypeMasterTable) {
					relationshipTypeMasterTable
						?.uuid?.('id')
						?.notNullable?.()
						?.primary?.()
						?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

					relationshipTypeMasterTable
						?.text?.('name')
						?.notNullable?.()
						?.unique?.();

					relationshipTypeMasterTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					relationshipTypeMasterTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
				}
			);
	}

	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('relationship_type_by_locale');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'relationship_type_by_locale',
				function (relationshipTypeByLocaleTable) {
					relationshipTypeByLocaleTable
						?.uuid?.('id')
						?.notNullable?.()
						?.primary?.()
						?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

					relationshipTypeByLocaleTable
						?.uuid?.('relationship_type_id')
						?.notNullable?.()
						?.references?.('id')
						?.inTable?.('relationship_type_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');

					relationshipTypeByLocaleTable
						?.text?.('locale_id')
						?.notNullable?.()
						?.references?.('code')
						?.inTable?.('locale_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');
					relationshipTypeByLocaleTable
						?.text?.('display_name')
						?.notNullable?.();
					relationshipTypeByLocaleTable
						?.text?.('description')
						?.notNullable?.();

					relationshipTypeByLocaleTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					relationshipTypeByLocaleTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());

					relationshipTypeByLocaleTable?.unique?.([
						'relationship_type_id',
						'locale_id'
					]);
				}
			);
	}

	// System message master
	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('system_message_master');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'system_message_master',
				function (systemMessageMasterTable) {
					systemMessageMasterTable
						?.text?.('id')
						?.notNullable?.()
						?.primary?.();

					systemMessageMasterTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					systemMessageMasterTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
				}
			);
	}

	exists = await knex?.schema
		?.withSchema?.('public')
		?.hasTable?.('system_message_by_locale');
	if (!exists) {
		await knex?.schema
			?.withSchema?.('public')
			?.createTable?.(
				'system_message_by_locale',
				function (systemMessageByLocaleTable) {
					systemMessageByLocaleTable
						?.uuid?.('id')
						?.notNullable?.()
						?.primary?.()
						?.defaultTo?.(knex?.raw?.('gen_random_uuid()'));

					systemMessageByLocaleTable
						?.text?.('message_id')
						?.notNullable?.()
						?.references?.('id')
						?.inTable?.('system_message_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');

					systemMessageByLocaleTable
						?.text?.('locale_id')
						?.notNullable?.()
						?.references?.('code')
						?.inTable?.('locale_master')
						?.onDelete?.('CASCADE')
						?.onUpdate?.('CASCADE');

					systemMessageByLocaleTable
						?.text?.('message_text')
						?.notNullable?.();

					systemMessageByLocaleTable
						?.timestamp?.('created_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());
					systemMessageByLocaleTable
						?.timestamp?.('updated_at')
						?.notNullable?.()
						?.defaultTo?.(knex.fn.now());

					systemMessageByLocaleTable?.unique?.([
						'message_id',
						'locale_id'
					]);
				}
			);
	}
};

exports.down = async function (knex) {
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.relationship_type_by_locale CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.relationship_type_master CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.system_message_by_locale CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.system_message_master CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.india_pincode_by_locale CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.india_pincode_master CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.tmp_india_pincode_master CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.connection_status_by_locale CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.connection_status_master CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.facility_status_by_locale CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.facility_status_master CASCADE;`
	);
	await knex?.raw?.(`DROP TABLE IF EXISTS public.gender_by_locale CASCADE;`);
	await knex?.raw?.(`DROP TABLE IF EXISTS public.gender_master CASCADE;`);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.contact_type_by_locale CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.contact_type_master CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.country_code_by_locale CASCADE;`
	);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.locale_fallback_master CASCADE;`
	);
	await knex?.raw?.(`DROP TABLE IF EXISTS public.locale_by_locale CASCADE;`);
	await knex?.raw?.(`DROP TABLE IF EXISTS public.locale_master CASCADE;`);
	await knex?.raw?.(
		`DROP TABLE IF EXISTS public.country_code_master CASCADE;`
	);
};
