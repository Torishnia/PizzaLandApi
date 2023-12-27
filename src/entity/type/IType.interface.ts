import { E_PIZZA_TYPE } from '../../enum/pizzaType.enum';
import { IPizza } from '../pizza/IPizza.interface';

export interface IType {
  id: number;
  title: E_PIZZA_TYPE;
  pizzas?: IPizza[];
}
