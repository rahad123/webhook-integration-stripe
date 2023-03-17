const {
    aws: { webhook },
  } = require('../config/config');
  const SQS = require('../utils/sqs');
  const { generateJwtToken } = require('../utils/jwt');
  const logger = require('../utils/logger');
  
  const callWebhookSQS = async (payload) => {
    const { siteId, webhookUrl, webhookSecret, eventName, eventId, ...restArgs } = payload;
    const jwtPayload = { name: 'webhook-payload' };
    const headerToken = await generateJwtToken({ secret: webhookSecret, jwtPayload });
  
    return SQS.sendMessage({
      QueueUrl: webhook.sqsUrl,
      MessageBody: JSON.stringify({
        siteId,
        webhookUrl,
        headerToken,
        eventName,
        eventId,
        payload: restArgs,
      }),
    }).promise();
  };
  
  const destroySiteCacheBySiteId = async (siteTagKey) => {
    return cacheManager.tags([siteTagKey]).flush();
  };
  
  module.exports = {
    callWebhookSQS,
  
    eventListener: async (payload) => {
      try {
        return callWebhookSQS(payload);
      } catch (error) {
        logger.error(error);
      }
    },
  
    destroyCacheEventListener: async (payload) => {
      try {
        if (!payload.siteId) return logger.error('ERROR: siteId is required to initialize');
        const tagkey = siteTagKey(payload?.siteId);
  
        return destroySiteCacheBySiteId(tagkey);
      } catch (error) {
        return logger.error(error);
      }
    },
  };