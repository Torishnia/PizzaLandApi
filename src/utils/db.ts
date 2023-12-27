require('dotenv').config();
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { Pizza } from '../entity/pizza/Pizza';
import { Category } from '../entity/category/Category';
import { Type } from '../entity/type/Type';
import { Size } from '../entity/size/Size';
import { Images } from '../entity/images/Images';
import { User } from '../entity/user/User';
import { Order } from '../entity/order/Order';
import { Position } from '../entity/position/Position';

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
    User,
    Order,
    Position,
  ],
  logging: true,
  synchronize: true, // Turn on just only dev environment
});
