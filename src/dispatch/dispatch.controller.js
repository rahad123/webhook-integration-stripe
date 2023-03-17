const dispatcher = require('../helpers/dispatcher');
const logger = require('../utils/logger');
const {
  eventErrors: { EVENT_NOT_REGISTERED },
} = require('./dispatch.enum');
const { dispatchWebhookEventValidator } = require('./dispatch.validator');
const validationMessage = require('../helpers/validationMessageFormatter');
const genUID = require('../utils/uid');
const {
  app: { environment },
} = require('../config/config');
const { getSiteFromCacheOrDB } = require('../utils/cache');

module.exports = {
  dispatchWebhookEvent: async (event, payload) => {

    try {
      if (!(await isEventIsSavedInSite(event))) throw Error(EVENT_NOT_REGISTERED);

      

      const { siteId } = payload;
     

      const _dispatchFireWithPayload = async ({ url: webhookUrl, secret: webhookSecret }) => {
        const webhookPayload = {
          ...payload,
          siteId,
          webhookUrl,
          webhookSecret,
          eventName: event,
          eventId: `${siteId}-${await genUID()}`,
        };
        dispatcher.fire(event, webhookPayload);
      };

      const webhooksPromises = webhooks.map((webhook) => _dispatchFireWithPayload(webhook));
      return Promise.all(webhooksPromises);
    } catch (error) {
      logger.error(error);
      return false;
    }
  },
};