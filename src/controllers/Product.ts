import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { pizzasFromMockData as data } from '../mockData';
import { IPizza } from '../interfaces/IPizza';
import { myDataSource } from '../utils/db';
import { Pizza } from '../entity/pizza/Pizza';
import { ISortOrder } from '../enum/sortOrder.enum';
import { IResponseStatus } from '../enum/responseStatus.enum';

let pizzasFromMockData: IPizza[] = data;

export function createPizza(req: Request, res: Response, next: NextFunction): void {
  const id = uuidv4();
  pizzasFromMockData.push({ id, ...req.body });
  
  const pizza = pizzasFromMockData.find((pizza) => pizza.id === id);
  
  if (!pizza) {
    res.status(404).json({ message: 'Pizza with such id doesn`t exist' });
    return next();
  }

  res.status(200).json(pizza);
  next();
}

export function getPizzaById(req: Request, res: Response, next: NextFunction): void {
  const { id } = req.params;
  const pizza = pizzasFromMockData.find((pizza) => pizza.id === id);
  
  if (!pizza) {
    res.status(404).json({ message: 'Pizza with such id doesn`t exist' });
    return next();
  }

  res.status(200).json(pizza);
  next();
}

export async function getAllPizzas(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { categoryId, search, sortBy, sortOrder } = req.query;
    const pizzaRepo = myDataSource
      .getRepository(Pizza)
      .createQueryBuilder('pizza');

    if (search) pizzaRepo.andWhere(`pizza.title LIKE '%${search}%'`);
    if (categoryId) pizzaRepo.andWhere(`pizza.categoryId = ${categoryId}`);
    // TODO Valeria. Need to fix SortOrder
    if (sortBy && sortOrder) pizzaRepo.orderBy(`"${sortBy}"`, "DESC");

    const data = await pizzaRepo.getMany();
    res.status(200).json({ status: IResponseStatus.SUCCESS, data });
    next();
  } catch (e: any) {
    res.status(404).json({ status: IResponseStatus.ERROR, data: [] });
  }
}

export function updatePizza(req: Request, res: Response, next: NextFunction): void {
  const { id } = req.params;
  const { title, description, price, image, types, sizes, category, rating, otherImgs } = req.body;

  pizzasFromMockData.forEach((pizza) => {
    if (pizza.id === id) {
      pizza.title = title ?? pizza.title;
      pizza.description = description ?? pizza.description;
      pizza.price = price ?? pizza.price;
      pizza.image = image ?? pizza.image;
      pizza.types = types ?? pizza.types;
      pizza.sizes = sizes ?? pizza.sizes;
      pizza.category = category ?? pizza.category;
      pizza.rating = rating ?? pizza.rating;
      pizza.otherImgs = otherImgs ?? pizza.otherImgs;
    }
  });

  const pizza = pizzasFromMockData.find((pizza) => pizza.id === id);
  if (!pizza) {
    res.status(404).json({ message: 'Pizza with such id doesn`t exist' });
    return next();
  }

  res.status(200).json(pizza);
  next();
}

export function deletePizza(req: Request, res: Response, next: NextFunction): void {
  const { id } = req.params;
  const pizzaToDelete = pizzasFromMockData.find((pizza) => pizza.id === id);
  if (!pizzaToDelete) {
    res.status(404).json({ message: 'Pizza with such id doesn`t exist' });
    return next();
  }

  pizzasFromMockData = pizzasFromMockData.filter((pizza) => pizza.id !== id);

  res.status(200).json({ message: 'Pizza with such id was deleted' });
  next();
}

interface IQueryParams {
  categoryId: string,
  search: string,
  sortBy: string,
  sortOrder: ISortOrder;
}
