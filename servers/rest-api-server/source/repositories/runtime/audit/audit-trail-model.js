/**
 * Imports for this file
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Audit/Models
 *
 * @ignore
 */

/**
 * Magic constants
 *
 * @category REST API Server/Repositories/Runtime
 * @subcategory Audit/Models
 *
 * @ignore
 */
const COLLECTION_NAME = 'audit_trail';
const MODEL_NAME = 'audit_trail_model';

/**
 * @category REST API Server/Repositories/Runtime
 * @subcategory Audit/Models
 *
 * @class
 * @name ModelFactory
 *
 * @classdesc The UserAuditTrail MongoDB/Mongoose Model Class Factory.
 */
export default class ModelFactory {
	// #region Constructor
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Audit/Models
	 *
	 * @ignore
	 */
	constructor() {
		// Intentionally left blank
	}
	// #endregion

	// #region Lifecycle API
	/**
	 * @category REST API Server/Repositories/Runtime
	 * @subcategory Audit/Models
	 *
	 * @memberof ModelFactory
	 * @async
	 * @static
	 * @function
	 * @name createInstance
	 *
	 * @param {object} [connectionInstance] - Mongoose Connection Instance
	 *
	 * @returns {Mongoose.Model} - The UserAuditTrail Model instance.
	 */
	static async createInstance(connectionInstance) {
		// eslint-disable-next-line security/detect-object-injection
		if (connectionInstance?.models?.[MODEL_NAME]) {
			// eslint-disable-next-line security/detect-object-injection
			return connectionInstance?.models?.[MODEL_NAME];
		}

		let mongoose = await import('mongoose');
		mongoose = mongoose?.['default'];

		const UserAuditTrailSchema = mongoose?.Schema?.(
			{
				id: mongoose?.Schema?.Types?.String,
				start_time: mongoose?.Schema?.Types?.Date,
				end_time: mongoose?.Schema?.Types?.Date,
				duration_in_ms: mongoose?.Schema?.Types?.Number,

				user: {
					id: mongoose?.Schema?.Types?.String,
					name: mongoose?.Schema?.Types?.String,
					role: mongoose?.Schema?.Types?.String
				},

				device: mongoose?.Schema?.Types?.Mixed,

				'request-meta': {
					headers: mongoose?.Schema?.Types?.Mixed,
					method: mongoose?.Schema?.Types?.String,
					url: mongoose?.Schema?.Types?.String,
					ip: mongoose?.Schema?.Types?.String,
					ips: mongoose?.Schema?.Types?.Mixed
				},

				'response-meta': {
					headers: mongoose?.Schema?.Types?.Mixed,
					status: {
						code: mongoose?.Schema?.Types?.String,
						message: mongoose?.Schema?.Types?.String
					}
				},

				data: mongoose?.Schema?.Types?.Mixed,
				error: mongoose?.Schema?.Types?.Mixed
			},
			{
				collection: COLLECTION_NAME,
				timestamps: true,
				timeseries: {
					timeField: 'start_time',
					metaField: 'request_meta'
				}
			}
		);

		const UserAuditTrailModel = connectionInstance?.model?.(
			MODEL_NAME,
			UserAuditTrailSchema,
			COLLECTION_NAME
		);

		return UserAuditTrailModel;
	}
	// #endregion
}
