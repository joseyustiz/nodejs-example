import helmet from "helmet"; //Security http headers
import cors from "cors";
import express from "express";
import basicAuth from "express-basic-auth";

//dependency injection
//applying midleware to any server, by registring the middleware funtions to be executed 
export default server => {
    // apply CORS
    server.use(cors());
    // apply HTTP security headers
    server.use(helmet());
    // apply basic authentication - checks req Authentication header
    server.use(
        basicAuth(
            //configuration property (key/value pair) that represent user/passwords
            {
                users: {
                    admin: "supersecret"
                },
                challenge: true //pront the dialog form for authentication
            })
    );
    // handle request JSON body - no need to use body-parser lib anymore
    server.use(express.json());
};
