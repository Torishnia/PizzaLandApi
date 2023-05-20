import { Category } from '../category/Category';
import { Images } from '../images/Images';
import { Size } from '../size/Size';
import { Type } from '../type/Type';

export interface IPizza {
  id: number,
  title: string,
  description: string,
  price: number,
  logo: string,
  rating: number,
  categoryId: number,

  category?: Category;
  images?: Images[];
  types?: Type[];
  sizes?: Size[];
}
