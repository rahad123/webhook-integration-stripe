const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require('body-parser');
const express = require("express");
const apiRouter = require("./src/routes/api");

// const { connectedToStripe } = require("./src/stripe/stripe.controller");

// const { addMember } = require("./src/members/members.controller");

const app = express();
app.use(bodyParser.json());
const port = 3000;

// Stripe
// app.get("/connected", connectedToStripe);

// // members
// app.post("member", addMember);

app.use("/api", apiRouter);

app.listen(port, function (error) {
  if (error) throw error;
  console.log("Server created Successfully");
});

module.exports = app;
