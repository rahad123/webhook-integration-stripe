const express = require("express");
const rootRouter = express.Router();

const userRoutes = require("./user");
// const postRoutes = require("./post");

module.exports = rootRouter.use(userRoutes);
