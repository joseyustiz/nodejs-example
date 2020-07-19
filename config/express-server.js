const express = require("express");
const server = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = "0.0.0.0";

// override listen method
server.listen = server.listen.bind(server, PORT, HOSTNAME, () =>
  console.log(`Listening on ${PORT}`)
);

module.exports = server;
