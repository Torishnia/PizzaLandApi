import { E_SIZE, E_SIZE_KOE, E_SIZE_VALUE } from '../../enum/size.enum';
import { Pizza } from '../pizza/Pizza';

export interface ISize {
  id: number,
  title: E_SIZE,
  size: E_SIZE_VALUE,
  coefficient: E_SIZE_KOE,

  pizzas?: Pizza[];
}
