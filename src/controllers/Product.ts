import express, { Request, Response } from 'express';

import { pizzasFromMockData } from '../mockData';

export function getAllPizzas(req: Request, res: Response): void {
  const pizzas = pizzasFromMockData;
  res.send('Express >> getAllPizzas');
}

export function getPizzaById(req: Request, res: Response): void {
  const pizzas = pizzasFromMockData;
  res.send('Express >> getPizzaById');
}