"use strict";
const express = require("express");

const { stripeValue } = require("../config/config");

const stripe = require("stripe")(stripeValue.secretKey);
const OAuth = require("client-oauth2");

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

// Configure the OAuth 2.0 Client
const oauth = new OAuth({
  clientId: stripeValue.clientId,
  clientSecret: stripeValue.secretKey,

  scopes: ["read_write"],

  redirectUri: stripeValue.redirectUri,
  authorizationUri: "https://connect.stripe.com/oauth/authorize",
  accessTokenUri: "https://connect.stripe.com/oauth/token",
});
module.exports = {
  // Get the home page:
  stripeHomePage: async (req, res) => {
    res.render("index", {
      redirectUri: oauth.code.getUri(),
    });
  },

  // Handle the redirect - this should match your stripeValue redirect's path:
  connectedToStripe: async (req, res) => {
    if (req.query.error)
      return response.render("connected", {
        error: req.query.error,
      });

    // Use the Authorization Code to get a Token
    oauth.code.getToken(req.url).then(handleToken);

    // Go fetch the Account from the Token
    function handleToken(token) {
      stripe.account.retrieve(token.data.stripe_user_id, onAccount);
    }

    // Render the Account information
    function onAccount(error, account) {
      res.render("connected", {
        error: error,
        account: account,
      });
    }
  },
};
