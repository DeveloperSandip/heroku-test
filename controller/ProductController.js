const express = require("express");
const router = express.Router();
const Product = require("../model/productSchema");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//Get all the products
router.get("/product", async (req, res) => {
  const product = await Product.find({});
  try {
    res
      .status(200)
      .send({ status: 200, message: "Product added successfully" });
  } catch (err) {
    res.status(400).send({ status: 400, message: err });
  }
});

module.exports = router;
