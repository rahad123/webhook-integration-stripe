const {
  authMiddleware,
  authPublicMiddleware,
} = require("../../middlewares/auth.middleware");
const { Router, json } = require("express");
const router = Router();

const { connectedToStripe } = require("../stripe/stripe.controller");

// Stripe
router.get("/connected", connectedToStripe);

module.exports = router;
