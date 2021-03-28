const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});

mongoose.model("category", CategorySchema);
module.exports = mongoose.model("category");
