var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = require('../../database-mongo/index.js');

module.exports = {

  checkuserName: function(username, password, callback){
    console.log('inside checkusername')
    console.log(username)
    console.log(password)
    db.User.find({name: username}, function(err, results) {
      if(err){
        console.log('error inside checkuserName', error)
        callback(error, false, null);
      }
      else if( results.length === 0 ) {
        console.log('dumb', results);
        callback(null, true, results);

      } else {
        console.log('results length', results.length);
        console.log('results from checkuserName', results);
        callback(null, false, results);
      }
    })
  },

  addUser: function(username, password, callback) {
    console.log('inside add user');
    db.User.create({name:username, password: password}, function(error, results) {
      if(error){
        console.log('error inside adduser', error)
        callback(error, false, null)
      } else {
        console.log('results from add user', results);
        callback(null, true, results);

      }
    })
  }
}