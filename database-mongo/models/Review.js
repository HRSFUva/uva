var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
  content: String,
  product: String,
  rating: Number,
  username: String,
  product_id: String,
  time: Date
});

module.exports = mongoose.model('Review', reviewSchema);