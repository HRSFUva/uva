var mongoose = require('mongoose');

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

module.exports = mongoose.model('User', userSchema);