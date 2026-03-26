/**
 * Imports for this file
 *
 * @category REST API Server/Domains/Users
 * @subcategory Base Classes
 *
 * @ignore
 */
import { BaseMiddleware } from 'baseclass:middleware';

export { BaseMiddleware };

/**
 * @category REST API Server/Domains/Users
 * @subcategory Base Classes
 *
 * @class
 * @name UserBaseMiddleware
 * @extends BaseMiddleware
 *
 * @param {string} [location] - The artifact directory on disk.
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts.
 *
 * @classdesc Shared CRUD helpers for user-owned entities.
 */
export class UserBaseMiddleware extends BaseMiddleware {
	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @ignore
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}

	/**
	 * Creates a new user-owned entity and invalidates the user cache.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @param {object} data - Model, payload, user and relationship details.
	 * @returns {Promise<object>} The HTTP status and serialized entity payload.
	 */
	async _createUserEntity(data) {
		const EntityModel = await this?._getModelsFromDomain?.(data?.model);

		const userEntity =
			await this?.domainInterface?.serializer?.deserializeAsync?.(
				data?.payload?.data?.type,
				data?.payload
			);

		delete userEntity.id;
		delete userEntity.created_at;
		delete userEntity.updated_at;

		userEntity.user_id = data?.user?.id;

		let existingEntityCount = await EntityModel?.query?.()
			?.count?.('* as count')
			?.where?.('user_id', '=', data?.user?.id)
			?.first?.();
		existingEntityCount = Number?.parseInt?.(existingEntityCount?.count);
		if (!existingEntityCount) userEntity.is_primary = true;

		let createdEntity = await this?._executeWithBackOff?.(async () => {
			return EntityModel?.query?.()
				?.insertAndFetch?.(userEntity)
				?.withGraphFetched?.(data?.relationships);
		});

		createdEntity =
			await this?.domainInterface?.serializer?.serializeAsync?.(
				data?.payload?.data?.type,
				createdEntity
			);

		this?.domainInterface?.eventEmitter?.emit?.('USER::INVALIDATE_CACHE', {
			userId: data?.user?.id
		});

		return {
			status: 201,
			body: createdEntity
		};
	}

	/**
	 * Reads one or more user-owned entities.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @param {object} data - Model, user, entity id and serialization options.
	 * @returns {Promise<object>} The HTTP status and serialized entity payload.
	 */
	async _readUserEntity(data) {
		const EntityModel = await this?._getModelsFromDomain?.(data?.model);

		let userEntities;
		if (!data?.entityId) {
			userEntities = await this?._executeWithBackOff?.(async () => {
				return EntityModel?.query?.()
					?.where?.('user_id', '=', data?.user?.id)
					?.withGraphFetched?.(data?.relationships);
			});
		} else {
			userEntities = await this?._executeWithBackOff?.(async () => {
				return EntityModel?.query?.()
					?.where?.('id', '=', data?.entityId)
					?.andWhere?.('user_id', '=', data?.user?.id)
					?.withGraphFetched?.(data?.relationships);
			});
		}

		if (data?.serializeType) {
			userEntities =
				await this?.domainInterface?.serializer?.serializeAsync?.(
					data?.serializeType,
					userEntities
				);
		}

		return {
			status: 200,
			body: userEntities
		};
	}

	/**
	 * Updates a user-owned entity and invalidates the user cache.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @param {object} data - Model, payload, user and relationship details.
	 * @returns {Promise<object>} The HTTP status and serialized entity payload.
	 */
	async _updateUserEntity(data) {
		const EntityModel = await this?._getModelsFromDomain?.(data?.model);

		const userEntity =
			await this?.domainInterface?.serializer?.deserializeAsync?.(
				data?.payload?.data?.type,
				data?.payload
			);

		delete userEntity.created_at;
		delete userEntity.updated_at;
		userEntity.user_id = data?.user?.id;

		const entityBelongsToUser = await this?._executeWithBackOff?.(
			async () => {
				return EntityModel?.query?.()
					?.where?.('id', '=', userEntity?.id)
					?.andWhere?.('user_id', '=', data?.user?.id)
					?.first?.();
			}
		);

		if (!entityBelongsToUser) {
			const userError = new Error(
				'EVASERVER::USERS::PROFILE::INSUFFICIENT_PERMISSIONS'
			);
			userError.status = 403;
			userError.code =
				'EVASERVER::USERS::PROFILE::INSUFFICIENT_PERMISSIONS';

			throw userError;
		}

		let updatedEntity = await this?._executeWithBackOff?.(async () => {
			return EntityModel?.query?.()
				?.patchAndFetchById?.(userEntity?.id, userEntity)
				?.withGraphFetched?.(data?.relationships);
		});

		updatedEntity =
			await this?.domainInterface?.serializer?.serializeAsync?.(
				data?.payload?.data?.type,
				updatedEntity
			);

		this?.domainInterface?.eventEmitter?.emit?.('USER::INVALIDATE_CACHE', {
			userId: data?.user?.id
		});

		return {
			status: 201,
			body: updatedEntity
		};
	}

	/**
	 * Deletes a user-owned entity and invalidates the user cache.
	 *
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @param {object} data - Model, entity id and current user details.
	 * @returns {Promise<object>} The HTTP status for the delete operation.
	 */
	async _deleteUserEntity(data) {
		const EntityModel = await this?._getModelsFromDomain?.(data?.model);

		const entityBelongsToUser = await this?._executeWithBackOff?.(
			async () => {
				return EntityModel?.query?.()
					?.where?.('id', '=', data?.entityId)
					?.andWhere?.('user_id', '=', data?.user?.id)
					?.first?.();
			}
		);

		if (!entityBelongsToUser) {
			const userError = new Error(
				'EVASERVER::USERS::PROFILE::INSUFFICIENT_PERMISSIONS'
			);
			userError.status = 403;
			userError.code =
				'EVASERVER::USERS::PROFILE::INSUFFICIENT_PERMISSIONS';

			throw userError;
		}

		await this?._executeWithBackOff?.(async () => {
			return EntityModel?.query?.()
				?.deleteById?.(data?.entityId)
				?.andWhere?.('user_id', '=', data?.user?.id);
		});

		this?.domainInterface?.eventEmitter?.emit?.('USER::INVALIDATE_CACHE', {
			userId: data?.user?.id
		});

		return {
			status: 204
		};
	}
}

export const MedicoBaseMiddleware = UserBaseMiddleware;
