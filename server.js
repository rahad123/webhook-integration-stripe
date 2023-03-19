const express = require("express");
const bodyparser = require("body-parser");

const {
  stripeHomePage,
  connectedToStripe,
} = require("./src/stripe/stripe.controller");

const { createUser } = require("./src/user/user.controller");

const app = express();
app.use(express.json());
const port = 3000;

// Stripe
app.get("/", stripeHomePage);
app.get("/connected", connectedToStripe);

// User
app.post("/user", createUser);
// app.get("/users", getUsers);

app.listen(port, function (error) {
  if (error) throw error;
  console.log("Server created Successfully");
});
