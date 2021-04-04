const express = require("express");
const router = express.Router();
const Product = require("../model/productSchema");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//Get a specific type of product
router.get("/", async (req, res) => {
  const type = req.query.productType;
  const products = await Product.find({ category: type });
  try {
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send({ status: 400, message: err });
  }
});

//Add a new Product
router.post("/add", async (req, res) => {
  const product = req.body;

  const response = await Product.create(product);
  try {
    res
      .status(200)
      .send({ status: 200, message: "Product added successfully" });
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
});

module.exports = router;
