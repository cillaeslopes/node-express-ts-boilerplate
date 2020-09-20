import express from 'express';
import bodyParser from 'body-parser';

import defaultRouter from './routes/default.router';
import swaggerRouter from './routes/swagger.router';

const server = express();

server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

server.use(defaultRouter);
server.use(swaggerRouter);

if (process.env.NODE_ENV !== 'test') {
  server.listen(8080, () => {
    console.log('Server listening at 8080...');
  });
}

export default server;
