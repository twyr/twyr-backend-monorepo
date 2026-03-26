const { Model } = require('objection');

/**
 * @category REST API Server/Base Classes
 * @subcategory Base Classes
 *
 * @class
 * @name BaseModel
 * @classdesc
 * The Base Class for all Objection.js Models in the Server.
 * Adds functionality to change the "updated_on" field on
 * each operation
 */
class BaseModel extends Model {
	/**
	 * Updates the `updated_at` timestamp before persisting changes.
	 *
	 * @category REST API Server/Base Classes
	 * @subcategory Base Classes
	 *
	 * @returns {void} Nothing.
	 */
	$beforeUpdate() {
		// Set the updated_on (or updatedAt) column to the current time before any update operation
		this.updated_at = new Date().toISOString();
	}
}

module.exports = BaseModel;
