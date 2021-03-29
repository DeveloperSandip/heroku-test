const express = require("express");
const router = express.Router();
const Product = require("../model/productSchema");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//Get all the categories
router.get("/product", (req, res) => {
  Product.find({}, (err, category) => {
    if (err) throw err;
    res.status(200).send(category);
  });
});

module.exports = router;
