require('dotenv').config();
import express, { Express } from 'express';
import cors from 'cors';

import router from './routers';
import { myDataSource } from './utils/db';

const application = myDataSource
  .initialize()
  .then(() => {
    console.log('DataBase started');
    start();
  })
  .catch((err) => console.log('Something wrong with db, error: ', err.message));

function start(): Express {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use('/', router);

  // >>>> for public <<<<
  console.log('Server starting...');

  // >>>> for local development <<<<
  // app.listen(8080, () => console.log(`Server started on port: 8080`));
  return app;
}

export default application;
