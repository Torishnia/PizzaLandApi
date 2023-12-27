import { IOrder } from '../order/IOrder.interface';

export interface IUser {
  id: number;
  name: string;
  phone: string;
  address: string;
  orders?: IOrder[];
}
