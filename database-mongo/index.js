var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/uva');

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
  username: String
});

var productSchema = mongoose.Schema({
  name: String,
  year: Number,
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
