const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

var userSchema = new Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    username: {
      type: "String",
      required: true,
      unique: true,
    },
    email: {
      type: "String",
      required: true,
      match: /@/,
      unique: true,
    },
    password: {
      type: "String",
      required: true,
    },
    image: {
      type: "String",
    },
    bio: {
      type: "String",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 15);
  next();
});

userSchema.methods.verifyPassword = function (plainpassword) {
  return bcrypt.compareSync(plainpassword, this.password);
};

var User = mongoose.model("User", userSchema);
module.exports = User;
