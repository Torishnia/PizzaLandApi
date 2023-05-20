import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { ISize } from './ISize.interface';
import { Pizza } from '../pizza/Pizza';
import { E_SIZE, E_SIZE_KOE, E_SIZE_VALUE } from '../../enum/size.enum';

@Entity({ schema: 'public', name: 'Size' })
export class Size extends BaseEntity implements ISize {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: E_SIZE })
  title: E_SIZE;

  @Column({ type: 'enum', enum: E_SIZE_VALUE })
  size: E_SIZE_VALUE;

  @Column({ type: 'enum', enum: E_SIZE_KOE })
  coefficient: E_SIZE_KOE;

  @ManyToMany(() => Pizza, pizza => pizza.sizes)
  pizzas: Pizza[];
}
