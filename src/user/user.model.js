const mongooses = require("mongoose");
const { Schema } = mongooses;
const mongoose = require("../db/db");
const { role } = require("./user.enum");
const { SUPER_USER } = role;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
      default: SUPER_USER,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
