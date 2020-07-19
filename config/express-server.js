import express from "express";
const server = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = "0.0.0.0";

// override listen method
server.listen = server.listen.bind(server, PORT, HOSTNAME, () =>
    console.log(`Listening on ${PORT}`)
);

export {server}; //required to use export/import aggregation
