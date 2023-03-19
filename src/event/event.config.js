const {
  events: { CONNECT_STRIPE },
} = require("./event.enum");

const {
  eventListener,
} = require("./dispatch.service");

module.exports = {
  mapEvents: {
    [CONNECT_STRIPE.key]: [eventListener],
  },
};
