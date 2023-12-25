import { E_PIZZA_TYPE } from '../../enum/pizzaType.enum';
import { Pizza } from '../pizza/Pizza';

export interface IType {
  id: number,
  title: E_PIZZA_TYPE,

  pizzas?: Pizza[];
}
