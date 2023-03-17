const express = require("express");
const bodyparser = require("body-parser");

const {
  stripeHomePage,
  connectedToStripe,
} = require("./src/stripe/stripe.controller");

const app = express();

const port = 3000;

app.use(bodyparser.json());

app.get("/", stripeHomePage);
app.get("/connected", connectedToStripe);

app.listen(port, function (error) {
  if (error) throw error;
  console.log("Server created Successfully");
});
