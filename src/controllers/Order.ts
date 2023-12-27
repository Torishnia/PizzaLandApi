import { Request, Response, NextFunction } from 'express';

export async function getAllOrders(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    res.status(200).json([]);
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
