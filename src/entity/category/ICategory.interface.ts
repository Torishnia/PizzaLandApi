import { E_PIZZA_CATEGORY } from '../../enum/pizzaCategory.enum';
import { Pizza } from '../pizza/Pizza';

export interface ICategory {
  id: number,
  title: E_PIZZA_CATEGORY,

  pizzas?: Pizza[];
}
