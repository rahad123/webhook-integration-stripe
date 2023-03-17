const {
  events: { CONNECT_STRIPE },
} = require("./dispatch.enum");

const {
  eventListener,
  destroyCacheEventListener,
} = require("./dispatch.service");

module.exports = {
  mapEvents: {
    [CONNECT_STRIPE.key]: [eventListener],
  },
};
