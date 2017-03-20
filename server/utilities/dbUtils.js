var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = require('../../database-mongo/index.js');

module.exports = {

  checkuserName: function(username, callback){
    db.User.find({name: username}, function(err, results) {
      if(err){
        callback(error, false, null);
      }
      else if( results.length === 0 ) {
        callback(null, true, results);

      } else {
        callback(null, false, results);
      }
    })
  },

  addUser: function(username, password, callback) {
    db.User.create({name:username, password: password}, function(error, results) {
      if(error){
        callback(error, false, null)
      } else {
        callback(null, true, results);
      }
    })
  },

  validateUser: function(username, password, callback) {
    db.User.find({name: username, password: password}, function(error, results) {
      if(error){
        callback(error, null);
      } else {
        callback(null, results);
      }
    })
  },

  addWine: function(wine, callback) {
    db.Product.create({wine: wine}, function(error, results){
      if(error){
        callback(error, null)
      } else {
        callback(null, results);
      }
    })
  }
}