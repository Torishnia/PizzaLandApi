import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { IType } from './IType.interface';
import { Pizza } from '../pizza/Pizza';
import { E_PIZZA_TYPE } from '../../enum/pizzaType.enum';
import { IPizza } from '../pizza/IPizza.interface';

@Entity({ schema: 'public', name: 'Type' })
export class Type extends BaseEntity implements IType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: E_PIZZA_TYPE, default: E_PIZZA_TYPE.THIN })
  title: E_PIZZA_TYPE;

  @ManyToMany(() => Pizza, pizza => pizza.types)
  pizzas: IPizza[];
}
