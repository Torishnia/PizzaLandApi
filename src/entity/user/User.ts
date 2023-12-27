import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { IUser } from './IUser.interface';
import { Order } from '../order/Order';
import { IOrder } from '../order/IOrder.interface';

@Entity({ schema: 'public', name: 'User' })
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  name: string;

  @Column({ length: 12 })
  phone: string;

  @Column({ length: 128 })
  address: string;

  @OneToMany(() => Order, order => order.user)
  orders: IOrder[];
}
