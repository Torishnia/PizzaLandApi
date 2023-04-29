require('dotenv').config();
import express from 'express';
import cors from 'cors';

import router from './src/router';
import { myDataSource } from './db';

myDataSource
  .initialize()
  .then(() => {
    console.log('DataBase started');
    start();
  })
  .catch((err) => console.log('Something wrong with db, error: ', err.message));

function start() {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use('/', router);
  app.listen(process.env.APP_PORT, () => console.log(`Server started on port: ${process.env.APP_PORT}`));
}
