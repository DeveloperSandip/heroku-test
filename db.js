const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/auth");
// const DB_URI =
//   '"mongodb+srv://sandip:sandip@cluster0.jyaax.mongodb.net/shoppingCart?retryWrites=true&w=majority"';
// try {
//   mongoose.connect(
//     DB_URI,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => {
//       console.log("connected to database");
//     }
//   );
// } catch (e) {
//   console.log(e);
// }
// mongoose.set("bufferCommands", false);
