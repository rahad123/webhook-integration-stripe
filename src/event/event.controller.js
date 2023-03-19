const https = require("https");
const EventEmitter = require("events");
const webhookEmitter = new EventEmitter();

// Set up a listener for a custom event
webhookEmitter.on("customEvent", (payload) => {
  // Make a POST request to the webhook URL with the payload
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req = https.request(webhookURL, options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(JSON.stringify(payload));
  req.end();
});

// Emit the custom event with a payload
module.exports = {
  eventFire: async((payload) => {
    webhookEmitter.emit("customEvent", payload);
  }),
};
