const mongooses = require("mongoose");
const { Schema } = mongooses;
const mongoose = require("../db/db");
const objectId = Schema.ObjectId;

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
    refreshToken: {
      type: String,
      trim: true,
    },
    resetPasswordToken: {
      type: String,
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;