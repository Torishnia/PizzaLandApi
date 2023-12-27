import { ICategory } from '../category/ICategory.interface';
import { IImages } from '../images/IImages.interface';
import { ISize } from '../size/ISize.interface';
import { IType } from '../type/IType.interface';

export interface IPizza {
  id: number;
  title: string;
  description: string;
  price: number;
  logo: string;
  rating: number;
  categoryId: number;
  category?: ICategory;
  images?: IImages[];
  types?: IType[];
  sizes?: ISize[];
}
