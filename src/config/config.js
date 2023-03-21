module.exports = {
  app: {
    platform: "webhook-integration-stripe",
    name: process.env.APP_NAME ?? "webhook-integration-stripe",
    port: process.env.PORT ?? 3000,
    secret: process.env.JWT_SECRET,
    environment: process.env.NODE_ENV ?? "dev",
  },
  db: {
    uri:
      process.env.MONGO_URI ??
      "mongodb://mongo:27017/webhook-integration-stripe",
  },
  stripeValue: {
    clientId: process.env.STRIPE_CLIENT_ID, // Client ID: https://dashboard.stripe.com/account/applications/settings
    secretKey: process.env.STRIPE_SECRET_KEY, // Secret KEY: https://dashboard.stripe.com/account/apikeys
    redirectUri: process.env.STRIPE_REDIRECT_URI, // Redirect Uri https://dashboard.stripe.com/account/applications/settings
  },
  webhook: {
    webhookUrl: process.env.WEBHOOK_URL,
  },
};
