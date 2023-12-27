import { Request, Response, NextFunction } from 'express';

import { myDataSource } from '../utils/db';
import { Order } from '../entity/order/Order';
import { SortOrderType } from '../type';
import { ISortOrder } from '../enum/sortOrder.enum';

export async function getAllOrders(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { userId, status, sortBy, sortOrder } = req.query;

    const orderRepo = myDataSource
        .getRepository(Order)
        .createQueryBuilder('order')
        .leftJoinAndSelect('order.user', 'user')
        .leftJoinAndSelect('order.positions', 'position')
        .orderBy(`order.${sortBy ?? 'id'}`, `${sortOrder as SortOrderType ?? ISortOrder.ASC }`)

    if (userId) orderRepo.andWhere(`order.userId = '${userId}'`);
    if (status) orderRepo.andWhere(`order.status = '${status}'`);

    const result = await orderRepo.getMany() ?? [];
    res.status(200).json(result);
    next();
  } catch (e: any) {
    res.status(403).json([]);
  }
}

export async function createOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { body } = req;
    res.status(200).json([]);
    next();
  } catch (e: any) {
    res.status(403).json([]);
  }
}
