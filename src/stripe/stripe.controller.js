const {
  stripeValue: { secretKey },
} = require("../config/config");
const stripe = require("stripe")(secretKey);
const {
  events: { CONNECT_STRIPE },
} = require("../event/event.enum");

const { eventFire } = require("../event/event.controller");

module.exports = {
  connectedToStripe: async (req, res) => {
    const state = req.query.state;
    const code = req.query.code;

    // Exchange authorization code for access token
    stripe.oauth.token(
      {
        grant_type: "authorization_code",
        code: code,
      },
      (err, token) => {
        // Now you can save the access_token, refresh_token, and stripe_user_id to your database
        res.send("Connected!");
      }
    );
    stripe.charges.create(
      {
        amount: 2000,
        currency: "usd",
        source: "tok_visa",
        description: "Example charge",
      },
      function (err, charge) {
        if (err) {
          console.error(err);
        } else {
          const stripePayload = {
            stripeId: charge.id,
            stripeAmount: charge.amount,
            stripeId: charge.id,
            balance_transaction: charge.balance_transaction,
            stripeDescription: charge.description,
            payment_method: charge.payment_method,
            status: charge.status,
            eventName: CONNECT_STRIPE.key,
          };
          eventFire(stripePayload);
          // console.log(charge);
        }
      }
    );
  },
};
