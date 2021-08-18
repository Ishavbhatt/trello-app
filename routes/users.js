var express = require("express");
var User = require("../models/User");
var userControllers = require("../controllers/userControllers");
var jwt = require("jsonwebtoken");
var router = express.Router();

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

// Signup
router.post("/signup", userControllers.Usersignup);

// Signinin
router.post("/signin", userControllers.Usersignin);

// Get Sigleuser
router.get("/:id", userControllers.getsingleuser);

// Get All Users
router.get("/", userControllers.getallusers);

module.exports = router;
