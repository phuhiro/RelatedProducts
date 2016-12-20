var mongoose = require('mongoose');

var rpSchema = mongoose.Schema({
  productID: String,
  forProduct: String,
  title: String,
  order: Number,
  forStore: String,
  image: String,

}, {collection:'RelatedProducts'})

module.exports = mongoose.model('RelatedProducts', rpSchema)