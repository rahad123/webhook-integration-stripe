const mongoose = require("mongoose");
const { db, app } = require("../config/config");

// import mongoose from 'mongoose';

// const mongoURI = 'mongodb+srv://rahad:rahad@cluster0.5y0hy.mongodb.net/Testing-purpose?retryWrites=true&w=majority';
// const mongoURI = 'mongodb://localhost:27017/Testing-purpose';
const dbURL = `${db.uri}-${app?.environment}`;
if (!dbURL) console.error("Mongo URL not set in env file or config.js");

mongoose.connect(dbURL, (error) => {
  if (error) {
    console.error(`failed to connect using mongoose. ${error}`);
  } else {
    console.info(`Connected to DB server. ${dbURL}`);
  }
});

module.exports = mongoose;
