const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/users");
const { token } = require("morgan");

module.exports = {
  // User SignUp
  Usersignup: (req, res) => {
    User.create(req.body, (err, user) => {
      if (err) return res.json({ err, success: false });
      res.json({ success: true, msg: "Regidtered Successfully", user });
    });
  },

  // User Signin
  Usersignin: (req, res) => {
    let { password, email } = req.body;
    User.findOne({ email }, (err, user) => {
      if (err) return res.json({ err });
      if (!user) return res.json("Enter Valid Email");
      if (!user.verifyPassword(password)) {
        res.json("Incorrect Password");
      }
      jwt.sign(
        { username: user.username, userId: user._id, email: user.email },
        "thisissecret",
        (err, token) => {
          if (err)
            return res.json({ Success: false, Message: "Token not generated" });
          res.json({ token, success: true, user });
        }
      );
    });
  },
  getsingleuser: (req, res) => {
    User.findById(req.user.userId, "-password", (err, singleuser) => {
      if (err) return res.json({ err });
      res.json({ singleuser, success: true });
    });
  },
  getallusers: (req, res) => {
    User.find({}, (err, users) => {
      if (err) return res.json({ success: false, err });
      res.json({ success: true, users });
    });
  },
};
