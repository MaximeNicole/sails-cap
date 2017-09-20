/**
 * News.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'news',

  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    nid: {
      type: 'string',
      size: 50,
      primaryKey: true,
      required: true,
      columnName: 'news_id'
    },

    title: {
      type: 'string',
      required: true,
      columnName: 'news_title'
    },

    /*country: {

    },*/

    creation: {
      type: 'string',
      size: 50,
      columnName: 'news_date'
    },

    modified: {
      type: 'string',
      size: 50,
      columnName: 'tstamp'
    },

    /*shortIntro: {

    },

    longIntro: {

    },*/

    nbLikes: {
      type: 'int',
      size: 10,
      columnName: 'likes'
    },

    newsUrl: {
      type: 'string',
      columnName: 'direct_link'
    },

    imgUrl: {
      type: 'string',
      size: 200,
      columnName: 'img_file'
    },

    videoUrl: {
      type: 'text',
      columnName: 'video_file'
    },

    /*hubId: {

    },

    hubName: {

    },*/

    content: {
      type: 'text',
      columnName: 'content'
    },

    status: {
      type: 'string',
      columnName: 'news_status'
    },

    category: {
      model: 'newsCategory',
      columnName: 'category_id'
    }

  },

  getModel: function (dbName) {
    return models[dbName];
  }

};

