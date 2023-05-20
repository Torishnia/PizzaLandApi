import { Pizza } from '../pizza/Pizza';

export interface IImages {
  id: number,
  alt: string,
  img: string,
  pizzaId: number,

  pizza?: Pizza;
}
