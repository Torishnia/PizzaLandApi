import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { IPosition } from './IPosition.interface';
import { IOrder } from '../order/IOrder.interface';
import { Order } from '../order/Order';

@Entity({ schema: 'public', name: 'Position' })
export class Position extends BaseEntity implements IPosition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pizzaId: number;

  @Column()
  typeId: number;

  @Column()
  sizeId: number;

  @Column()
  count: number;

  @Column()
  price: number;

  @Column()
  orderId: number;

  @ManyToOne(() => Order, order => order.positions)
  order: IOrder;
}
