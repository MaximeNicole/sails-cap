/**
 * Features.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'features',

  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    featureId: {
      type: 'string',
      size: 50,
      primaryKey: true,
      required: true,
      columnName: 'feature_id'
    },

    name: {
      type: 'string',
      size: 125,
      columnName: 'feature_name'
    }

  }
};

