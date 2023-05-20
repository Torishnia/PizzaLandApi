import { E_CATEGORY } from '../../enum/category.enum';
import { Pizza } from '../pizza/Pizza';

export interface ICategory {
  id: number,
  title: E_CATEGORY,

  pizzas?: Pizza[];
}
