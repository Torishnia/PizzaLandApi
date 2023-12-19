require('dotenv').config();
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { Pizza } from './src/entity/pizza/Pizza';
import { Category } from './src/entity/category/Category';
import { Type } from './src/entity/type/Type';
import { Size } from './src/entity/size/Size';
import { Images } from './src/entity/images/Images';

export const myDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    Pizza,
    Category,
    Type,
    Size,
    Images,
  ],
  logging: true,
  synchronize: true, // Turn on just only dev environment
});
