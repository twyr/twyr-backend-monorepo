/**
 * Imports for this file
 *
 * @category REST API Server/Domains/System Admin
 * @subcategory Base Classes
 *
 * @ignore
 */
import { BaseMiddleware } from 'baseclass:middleware';

export { BaseMiddleware };

/**
 * @category REST API Server/Domains/System Admin
 * @subcategory Base Classes
 *
 * @class
 * @name SystemAdminBaseMiddleware
 * @extends BaseMiddleware
 *
 * @param {string} [location] - The artifact directory on disk.
 * @param {object} [domainInterface] - Domain functionality exposed to sub-artifacts.
 *
 * @classdesc Shared CRUD helpers for user-owned entities.
 */
export class SystemAdminBaseMiddleware extends BaseMiddleware {
	/**
	 * @category REST API Server/Domains/System Admin
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
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Base Classes
	 *
	 * @param {object} data - Model, payload, user and relationship details.
	 * @returns {Promise<object>} The HTTP status and raw entity payload.
	 */
	async _createUserEntity(data) {
		const EntityModel = await this._getModelsFromDomain(data.model);

		const userEntity = { ...data.payload };

		delete userEntity.id;
		delete userEntity.created_at;
		delete userEntity.updated_at;

		userEntity.system_admin_id = data.user.id;

		let existingEntityCount = await EntityModel.query()
			.count('* as count')
			.where('system_admin_id', '=', data.user.id)
			.first();
		existingEntityCount = Number.parseInt(existingEntityCount.count);
		if (!existingEntityCount) userEntity.is_primary = true;

		const createdEntity = await this._executeWithBackOff(async () => {
			return EntityModel.query()
				.insertAndFetch(userEntity)
				.withGraphFetched(data.relationships);
		});

		this.domainInterface.eventEmitter.emit(
			'SYSTEM_ADMIN::INVALIDATE_CACHE',
			{
				userId: data.user.id
			}
		);

		return {
			status: 201,
			body: createdEntity
		};
	}

	/**
	 * Reads one or more user-owned entities.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Base Classes
	 *
	 * @param {object} data - Model, user, entity id and relationship details.
	 * @returns {Promise<object>} The HTTP status and raw entity payload.
	 */
	async _readUserEntity(data) {
		const EntityModel = await this._getModelsFromDomain(data.model);

		let userEntities;
		if (!data.entityId) {
			userEntities = await this._executeWithBackOff(async () => {
				return EntityModel.query()
					.where('system_admin_id', '=', data.user.id)
					.withGraphFetched(data.relationships);
			});
		} else {
			userEntities = await this._executeWithBackOff(async () => {
				return EntityModel.query()
					.where('id', '=', data.entityId)
					.andWhere('system_admin_id', '=', data.user.id)
					.withGraphFetched(data.relationships);
			});
		}

		return {
			status: 200,
			body: userEntities
		};
	}

	/**
	 * Updates a user-owned entity and invalidates the user cache.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Base Classes
	 *
	 * @param {object} data - Model, payload, user and relationship details.
	 * @returns {Promise<object>} The HTTP status and raw entity payload.
	 */
	async _updateUserEntity(data) {
		const EntityModel = await this._getModelsFromDomain(data.model);

		const userEntity = { ...data.payload };

		delete userEntity.created_at;
		delete userEntity.updated_at;
		userEntity.system_admin_id = data.user.id;

		const entityBelongsToUser = await this._executeWithBackOff(async () => {
			return EntityModel.query()
				.where('id', '=', userEntity.id)
				.andWhere('system_admin_id', '=', data.user.id)
				.first();
		});

		if (!entityBelongsToUser) {
			const userError = new Error(
				'EVASERVER::SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS'
			);
			userError.status = 403;
			userError.code =
				'EVASERVER::SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS';

			throw userError;
		}

		const updatedEntity = await this._executeWithBackOff(async () => {
			return EntityModel.query()
				.patchAndFetchById(userEntity.id, userEntity)
				.withGraphFetched(data.relationships);
		});

		this.domainInterface.eventEmitter.emit(
			'SYSTEM_ADMIN::INVALIDATE_CACHE',
			{
				userId: data.user.id
			}
		);

		return {
			status: 201,
			body: updatedEntity
		};
	}

	/**
	 * Deletes a user-owned entity and invalidates the user cache.
	 *
	 * @category REST API Server/Domains/System Admin
	 * @subcategory Base Classes
	 *
	 * @param {object} data - Model, entity id and current user details.
	 * @returns {Promise<object>} The HTTP status for the delete operation.
	 */
	async _deleteUserEntity(data) {
		const EntityModel = await this._getModelsFromDomain(data.model);

		const entityBelongsToUser = await this._executeWithBackOff(async () => {
			return EntityModel.query()
				.where('id', '=', data.entityId)
				.andWhere('system_admin_id', '=', data.user.id)
				.first();
		});

		if (!entityBelongsToUser) {
			const userError = new Error(
				'EVASERVER::SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS'
			);
			userError.status = 403;
			userError.code =
				'EVASERVER::SYSTEM_ADMIN::PROFILE::INSUFFICIENT_PERMISSIONS';

			throw userError;
		}

		await this._executeWithBackOff(async () => {
			return EntityModel.query()
				.deleteById(data.entityId)
				.andWhere('system_admin_id', '=', data.user.id);
		});

		this.domainInterface.eventEmitter.emit(
			'SYSTEM_ADMIN::INVALIDATE_CACHE',
			{
				userId: data.user.id
			}
		);

		return {
			status: 204
		};
	}
}
