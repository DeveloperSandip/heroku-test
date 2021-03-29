const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});

mongoose.model("product", ProductSchema);
module.exports = mongoose.model("product");
