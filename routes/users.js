var express = require("express");
var User = require("../models/User");
var userControllers = require("../controllers/userControllers");
var jwt = require("jsonwebtoken");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// Signup
router.post("/signup", userControllers.Usersignup);

// Signinin
router.post("/signin", userControllers.Usersignin);

module.exports = router;
