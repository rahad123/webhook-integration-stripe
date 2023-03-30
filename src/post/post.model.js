const mongooses = require("mongoose");
const { Schema } = mongooses;
const mongoose = require("../db/db");
const { status, visibilityType } = require("./post.enum");
const { DRAFT } = status;
const { PUBLIC } = visibilityType;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    excerpt: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
    },
    draftContent: {
      type: String,
      trim: true,
    },
    thumbnailImage: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
      enum: Object.values(status),
      default: DRAFT,
    },
    siteId: {
      type: Schema.Types.ObjectId,
      ref: "Site",
      required: true,
      trim: true,
    },
    visibilityType: {
      type: String,
      enum: Object.values(visibilityType),
      default: PUBLIC,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
postSchema.index({ siteId: 1, slug: 1 }, { unique: true });

module.exports = mongoose.model("Post", postSchema);
