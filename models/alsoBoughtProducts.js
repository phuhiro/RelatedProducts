var mongoose = require('mongoose');

var bpSchema = mongoose.Schema({
  productID: String,
  forProduct: String,
  title: String,
  howMany: Number,
  handle: String,
  store: String,
  image: String,
  price: String,

}, {collection:'alsoBoughtProducts'})

module.exports = mongoose.model('alsoBoughtProducts', bpSchema)
