import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ICategory } from './ICategory.interface';
import { Pizza } from '../pizza/Pizza';
import { E_PIZZA_CATEGORY } from '../../enum/pizzaCategory.enum';
import { IPizza } from '../pizza/IPizza.interface';

@Entity({ schema: 'public', name: 'Category' })
export class Category extends BaseEntity implements ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: E_PIZZA_CATEGORY })
  title: E_PIZZA_CATEGORY;

  @OneToMany(() => Pizza, pizza => pizza.category)
  pizzas: IPizza[];
}
