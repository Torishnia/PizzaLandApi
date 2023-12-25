import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { ISize } from './ISize.interface';
import { Pizza } from '../pizza/Pizza';
import { E_PIZZA_SIZE, E_PIZZA_SIZE_VALUE, E_PIZZA_SIZE_KOE } from '../../enum/pizzaSize.enum';

@Entity({ schema: 'public', name: 'Size' })
export class Size extends BaseEntity implements ISize {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: E_PIZZA_SIZE })
  title: E_PIZZA_SIZE;

  @Column({ type: 'enum', enum: E_PIZZA_SIZE_VALUE })
  size: E_PIZZA_SIZE_VALUE;

  @Column({ type: 'enum', enum: E_PIZZA_SIZE_KOE })
  coefficient: E_PIZZA_SIZE_KOE;

  @ManyToMany(() => Pizza, pizza => pizza.sizes)
  pizzas: Pizza[];
}
