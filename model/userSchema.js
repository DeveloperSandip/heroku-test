const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

mongoose.model("users", UserSchema);
module.exports = mongoose.model("users");
