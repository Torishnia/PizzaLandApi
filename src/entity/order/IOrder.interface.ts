import { IPosition } from '../position/IPosition.interface';
import { IUser } from '../user/IUser.interface';
import { E_ORDER_STATUS } from '../../enum/orderStatus.enum';

export interface IOrder {
  id: number;
  payCash: boolean;
  totalPrice: number;
  status: E_ORDER_STATUS;
  userId: number;
  positions: IPosition[];
  user: IUser;
}
