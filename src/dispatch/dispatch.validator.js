const Joi = require('joi');

module.exports.dispatchWebhookEventValidator = Joi.object()
  .options({ abortEarly: false, stripUnknown: true })
  .keys({
    siteId: Joi.string().required(),
    event: Joi.string().required(),
  });