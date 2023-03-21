const {
  stripeValue: { secretKey },
} = require("../config/config");
const stripe = require("stripe")(secretKey);

module.exports = {
  connectedToStripe: async (req, res) => {
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
          console.log(charge);
        }
      }
    );
  },
};
