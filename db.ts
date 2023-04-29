require('dotenv').config();
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { Pizza } from './src/entity/Pizza';

export const myDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Pizza],
  logging: true,
  synchronize: true,
});
