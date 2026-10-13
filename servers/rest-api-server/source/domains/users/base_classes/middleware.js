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
	 * @memberof UserBaseMiddleware
	 * @instance
	 * @public
	 * @function
	 * @name constructor
	 *
	 * @param {string} location - Filesystem location of the artifact.
	 * @param {object} domainInterface - Domain APIs, repositories, models and event emitter.
	 *
	 * @returns {UserBaseMiddleware} A new UserBaseMiddleware instance.
	 *
	 * @description
	 * Initializes the UserBaseMiddleware middleware using its base class.
	 */
	constructor(location, domainInterface) {
		super(location, domainInterface);
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @memberof UserBaseMiddleware
	 * @async
	 * @instance
	 * @protected
	 * @function
	 * @name _createUserEntity
	 *
	 * @param {object} data - Model, payload, user and relationship details.
	 *
	 * @returns {Promise<object>} The HTTP status and raw entity payload.
	 *
	 * @description
	 * Creates a new user-owned entity and invalidates the user cache.
	 */
	async _createUserEntity(data) {
		// Step 1: Resolve the entity model.
		const EntityModel = await this._getModelsFromDomain(data.model);

		// Step 2: Remove generated fields from the payload before assigning its owner.
		const userEntity = { ...data.payload };

		delete userEntity.id;
		delete userEntity.created_at;
		delete userEntity.updated_at;

		userEntity.user_id = data.user.id;

		// Step 3: Make the first entity for this user the primary record.
		let existingEntityCount = await EntityModel.query()
			.count('* as count')
			.where('user_id', '=', data.user.id)
			.first();
		existingEntityCount = Number.parseInt(existingEntityCount.count);
		if (!existingEntityCount) userEntity.is_primary = true;

		// Step 4: Persist the entity and load its requested relationships.
		const createdEntity = await this._executeWithBackOff(async () => {
			return EntityModel.query()
				.insertAndFetch(userEntity)
				.withGraphFetched(data.relationships);
		});

		// Step 5: Request invalidation of the session cache.
		this.domainInterface.eventEmitter.emit('USER::INVALIDATE_CACHE', {
			userId: data.user.id
		});

		// Step 6: Return the created entity to the caller.
		return {
			status: 201,
			body: createdEntity
		};
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @memberof UserBaseMiddleware
	 * @async
	 * @instance
	 * @protected
	 * @function
	 * @name _readUserEntity
	 *
	 * @param {object} data - Model, user, entity id and relationship details.
	 *
	 * @returns {Promise<object>} The HTTP status and raw entity payload.
	 *
	 * @description
	 * Reads one or more user-owned entities.
	 */
	async _readUserEntity(data) {
		// Step 1: Resolve the entity model.
		const EntityModel = await this._getModelsFromDomain(data.model);

		// Step 2: Fetch one or all entities belonging to this user.
		let userEntities;
		if (!data.entityId) {
			userEntities = await this._executeWithBackOff(async () => {
				return EntityModel.query()
					.where('user_id', '=', data.user.id)
					.withGraphFetched(data.relationships);
			});
		} else {
			userEntities = await this._executeWithBackOff(async () => {
				return EntityModel.query()
					.where('id', '=', data.entityId)
					.andWhere('user_id', '=', data.user.id)
					.withGraphFetched(data.relationships);
			});
		}

		// Step 3: Return the fetched entities with a successful status.
		return {
			status: 200,
			body: userEntities
		};
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @memberof UserBaseMiddleware
	 * @async
	 * @instance
	 * @protected
	 * @function
	 * @name _updateUserEntity
	 *
	 * @param {object} data - Model, payload, user and relationship details.
	 *
	 * @returns {Promise<object>} The HTTP status and raw entity payload.
	 *
	 * @description
	 * Updates a user-owned entity and invalidates the user cache.
	 */
	async _updateUserEntity(data) {
		// Step 1: Resolve the entity model.
		const EntityModel = await this._getModelsFromDomain(data.model);

		// Step 2: Remove generated timestamps from the update before assigning its owner.
		const userEntity = { ...data.payload };

		delete userEntity.created_at;
		delete userEntity.updated_at;
		userEntity.user_id = data.user.id;

		// Step 3: Reject updates to an entity that does not belong to this user.
		const entityBelongsToUser = await this._executeWithBackOff(async () => {
			return EntityModel.query()
				.where('id', '=', userEntity.id)
				.andWhere('user_id', '=', data.user.id)
				.first();
		});

		if (!entityBelongsToUser) {
			const userError = new Error(
				'EVASERVER::USERS::PROFILE::INSUFFICIENT_PERMISSIONS'
			);
			userError.status = 403;
			userError.code =
				'EVASERVER::USERS::PROFILE::INSUFFICIENT_PERMISSIONS';

			throw userError;
		}

		// Step 4: Persist the changes and load the requested relationships.
		const updatedEntity = await this._executeWithBackOff(async () => {
			return EntityModel.query()
				.patchAndFetchById(userEntity.id, userEntity)
				.withGraphFetched(data.relationships);
		});

		// Step 5: Request invalidation of the session cache.
		this.domainInterface.eventEmitter.emit('USER::INVALIDATE_CACHE', {
			userId: data.user.id
		});

		// Step 6: Return the updated entity to the caller.
		return {
			status: 201,
			body: updatedEntity
		};
	}

	/**
	 * @category REST API Server/Domains/Users
	 * @subcategory Base Classes
	 *
	 * @memberof UserBaseMiddleware
	 * @async
	 * @instance
	 * @protected
	 * @function
	 * @name _deleteUserEntity
	 *
	 * @param {object} data - Model, entity id and current user details.
	 *
	 * @returns {Promise<object>} The HTTP status for the delete operation.
	 *
	 * @description
	 * Deletes a user-owned entity and invalidates the user cache.
	 */
	async _deleteUserEntity(data) {
		// Step 1: Resolve the entity model.
		const EntityModel = await this._getModelsFromDomain(data.model);

		// Step 2: Verify that the entity belongs to this user.
		const entityBelongsToUser = await this._executeWithBackOff(async () => {
			return EntityModel.query()
				.where('id', '=', data.entityId)
				.andWhere('user_id', '=', data.user.id)
				.first();
		});

		if (!entityBelongsToUser) {
			const userError = new Error(
				'EVASERVER::USERS::PROFILE::INSUFFICIENT_PERMISSIONS'
			);
			userError.status = 403;
			userError.code =
				'EVASERVER::USERS::PROFILE::INSUFFICIENT_PERMISSIONS';

			throw userError;
		}

		// Step 3: Delete the entity using both its identifier and its owner.
		await this._executeWithBackOff(async () => {
			return EntityModel.query()
				.deleteById(data.entityId)
				.andWhere('user_id', '=', data.user.id);
		});

		// Step 4: Request invalidation of the session cache.
		this.domainInterface.eventEmitter.emit('USER::INVALIDATE_CACHE', {
			userId: data.user.id
		});

		// Step 5: Return the deletion status to the caller.
		return {
			status: 204
		};
	}
}
