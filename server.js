const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const { connectedToStripe } = require("./src/stripe/stripe.controller");

const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("./src/user/user.controller");

const { addMember } = require("./src/members/members.controller");

const app = express();
app.use(express.json());
const port = 3000;

// Stripe
app.get("/connected", connectedToStripe);

// User
app.post("/user", createUser);
app.get("/user", getUsers);
app.get("/user/:id", getSingleUser);
app.put("/user/:id", updateUser);
app.delete("/user/:id", deleteUser);

// members
app.post("member", addMember);

app.listen(port, function (error) {
  if (error) throw error;
  console.log("Server created Successfully");
});
