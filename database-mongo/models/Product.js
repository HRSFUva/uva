var mongoose = require('mongoose');

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

module.exports = mongoose.model('Product', productSchema);