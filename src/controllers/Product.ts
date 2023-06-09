import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { pizzasFromMockData as data } from '../mockData';
import { IPizza } from '../interfaces/IPizza';

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

export function getAllPizzas(req: Request, res: Response, next: NextFunction): void {
  const pizzas: IPizza[] = pizzasFromMockData;
  res.status(200).json(pizzas);
  next();
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
