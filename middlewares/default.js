const helmet = require("helmet"); //Security http headers
const cors = require("cors");
const express = require("express");
const basicAuth = require("express-basic-auth");

//dependency injection
//applying middleware to any server, by registering the middleware functions to be executed 
module.exports = server => {
    // apply CORS
    server.use(cors());
    // apply HTTP security headers
    server.use(helmet());
    // apply basic authentication - checks req Authentication header
    server.use(
        basicAuth(
            //configuration obj property (key/value pair) that represent user/passwords
            {
                users: {
                    admin: "supersecret"
                },
                challenge: true //prompt the dialog form for authentication
            })
    );
    // handle request JSON body - no need to use body-parser lib anymore
    server.use(express.json());
};
