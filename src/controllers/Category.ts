import { Request, Response, NextFunction } from 'express';

import { myDataSource } from '../utils/db';
import { Category } from '../entity/category/Category';

export async function getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
  console.log('REWRWERWERWRWRWER');
  next();
}

export async function getAllCategories(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    console.log('QWEQWEWQEQWE');
    
    const result = await myDataSource
      .getRepository(Category)
      .createQueryBuilder('category')
      .getMany() ?? [];

    res.status(200).json(result);
    next();    
  } catch (e: any) {
    console.log('Error <<< ', e);
    res.status(403).json([]);
  }
}
