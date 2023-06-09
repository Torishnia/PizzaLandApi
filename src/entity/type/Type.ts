import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { IType } from './IType.interface';
import { Pizza } from '../pizza/Pizza';
import { E_TYPE } from '../../enum/type.enum';

@Entity({ schema: 'public', name: 'Type' })
export class Type extends BaseEntity implements IType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: E_TYPE })
  title: E_TYPE;

  @ManyToMany(() => Pizza, pizza => pizza.types)
  pizzas: Pizza[];
}
