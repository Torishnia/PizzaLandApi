import { E_PIZZA_SIZE, E_PIZZA_SIZE_VALUE, E_PIZZA_SIZE_KOE } from '../../enum/pizzaSize.enum';
import { Pizza } from '../pizza/Pizza';

export interface ISize {
  id: number,
  title: E_PIZZA_SIZE,
  size: E_PIZZA_SIZE_VALUE,
  coefficient: E_PIZZA_SIZE_KOE,

  pizzas?: Pizza[];
}
