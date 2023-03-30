const mongooses = require("mongoose");
const { Schema } = mongooses;
const mongoose = require("../db/db");
const {
  statuses,
  status: { PUBLISHED },
} = require("./site.enum");

const siteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    domain: {
      type: String,
      index: true,
      required: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
      enum: statuses,
      default: PUBLISHED,
    },
    user: { type: Schema.Types.ObjectId, ref: "User", index: true },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Site", siteSchema);
