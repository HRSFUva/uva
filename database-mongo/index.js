var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:uva');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection errorINSIDE BIND'));

db.once('open', function() {

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
    user_id: Number
  });

  var productSchema = mongoose.Schema({
    name: String,
    year: Number,
    type: String,
    origin: String,
    varietal: String,
    price: Number,
    owner_id: Number
  });

  var User = mongoose.model('User', userSchema);
  var Review = mongoose.model('Review', reviewSchema);
  var Product = mongoose.model('Product', productSchema);

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

});














