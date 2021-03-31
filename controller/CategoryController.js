const express = require("express");
const router = express.Router();
const Category = require("../model/categorySchema");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//Get all the categories
router.get("/category", async (req, res) => {
  const categories = await Category.find({});
  try {
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Add a Category

router.post("/category/add", (req, res) => {
  const categoryDetails = req.body;
  Category.create(
    { name: categoryDetails.name, imgUrl: categoryDetails.imgUrl },
    (err, cat) => {
      if (err) throw err;
      res
        .status(200)
        .send({ status: 200, message: "Category successfully created" });
    }
  );
});

module.exports = router;
