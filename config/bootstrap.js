/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  var fs = require('fs')
    , ini = require('ini');

  var config = ini.parse(fs.readFileSync('/apps/sites/talent-dev.capgemini.com/htdocs/application/configs/databases.ini', 'utf-8'));
  // sails.log.debug(config['development : production']);
  var tables = ['global', 'uk'];
  var configDB = config['development : production'];
  Object.keys(configDB).map(function (objectKey) {
    var value = configDB[objectKey];
    var find = false;
    tables.forEach(function (table, index, array) {
      if(objectKey.indexOf(table) !== -1) {
        // sails.log.debug("Value: ", value, objectKey);
        find = table;
      }
      if(array.length === (index + 1) && find !== false && typeof sails.config.connections[table] === 'undefined') {
        sails.log.debug(find);
        sails.config.connections[table] = {
          adapter: 'sails-mysql',
          host: 'localhost',
          user: configDB['resources.multidb.'+table+'.username'],
          password: configDB['resources.multidb.'+table+'.password'],
          database: configDB['resources.multidb.'+table+'.dbname']
        };
      }
    });
  });


  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
