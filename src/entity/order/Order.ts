import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { IOrder } from './IOrder.interface';
import { User } from '../user/User';
import { IUser } from '../user/IUser.interface';
import { IPosition } from '../position/IPosition.interface';
import { Position } from '../position/Position';

@Entity({ schema: 'public', name: 'Order' })
export class Order extends BaseEntity implements IOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  payCash: boolean;

  @Column()
  totalPrice: number;

  @Column()
  userId: number;

  @OneToMany(() => Position, position => position.order)
  positions: IPosition[];

  @ManyToOne(() => User, user => user.orders)
  user: IUser;
}
