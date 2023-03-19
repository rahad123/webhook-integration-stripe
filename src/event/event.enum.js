const events = Object.freeze({
  CONNECT_STRIPE: {
    key: "add-member",
  },
});

const eventErrors = {
  EVENT_NOT_REGISTERED: "Event not registered in site",
};

module.exports = {
  events,
  eventErrors,
};
