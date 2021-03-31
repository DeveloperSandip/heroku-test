const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userSchema");
const config = require("../config");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//get all the users
router.get("/users", async (req, res) => {
  const users = await User.find({});
  try {
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

//register a user
router.post("/register", async (req, res) => {
  const userDetails = req.body;
  const hashPassword = bcrypt.hashSync(userDetails.password, 8);
  const user = {
    name: userDetails.name,
    email: userDetails.email,
    password: hashPassword,
    role: userDetails.role ? userDetails.role : "user",
    isVerified: userDetails.isVerified ? userDetails.isVerified : false,
  };
  try {
    await User.create(user);
    res
      .status(200)
      .send({ status: 200, message: "Registration is Successfull" });
  } catch (err) {
    res.status(400).send({
      status: 400,
      message: "Registration failed..! Please try again after sometimes",
    });
  }
});

//login a user
router.post("/login", async (req, res) => {
  const userDetails = req.body;
  try {
    const user = await User.findOne({ email: userDetails.email });
    if (!user) {
      return res.status(300).send({
        status: 300,
        message: "Seems you are not registered with us..!",
      });
    } else {
      const isPasswordValid = bcrypt.compareSync(
        userDetails.password,
        user.password
      );
      if (!isPasswordValid)
        return res.status(200).send({
          status: 400,
          message: "Invalid Credentials. Please check once again..!",
        });
      const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 3600,
      });
      res.send({ status: 200, token });
    }
  } catch (err) {
    return res.status(500).send("Error while Login");
  }
});

//get a user detail
router.get("/getuserinfo", (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token)
    res.status(400).send({ status: 400, message: "No token provided" });
  jwt.verify(token, config.secret, async (err, data) => {
    if (err) res.status(500).send({ status: 500, message: "Invalid Token" });
    const user = await User.findById(data.id, { password: 0 });
    try {
      res.send(user);
    } catch (err) {
      res.send({ status: 400, message: err });
    }
  });
});

module.exports = router;
