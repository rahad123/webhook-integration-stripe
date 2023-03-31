const express = require("express");
const rootRouter = express.Router();

const userRoutes = require("./user");
const stripeRoutes = require("./stripe");
const siteRoutes = require("./site");
const postRoutes = require("./post");

module.exports = rootRouter.use(
  userRoutes,
  stripeRoutes,
  siteRoutes,
  postRoutes
);
