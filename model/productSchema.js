const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  category: String,
  type: String,
  brand: String,
  series: String,
  product_name: String,
  details: Object,
});

mongoose.model("product", ProductSchema);
module.exports = mongoose.model("product");
