var mongo = require('mongodb');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var Mongoose = Promise.promisifyAll(require("mongoose"));
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
    db.Product.create(wine, function(error, results){
      if(error){
        callback(error, null)
      } else {
        callback(null, results);
      }
    })
  },

  addReview: function(review, callback){
    db.Review.create({content: review.content, rating: review.rating, product: review.product, username: review.username}, function(error, results){
      if(error){
        callback(error, null)
      } else {
        callback(null, results)
      }
    })
  },

  getReviews: function(product, callback){
    console.log('inside getReviews', product);
    db.Review.find({product: product}, function(error, results){
      if(error){
        callback(error, null);
      } else {
        callback(null, results);
      }
    })
  },

  top10Reds: function() { //TODO: test against populated database once forcedRequest is up, or against dummy data
    return db.Product.findAsync({redORwhite:red}).sort({rating: -1}).limit(10)
  },

  top10Whites: function() { //TODO: test against populated database once forcedRequest is up, or against dummy data
    return db.Product.findAsync({redORwhite:white}).sort({rating: -1}).limit(10)
  },

  top10Rated: function() { //TODO: test against populated database once forcedRequest is up, or against dummy data
    return db.Product.findAsync({}).sort({rating:-1}).limit(10)
  }
}
