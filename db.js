const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/auth");
const DB_URI =
  "mongodb+srv://sandip:sandip@delepment-cluster.6azuf.mongodb.net/shoppingCart?retryWrites=true&w=majority";
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));
