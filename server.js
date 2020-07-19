
const { server } = require("./config");
const registerMiddlewares = require("./middlewares");
var msg = require("./middlewares");

async function main() {
 registerMiddlewares(server) ;

server.get("/",   
(req, res, next) =>{res.json({message: `Handling ${req.method} request`})});//request handler
server.post("/",(req, res, next) =>{res.json({message: `Handling ${req.method} request`})});
server.put("/",(req, res, next) =>{res.json({message: `Handling ${req.method} request`})});
server.delete("/",(req, res, next) =>{res.json({message: `Handling ${req.method} request`})});

server.listen();
}

main();
