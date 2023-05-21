const mongoose = require("mongoose");
//var uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "please add a text value"],
    },
    lname: {
      type: String,
      required: [true, "please add a text value"],
    },
    username: {
      type: String,
      unique: true,
      required: [true, "please add a text value"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
    },
    phone: {
      type: Number,
      unique: true,
      required: [true, "can't be blank"],
    },
    societyname: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
    },
    isSocietyCreated: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  {
    timestamp: true,
  }
);

const users = mongoose.model("users", userSchema);
module.exports = users;
