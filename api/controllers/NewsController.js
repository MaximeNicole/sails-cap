/**
 * NewsController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  find: function (req, res) {

    var defaultModel = 'News';
    if (typeof req.headers.database !== 'undefined' && req.headers.database !== '') {
      var database = req.headers.database.toLowerCase();
      var subModel = database.charAt(0).toUpperCase() + database.slice(1) + defaultModel;
      sails.log.debug('Datatbase:', database, 'Model:', subModel);

      var ModelNews = global[subModel];

      ModelNews.find().limit(10).exec(function (err, results) {
        if(err) {
          sails.log.error(err);
          return res.error(err);
        }
        return res.json(results);
      });
    }

  }

};

