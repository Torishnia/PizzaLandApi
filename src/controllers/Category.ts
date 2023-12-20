import { Request, Response, NextFunction } from 'express';

import { myDataSource } from '../utils/db';
import { Category } from '../entity/category/Category';

export async function getAllCategories(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await myDataSource
      .getRepository(Category)
      .createQueryBuilder('category')
      .getMany() ?? [];

    res.status(200).json({ data });
    next();
  } catch (e: any) {
    res.status(404).json({ data: [] });
  }
}
