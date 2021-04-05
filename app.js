const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const db = require("./db");
const AuthController = require("./controller/AuthController");
const CategoryController = require("./controller/CategoryController");
const ProductController = require("./controller/ProductController");

app.use(cors());

app.use("/api/auth", AuthController);
app.use("/api/categories", CategoryController);
app.use("/api/products", ProductController);
app.get("/", (req, res) => {
  res.send({ status: 200, message: "Health OK" });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server is running on PORT" + port);
});
