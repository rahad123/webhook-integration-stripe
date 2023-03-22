const mongooses = require("mongoose");
const { Schema } = mongooses;
const mongoose = require("../db/db");
const { role } = require("../user/user.enum");
const { SUBSCRIBER } = role;

const memberSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    siteId: {
      type: Schema.Types.ObjectId,
      ref: "Site",
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    role: SUBSCRIBER,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const Member = mongooses.model("User", memberSchema);
module.exports = Member;
