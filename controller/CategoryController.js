const express = require("express");
const router = express.Router();
const Category = require("../model/categorySchema");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//Get all the categories
router.get("/", async (req, res) => {
  const categories = await Category.find({});
  try {
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Add a Category

router.post("/add", async (req, res) => {
  const categoryDetails = { name: req.body.name, imgUrl: req.body.imgUrl };
  try {
    await Category.create(categoryDetails);
    res.send({ status: 200, messgage: "Category Added" });
  } catch (err) {
    res.send({ status: 400, error: err });
  }
});

module.exports = router;
