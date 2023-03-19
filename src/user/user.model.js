const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

const userSchema = new Schema({
  siteId: {
    type: ObjectId,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    trim: true,
    // enum: Object.values(role),
  },
  avatar: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
});
module.exports = mongoose.model("User", userSchema);
