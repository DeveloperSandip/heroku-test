const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userSchema");
const config = require("../config");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//get all the users
router.get("/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) throw err;
    res.status(200).send(users);
  });
});

//register a user
router.post("/register", (req, res) => {
  const userDetails = req.body;
  const hashPassword = bcrypt.hashSync(userDetails.password, 8);
  User.create(
    {
      name: userDetails.name,
      email: userDetails.email,
      password: hashPassword,
      role: userDetails.role ? userDetails.role : "user",
    },
    (err, user) => {
      if (err) throw err;
      res.status(200).send("Registration Successfull");
    }
  );
});

//login a user
router.post("/login", (req, res) => {
  const userDetails = req.body;
  User.findOne({ email: userDetails.email }, (err, user) => {
    if (err) return res.status(500).send("Error while Login");
    if (!user) return res.status(400).send("No user Found");
    else {
      const isPasswordValid = bcrypt.compareSync(
        userDetails.password,
        user.password
      );
      if (!isPasswordValid) return res.status(300).send("Invalid Password");
      const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 3600,
      });
      res.send({ status: 200, token });
    }
  });
});

//get a user detail
router.post("/getuserinfo", (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) res.send("No token provided");
  jwt.verify(token, config.secret, (err, data) => {
    if (err) res.status(500).send("Invalid Token");
    User.findById(data.id, { password: 0 }, (err, result) => {
      res.send(result);
    });
  });
});

module.exports = router;
