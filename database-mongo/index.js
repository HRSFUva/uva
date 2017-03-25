var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
console.log('prpoijasdfpoijasfd', process.env.MONGO_USER);
console.log('prpoijasdfpoijasfd', process.env.MONGO_PASS);
var url = 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASS + '@ds139480.mlab.com:39480/uva'
console.log('asdfjas;ldfj', url);
mongoose.connect('mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASS + '@ds139480.mlab.com:39480/uva');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection errorINSIDE BIND'));

db.once('open', function() {
  console.log('connected');

});
var userSchema = mongoose.Schema({
  name: String,
  isOwner: Boolean,
  isAdmin: Boolean,
  joined: Date,
  password: String,
  salt: String,
  meta: {
    reviews: Number,
    friends: Number
  }
});

var reviewSchema = mongoose.Schema({
  content: String,
  product: String,
  rating: Number,
  username: String,
  product_id: String,
  time: Date
});

var productSchema = mongoose.Schema({
  name: {type: String, unique: true},
  year: String,
  type: String, //e.x. cabernet, merlot
  redORwhite: String, //red wines or white wines
  origin: String, //e.x Sonoma County
  region: String, //e.x California, France
  priceMin: Number,
  priceMax: Number,
  rating: Number, //uva community's average rating
  apiRating: Number,
  owner_id: Number
});

var models = {
  User: mongoose.model('User', userSchema),
  Review: mongoose.model('Review', reviewSchema),
  Product: mongoose.model('Product', productSchema)
}

module.exports = models;
















  //TESTING FUNCTIONALITY

  // var mike = new User({
  //   name: 'mike',
  //   isOwner: false,
  //   isAdmin: true,
  //   join: new Date,
  //   meta: {
  //     reviews: 10,
  //     friends: 10
  //   }
  // })

  // var speedyReview = new Review({
  //   content: 'awesome wine, great value',
  //   product: 'speedy creek zin',
  //   rating: 5,
  //   user_id: 3
  // });

  // var speedyProduct = new Product({
  //   name: 'Speedy Creek',
  //   year: 2000,
  //   type: 'red',
  //   origin: 'napa',
  //   varietal: 'zin',
  //   price: 25,
  //   owner_id: 2098
  // })

  // mike.save(function (err, mike) {
  //   if(err) return console.error(err);
  //   console.log('mike:', mike);
  // })

  // speedyReview.save(function (err, speedyReview) {
  //   if(err) return console.error(err);
  //   console.log('speedyReview', speedyReview);
  // })

  // speedyProduct.save(function (err, speedyProduct) {
  //   if(err) return console.error(err);
  //   console.log('speedyProduct', speedyProduct);
  // })

  // User.find(function (err, users) {
  //   if(err) console.error(err);
  //   console.log('User:', User);
  // })

  // User.find({ name: /^mike/ }, function(err, results) {
  //   if(err) console.error(err);
  //   console.log('find results for mike: ', results);
  // })
