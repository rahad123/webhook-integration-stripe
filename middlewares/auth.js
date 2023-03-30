const {
    jwt: { secret },
  } = require("../src/config/config");
  const jwt = require("jsonwebtoken");
  
  module.exports = {
    verify: (token) => {
      return new Promise((resolve) => {
        jwt.verify(token, secret, (err, payload) => {
          if (err) {
            console.log(err.message || "JWT decoding error");
            return resolve(null);
          } else {
            return resolve(payload);
          }
        });
      });
    },
  };