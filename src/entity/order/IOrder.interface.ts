import { IPosition } from '../position/IPosition.interface';
import { IUser } from '../user/IUser.interface';

export interface IOrder {
  id: number;
  payCash: boolean;
  totalPrice: number;
  userId: number;
  positions: IPosition[];
  user: IUser;
}
