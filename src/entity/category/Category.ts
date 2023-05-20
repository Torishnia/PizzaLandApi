import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { ICategory } from './ICategory.interface';
import { Pizza } from '../pizza/Pizza';
import { E_CATEGORY } from '../../enum/category.enum';

@Entity({ schema: 'public', name: 'Category' })
export class Category extends BaseEntity implements ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: E_CATEGORY })
  title: E_CATEGORY;

  @OneToMany(() => Pizza, pizza => pizza.category)
  pizzas: Pizza[];
}
