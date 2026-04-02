/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Middlewares
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

import { EVASBaseFactory } from '@twyr/framework-classes';
import { createErrorForPropagation } from '@twyr/error-serializer';
import { UserBaseMiddleware } from 'baseclass:middleware';
import { Mutex } from 'async-mutex';

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Middlewares
 *
 * @class
 * @name Basics
 * @extends UserBaseMiddleware
 *
 * @param {string} [location] - The artifact directory on disk.
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts.
 *
 * @classdesc Profile middleware for creating, reading, updating, and deleting
 * user basics, including localized user-name records.
 */
export class Basics extends UserBaseMiddleware {
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}

	/**
	 * Registers profile middleware APIs with the domain API registry.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @returns {Promise<null|undefined>} Nothing when registration succeeds.
	 */
	async _registerApi() {
		const errors = [];

		try {
			const apiRegistry = this?.domainInterface?.apiRegistry;
			let registerResolutions = [];
			const baseApis = await super._registerApi?.();

			for (const baseApi of baseApis ?? []) {
				registerResolutions?.push?.(
					apiRegistry?.register?.(baseApi?.pattern, baseApi?.handler)
				);
			}

			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'CREATE',
					this.#createBasics?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.('READ', this.#readBasics?.bind?.(this))
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'UPDATE',
					this.#updateBasics?.bind?.(this)
				)
			);
			registerResolutions?.push?.(
				apiRegistry?.register?.(
					'DELETE',
					this.#deleteBasics?.bind?.(this)
				)
			);

			registerResolutions =
				await Promise?.allSettled?.(registerResolutions);
			for (const registerResolution of registerResolutions) {
				if (registerResolution?.status === 'fulfilled') continue;
				errors?.push?.(registerResolution?.reason);
			}
		} catch (error) {
			errors?.push?.(error);
		}

		if (!errors?.length) return;
		const propagatedError = createErrorForPropagation?.(
			`${this?.name}::_registerApi error`,
			errors
		);
		if (propagatedError) throw propagatedError;
	}

	/**
	 * Unregisters profile middleware APIs from the domain API registry.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @returns {Promise<null|undefined>} Nothing when unregistration succeeds.
	 */
	async _unregisterApi() {
		const errors = [];

		try {
			const apiRegistry = this?.domainInterface?.apiRegistry;
			let unregisterResolutions = [];

			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'DELETE',
					this.#deleteBasics?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'UPDATE',
					this.#updateBasics?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'READ',
					this.#readBasics?.bind?.(this)
				)
			);
			unregisterResolutions?.push?.(
				apiRegistry?.unregister?.(
					'CREATE',
					this.#createBasics?.bind?.(this)
				)
			);

			unregisterResolutions = await Promise?.allSettled?.(
				unregisterResolutions
			);
			for (const unregisterResolution of unregisterResolutions) {
				if (unregisterResolution?.status === 'fulfilled') continue;
				errors?.push?.(unregisterResolution?.reason);
			}

			await super._unregisterApi?.();
		} catch (error) {
			errors?.push?.(error);
		}

		if (!errors?.length) return;
		const propagatedError = createErrorForPropagation?.(
			`${this?.name}::_unregisterApi error`,
			errors
		);
		if (propagatedError) throw propagatedError;
	}

	/**
	 * Creates a user profile after validating the submitted OTP, then persists
	 * localized name records for the requested locale and its translations.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Basics
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #createBasics
	 *
	 * @param {object} payload - API payload containing profile creation data.
	 * @param {object} payload.data - JSON:API payload for the user resource.
	 * @param {string} payload.locale - The current context locale.
	 * @returns {Promise<object>} HTTP response data for the created profile.
	 */
	async #createBasics({ data, locale }) {
		const Models = await this?._getModelsFromDomain?.([
			{ type: 'relational', name: 'user' },
			{ type: 'relational', name: 'user-locale' },
			{ type: 'relational', name: 'user-name-by-locale' },
			{ type: 'relational', name: 'user-contact' },
			{ type: 'relational', name: 'contact-type-master' }
		]);

		const UserModel = Models?.[0];
		const UserLocaleModel = Models?.[1];
		const UserNameByLocaleModel = Models?.[2];
		const UserContactModel = Models?.[3];
		const ContactTypeMasterModel = Models?.[4];

		const user =
			await this?.domainInterface?.serializer?.deserializeAsync?.(
				data?.data?.type,
				data
			);

		const cacheRepository =
			await this?.domainInterface?.iocContainer?.resolve?.('Cache');
		const otpNumber = await this?._executeWithBackOff?.(async () => {
			return cacheRepository?.get?.(`user-otp-${user?.mobile_no}`);
		});

		if (user?.otp !== otpNumber) {
			const userError = new Error(
				'EVASERVER::USERS::PROFILE::INVALID_OTP'
			);
			userError.code = 'EVASERVER::USERS::PROFILE::INVALID_OTP';
			throw userError;
		}

		const existingUser = await this?._executeWithBackOff?.(async () => {
			return UserModel?.query?.()
				?.where?.('mobile_no', '=', user?.mobile_no)
				?.andWhere?.('is_deleted', '=', false)
				?.first?.();
		});

		if (existingUser) {
			const userError = new Error(
				'EVASERVER::USERS::PROFILE::USER_ALREADY_EXISTS'
			);
			userError.code = 'EVASERVER::USERS::PROFILE::USER_ALREADY_EXISTS';
			throw userError;
		}

		const nameLocaleCode = user?.locale_id ?? user?.locale_code ?? locale;
		const userNameFields = {
			locale_code: nameLocaleCode,
			...(user?.first_name && { first_name: user?.first_name }),
			...(user?.middle_names && {
				middle_names: user?.middle_names
			}),
			...(user?.last_name && { last_name: user?.last_name }),
			...(user?.nickname && { nickname: user?.nickname })
		};

		const localizedUserNames =
			await this.#localizeUserNames?.(userNameFields);
		const mobileContactType = await this?._executeWithBackOff?.(
			async () => {
				return ContactTypeMasterModel?.query?.()
					?.where?.('name', '=', 'mobile')
					?.first?.();
			}
		);

		if (!mobileContactType?.id) {
			const userError = new Error(
				'EVASERVER::USERS::PROFILE::MOBILE_CONTACT_TYPE_NOT_FOUND'
			);
			userError.code =
				'EVASERVER::USERS::PROFILE::MOBILE_CONTACT_TYPE_NOT_FOUND';
			throw userError;
		}

		delete user.id;
		delete user.otp;
		delete user.first_name;
		delete user.middle_names;
		delete user.last_name;
		delete user.nickname;
		delete user.locale_id;
		delete user.locale_code;
		delete user.created_at;
		delete user.updated_at;

		let createdUser = undefined;
		await this?._executeWithBackOff?.(async () => {
			const trx = await UserModel?.startTransaction?.();
			await trx.raw('SET TRANSACTION ISOLATION LEVEL SERIALIZABLE');

			try {
				createdUser = await UserModel?.query?.(trx)?.insertAndFetch?.({
					...user
				});

				const locales = Object.keys?.(localizedUserNames) ?? [];
				for (const locale of locales) {
					// eslint-disable-next-line security/detect-object-injection
					const localizedUserName = localizedUserNames[locale];
					await UserNameByLocaleModel?.query?.(trx)?.insert?.({
						user_id: createdUser?.id,
						...localizedUserName
					});
				}

				if (nameLocaleCode) {
					await UserLocaleModel?.query?.(trx)?.insert?.({
						user_id: createdUser?.id,
						locale_id: nameLocaleCode,
						is_primary: true
					});
				}

				await UserContactModel?.query?.(trx)?.insert?.({
					user_id: createdUser?.id,
					contact_type_id: mobileContactType?.id,
					contact: createdUser?.mobile_no,
					verified: true,
					is_primary: true
				});

				await trx?.commit?.();
			} catch (error) {
				await trx?.rollback?.();
				throw error;
			}
		});

		this?.domainInterface?.eventEmitter?.emit?.('USER::INVALIDATE_CACHE', {
			userId: createdUser?.id
		});

		const createdUserResponse = await this.#readBasics({
			user: createdUser,
			locale: nameLocaleCode
		});

		return {
			status: 201,
			body: createdUserResponse?.body
		};
	}

	/**
	 * Reads the persisted profile for the authenticated user, ensuring a
	 * localized user-name record exists for the requested locale.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Basics
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #readBasics
	 *
	 * @param {object} payload - API payload containing the current user.
	 * @param {object} payload.user - The authenticated user record.
	 * @param {string} [payload.locale] - Locale requested for localized name data.
	 * @returns {Promise<object>} HTTP response data for the stored profile.
	 */
	async #readBasics({ user, locale }) {
		const UserModel = await this?._getModelsFromDomain?.([
			{ type: 'relational', name: 'user' }
		]);

		let relationshipSet = new Set([
			'contacts.[contactType]',
			'locales.[locale]',
			'names.[locale]'
		]);
		relationshipSet = safeJsonStringify?.([...relationshipSet]);
		relationshipSet = relationshipSet?.replace?.(/"/g, '');

		let storedUser = await this?._executeWithBackOff?.(async () => {
			return UserModel?.query?.()
				?.where?.('id', '=', user?.id)
				?.andWhere?.('is_deleted', '=', false)
				?.withGraphFetched?.(relationshipSet)
				?.first?.();
		});

		const requestedLocale =
			locale ??
			storedUser?.locales?.find?.(
				(storedLocale) => storedLocale?.is_primary
			)?.locale_id ??
			storedUser?.names?.[0]?.locale_id;

		if (storedUser && requestedLocale) {
			await this.#ensureUserNamesForLocale?.(storedUser, requestedLocale);
			storedUser.names = storedUser?.names?.filter?.((nameByLocale) => {
				return nameByLocale?.locale_id === requestedLocale;
			});
		}

		storedUser?.locales?.forEach?.((storedLocale) => {
			if (storedLocale?.locale_id && !storedLocale?.locale_code) {
				storedLocale.locale_code = storedLocale.locale_id;
			}
		});
		storedUser?.names?.forEach?.((nameByLocale) => {
			if (nameByLocale?.locale_id && !nameByLocale?.locale_code) {
				nameByLocale.locale_code = nameByLocale.locale_id;
			}
		});

		storedUser = await this?.domainInterface?.serializer?.serializeAsync?.(
			'user',
			storedUser
		);

		return {
			status: 200,
			body: storedUser
		};
	}

	/**
	 * Updates mutable fields on the authenticated user's profile, including
	 * localized user-name records for the requested locale.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Basics
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #updateBasics
	 *
	 * @param {object} payload - API payload containing the user and update body.
	 * @param {object} payload.user - The authenticated user record.
	 * @param {object} payload.data - JSON:API payload for the update.
	 * @returns {Promise<object>} HTTP response data for the updated profile.
	 */
	async #updateBasics({ user, data }) {
		const Models = await this?._getModelsFromDomain?.([
			{ type: 'relational', name: 'user' },
			{ type: 'relational', name: 'user-name-by-locale' }
		]);
		const UserModel = Models?.[0];
		const UserNameByLocaleModel = Models?.[1];

		const dataToBeUpdated =
			await this?.domainInterface?.serializer?.deserializeAsync?.(
				data?.data?.type,
				data
			);

		delete dataToBeUpdated.id;
		delete dataToBeUpdated.created_at;
		delete dataToBeUpdated.updated_at;
		delete dataToBeUpdated.is_deleted;
		delete dataToBeUpdated.otp;
		const nameLocaleCode =
			dataToBeUpdated?.locale_id ??
			dataToBeUpdated?.locale_code ??
			user?.locale_id ??
			user?.locale_code ??
			'en-IN';
		const userNameFields = {
			locale_code: nameLocaleCode,
			...(Object.hasOwn(dataToBeUpdated ?? {}, 'first_name') && {
				first_name: dataToBeUpdated?.first_name ?? ''
			}),
			...(Object.hasOwn(dataToBeUpdated ?? {}, 'middle_names') && {
				middle_names: dataToBeUpdated?.middle_names ?? ''
			}),
			...(Object.hasOwn(dataToBeUpdated ?? {}, 'last_name') && {
				last_name: dataToBeUpdated?.last_name ?? ''
			}),
			...(Object.hasOwn(dataToBeUpdated ?? {}, 'nickname') && {
				nickname: dataToBeUpdated?.nickname ?? ''
			})
		};

		let existingNameRecords = await this?._executeWithBackOff?.(
			async () => {
				return UserNameByLocaleModel?.query?.()
					?.where?.('user_id', '=', user?.id)
					?.select?.('id', 'locale_id');
			}
		);

		const hasNameFieldsToUpdate =
			Object.keys?.(userNameFields ?? [])?.filter?.((key) => {
				return key !== 'locale_code';
			})?.length > 0;
		const localizedUserNames = hasNameFieldsToUpdate
			? await this.#localizeUserNames?.(
					userNameFields,
					existingNameRecords?.map?.((record) => record?.locale_id)
				)
			: undefined;

		delete dataToBeUpdated.locale_id;
		delete dataToBeUpdated.locale_code;
		delete dataToBeUpdated.first_name;
		delete dataToBeUpdated.middle_names;
		delete dataToBeUpdated.last_name;
		delete dataToBeUpdated.nickname;

		await this?._executeWithBackOff?.(async () => {
			const trx = await UserModel?.startTransaction?.();
			await trx.raw('SET TRANSACTION ISOLATION LEVEL SERIALIZABLE');

			try {
				await UserModel?.query?.(trx)?.patchAndFetchById?.(user?.id, {
					...dataToBeUpdated
				});

				if (localizedUserNames) {
					const locales = Object.keys?.(localizedUserNames) ?? [];
					for (const locale of locales) {
						// eslint-disable-next-line security/detect-object-injection
						const localizedUserName = localizedUserNames[locale];
						const existingNameRecord = existingNameRecords?.find?.(
							(nameRecord) => {
								return (
									nameRecord?.locale_id ===
									localizedUserName?.locale_id
								);
							}
						);

						if (existingNameRecord) {
							await UserNameByLocaleModel?.query?.(
								trx
							)?.patchAndFetchById?.(existingNameRecord?.id, {
								...localizedUserName
							});
							continue;
						}

						await UserNameByLocaleModel?.query?.(trx)?.insert?.({
							user_id: user?.id,
							...localizedUserName
						});
					}
				}

				await trx?.commit?.();
			} catch (error) {
				await trx?.rollback?.();
				throw error;
			}
		});

		this?.domainInterface?.eventEmitter?.emit?.('USER::INVALIDATE_CACHE', {
			userId: user?.id
		});

		return this.#readBasics({ user, locale: nameLocaleCode });
	}

	/**
	 * Soft-deletes the authenticated user's profile.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Basics
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #deleteBasics
	 *
	 * @param {object} payload - API payload containing the current user.
	 * @param {object} payload.user - The authenticated user record.
	 * @returns {Promise<object>} HTTP response data for the delete operation.
	 */
	async #deleteBasics({ user }) {
		const UserModel = await this?._getModelsFromDomain?.([
			{ type: 'relational', name: 'user' }
		]);

		await this?._executeWithBackOff?.(async () => {
			return UserModel?.query?.().patchAndFetchById?.(user?.id, {
				is_deleted: true
			});
		});

		this?.domainInterface?.eventEmitter?.emit?.('USER::INVALIDATE_CACHE', {
			userId: user?.id
		});

		return {
			status: 204
		};
	}

	/**
	 * Translates user-name fields into the requested locales and returns a
	 * locale-keyed map ready for persistence.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Basics
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #localizeUserNames
	 *
	 * @param {object} userNameFields - Source locale and user-name fields.
	 * @param {string} userNameFields.locale_code - Source locale for the names.
	 * @param {string} [userNameFields.first_name] - First name value.
	 * @param {string} [userNameFields.middle_names] - Middle names value.
	 * @param {string} [userNameFields.last_name] - Last name value.
	 * @param {string} [userNameFields.nickname] - Nickname value.
	 * @param {string[]} [otherLocalesRequested] - Additional locale codes that
	 * should be translated alongside the source locale.
	 * @returns {Promise<object>} Locale-keyed name payloads for persistence.
	 */

	async #localizeUserNames(userNameFields, otherLocalesRequested) {
		let requestedLocales = new Set(otherLocalesRequested ?? []);
		requestedLocales?.add?.(userNameFields?.locale_code);
		requestedLocales?.add?.('en-IN');
		requestedLocales = [...requestedLocales]?.filter?.(Boolean);

		const localizedUserNames = {};
		requestedLocales?.forEach?.((locale) => {
			// eslint-disable-next-line security/detect-object-injection
			localizedUserNames[locale] = {
				locale_id: locale
			};
		});

		const translateRepository =
			await this?.domainInterface?.iocContainer?.resolve?.('Translate');

		const userNameFieldKeys = Object.keys?.(userNameFields) ?? [];
		for (let i = 0; i < userNameFieldKeys.length; i++) {
			// eslint-disable-next-line security/detect-object-injection
			const fieldKey = userNameFieldKeys[i];
			// eslint-disable-next-line security/detect-object-injection
			const fieldValue = userNameFields?.[fieldKey];

			if (fieldKey === 'locale_code') continue;

			for (let j = 0; j < requestedLocales.length; j++) {
				if ((fieldValue ?? '')?.trim?.() === '') {
					// eslint-disable-next-line security/detect-object-injection
					localizedUserNames[requestedLocales[j]][fieldKey] = '';
					continue;
				}

				const localeCharacterRegex =
					// eslint-disable-next-line security/detect-object-injection
					this.#localeCharacterRegexMap?.get?.(requestedLocales[j]);

				if (localeCharacterRegex?.test?.(fieldValue)) {
					// eslint-disable-next-line security/detect-object-injection
					localizedUserNames[requestedLocales[j]][fieldKey] =
						fieldValue;
					continue;
				}

				let fieldValueLocale = undefined;
				this.#localeCharacterRegexMap?.forEach?.((regex, locale) => {
					if (regex?.test?.(fieldValue)) fieldValueLocale = locale;
				});

				const translatedField = await this?._executeWithBackOff?.(
					async () => {
						return translateRepository?.translateText?.({
							Text: fieldValue,
							SourceLanguageCode: fieldValueLocale ?? 'auto',
							// eslint-disable-next-line security/detect-object-injection
							TargetLanguageCode: requestedLocales[j]
						});
					}
				);

				// eslint-disable-next-line security/detect-object-injection
				localizedUserNames[requestedLocales[j]][fieldKey] =
					translatedField?.TranslatedText ?? fieldValue;
			}
		}

		return localizedUserNames;
	}

	/**
	 * Ensures the user has a localized name row for the requested locale by
	 * translating from the first available stored name row when needed.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof Basics
	 * @async
	 * @instance
	 * @private
	 * @function
	 * @name #ensureUserNamesForLocale
	 *
	 * @param {object} user - User model with related localized name rows loaded.
	 * @param {string} locale - Locale code that must exist for the response.
	 * @returns {Promise<void>} Resolves after the localized name row exists.
	 */

	async #ensureUserNamesForLocale(user, locale) {
		const UserNameByLocaleModel = await this?._getModelsFromDomain?.([
			{ type: 'relational', name: 'user-name-by-locale' }
		]);

		const userNamesForLocale = user?.names?.find?.((nameByLocale) => {
			return nameByLocale?.locale_id === locale;
		});
		if (userNamesForLocale) return;

		const baseNameRecord = user?.names?.[0];
		if (!baseNameRecord?.locale_id) return;

		const localizedUserNames = await this.#localizeUserNames?.(
			{
				...(baseNameRecord?.locale_id && {
					locale_code: baseNameRecord?.locale_id
				}),
				...(Object.hasOwn(baseNameRecord ?? {}, 'first_name') && {
					first_name: baseNameRecord?.first_name ?? ''
				}),
				...(Object.hasOwn(baseNameRecord ?? {}, 'middle_names') && {
					middle_names: baseNameRecord?.middle_names ?? ''
				}),
				...(Object.hasOwn(baseNameRecord ?? {}, 'last_name') && {
					last_name: baseNameRecord?.last_name ?? ''
				}),
				...(Object.hasOwn(baseNameRecord ?? {}, 'nickname') && {
					nickname: baseNameRecord?.nickname ?? ''
				})
			},
			[locale]
		);

		const localizedNameRecord = await this?._executeWithBackOff?.(
			async () => {
				return UserNameByLocaleModel?.query?.().insertAndFetch?.({
					user_id: user?.id,
					// eslint-disable-next-line security/detect-object-injection
					...localizedUserNames?.[locale]
				});
			}
		);

		user?.names?.push?.(localizedNameRecord);
	}

	#localeCharacterRegexMap = new Map([
		['en-IN', /^[\p{Script=Latin}\p{M}\d\s.'()/-]*$/u],
		['bn-BD', /^[\p{Script=Bengali}\p{M}\d\s.'()/-]*$/u],
		['gu-IN', /^[\p{Script=Gujarati}\p{M}\d\s.'()/-]*$/u],
		['hi-IN', /^[\p{Script=Devanagari}\p{M}\d\s.'()/-]*$/u],
		['kn-IN', /^[\p{Script=Kannada}\p{M}\d\s.'()/-]*$/u],
		['ml-IN', /^[\p{Script=Malayalam}\p{M}\d\s.'()/-]*$/u],
		['mr-IN', /^[\p{Script=Devanagari}\p{M}\d\s.'()/-]*$/u],
		['ta-IN', /^[\p{Script=Tamil}\p{M}\d\s.'()/-]*$/u],
		['te-IN', /^[\p{Script=Telugu}\p{M}\d\s.'()/-]*$/u]
	]);
}

/**
 * @category REST API Server/Domains/Users
 * @subcategory Profile/Middlewares
 *
 * @class
 * @name BasicsMiddlewareFactory
 * @extends EVASBaseFactory
 *
 * @classdesc Factory for the profile basics middleware.
 */
export default class BasicsMiddlewareFactory extends EVASBaseFactory {
	static #mutex = new Mutex();
	static #basicsInstance = undefined;

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @ignore
	 */
	constructor() {
		super();
	}

	/**
	 * Creates or reuses the singleton basics middleware instance.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof BasicsMiddlewareFactory
	 * @static
	 * @function
	 * @name createInstances
	 *
	 * @param {object} domainInterface - Domain functionality exposed to sub-artifacts.
	 * @returns {Promise<Basics>} The singleton middleware instance.
	 */
	static async createInstances(domainInterface) {
		return await BasicsMiddlewareFactory.#mutex?.runExclusive?.(
			async () => {
				if (!BasicsMiddlewareFactory.#basicsInstance) {
					const basicsInstance = new Basics(
						BasicsMiddlewareFactory['$disk_unc'],
						domainInterface
					);

					await basicsInstance?.load?.();
					BasicsMiddlewareFactory.#basicsInstance = basicsInstance;
				}

				return BasicsMiddlewareFactory.#basicsInstance;
			}
		);
	}

	/**
	 * Destroys the singleton basics middleware instance.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof BasicsMiddlewareFactory
	 * @static
	 * @function
	 * @name destroyInstances
	 *
	 * @returns {Promise<void>} Resolves after the instance is unloaded.
	 */
	static async destroyInstances() {
		await BasicsMiddlewareFactory.#mutex?.runExclusive?.(async () => {
			await BasicsMiddlewareFactory.#basicsInstance?.unload?.();
			BasicsMiddlewareFactory.#basicsInstance = undefined;
		});
	}

	/**
	 * Gets the exported middleware name.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Profile/Middlewares
	 *
	 * @memberof BasicsMiddlewareFactory
	 * @static
	 * @readonly
	 * @member {string}
	 * @name MiddlewareName
	 * @returns {string} The middleware class name.
	 */
	static get MiddlewareName() {
		return 'Basics';
	}
}
