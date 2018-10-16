import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cluster from 'cluster';
import os from 'os';

import routes from './routes';

let FORKNUM = 1;
FORKNUM = os.cpus().length > FORKNUM ? FORKNUM : os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`); // eslint-disable-line no-console

  for (let i = 0; i < FORKNUM; i++) {
    cluster.fork();
  }

  cluster.on('exit', worker => {
    console.log(`worker ${worker.process.pid} died, restarting...`); // eslint-disable-line no-console
    cluster.fork();
  });
} else {
  const app = express();

  app.use(cors());
  app.set('port', 3002);

  // Use application-level middleware for common functionality, including
  // logging, parsing, and session handling.
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
  app.use(bodyParser.json({ limit: '5mb' }));

  app.use(express.static('api/public'));
  // routes
  app.use('/api', routes);

  app.listen(app.get('port'), () => {
    console.log(`Worker ${process.pid} started, Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
  });
}

