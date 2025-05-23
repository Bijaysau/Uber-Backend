// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const userSchema = new mongoose.Schema({
//   fullname: {
//     firstname: {
//       type: String,
//       required: true,
//       minlength: [3, "Fristname must be at least 3 characters long"],
//     },
//     lastname: {
//       type: String,
//       minlength: [3, "Last must be at least 3 characters long"],
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       minlength: [8, "Email must be at least 8 characters long"],
//     },
//     password: {
//       type: String,
//       required: true,
//       select: false,
//     },
//     socketId: {
//       type: String,
//     },
//   },
// });

// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
//   return token;
// };
// userSchema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };
// userSchema.statics.hashPassword = async function (password) {
//   return await bcrypt.hash(password, 10);
// };

// const userModel = mongoose.model("User", userSchema);
// module.exports = userModel;

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "firstname must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, "Last must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [8, "Email must be at least 8 characters long"],
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    minlength: [10, "Mobile number must be at least 10 digits"],
    maxlength: [10, "Mobile number must be at most 15 digits"],
  },
  password: { type: String, required: true, select: false },
  socketId: { type: String },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
