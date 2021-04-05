const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const DB_URI = process.env.DB_URL;
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));
