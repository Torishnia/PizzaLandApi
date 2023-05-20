import { E_TYPE } from '../../enum/type.enum';
import { Pizza } from '../pizza/Pizza';

export interface IType {
  id: number,
  title: E_TYPE,

  pizzas?: Pizza[];
}
