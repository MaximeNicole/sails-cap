/**
 * News.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var News = require('../News');

module.exports = {

  connection: 'uk',
  tableName: News.tableName,

  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: News.attributes

};

