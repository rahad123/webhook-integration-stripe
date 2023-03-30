const { createLogger, transports } = require("winston");
const { format } = require("logform");

const localLogger = createLogger({
  level: "info",
  exitOnError: false,
  format: format.combine(
    format.errors({ stack: true }),
    format.json(),
    format.simple()
  ),
  transports: new transports.Console({}),
});

module.exports = localLogger;
