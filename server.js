const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require('body-parser');
const express = require("express");
const apiRouter = require("./src/routes/api");

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.use("/api", apiRouter);

app.listen(port, function (error) {
  if (error) throw error;
  console.log("Server created Successfully");
});

module.exports = app;
