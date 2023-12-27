import { E_PIZZA_CATEGORY } from '../../enum/pizzaCategory.enum';
import { IPizza } from '../pizza/IPizza.interface';

export interface ICategory {
  id: number;
  title: E_PIZZA_CATEGORY;
  pizzas?: IPizza[];
}
