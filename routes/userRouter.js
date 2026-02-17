const router = require("express").Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {registerUser,loginUser} = require("../controllers/authController");
const {logOutUser} = require("../controllers/authController");

// Owner Dashboard Route
router.get("/", (req, res) => {
  res.send("user is here");
});

router.post("/register",registerUser) 

router.post('/login',loginUser)

router.get('/logout',logOutUser)


module.exports = router;
