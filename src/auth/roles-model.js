'use strict';
/**
 * Roles Module
 * @module src/auth/roles-model
 */

const mongoose = require('mongoose');

/**
 * Class representing a role.
 * @extends Model
 */
const rolesSchema = new mongoose.Schema({
  role: {type: String, required:true},
  capabilities: {type: Array, required:true},
});

module.exports = mongoose.model('roles', rolesSchema);
