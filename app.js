const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const db = require("./db");
const AuthController = require("./controller/AuthController");
const CategoryController = require("./controller/CategoryController");

app.use(cors());

app.use("/api/auth", AuthController);
app.use("/api", CategoryController);

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server is running on PORT" + port);
});
