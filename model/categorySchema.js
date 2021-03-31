const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});

const Category = mongoose.model("category", CategorySchema);
module.exports = Category;
