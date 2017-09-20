/**
 * NewsCategory.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'news_categories',

  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    categoryId: {
      type: 'string',
      size: 50,
      primaryKey: true,
      required: true,
      columnName: 'category_id'
    },

    categoryName: {
      type: 'string',
      size: 125,
      columnName: 'category_name'
    },

    news: {
      collection: 'news',
      via: 'category'
    }

  }
};

