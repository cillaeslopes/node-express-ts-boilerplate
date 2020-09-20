import express from "express";
import bodyParser from "body-parser";

import defaultRouter from "./routes/default.router";

const server = express();

server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

server.use(defaultRouter);

server.listen(8080, () => {
  console.log("Server listening at 8080...");
});
