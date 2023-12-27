import { IPizza } from '../pizza/IPizza.interface';

export interface IImages {
  id: number;
  alt: string;
  img: string;
  pizzaId: number;
  pizza?: IPizza;
}
