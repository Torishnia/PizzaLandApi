import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { IImages } from './IImages.interface';
import { Pizza } from '../pizza/Pizza';
import { IPizza } from '../pizza/IPizza.interface';

@Entity({ schema: 'public', name: 'Images' })
export class Images extends BaseEntity implements IImages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  alt: string;

  @Column({ length: 500 })
  img: string;

  @Column()
  pizzaId: number;

  @ManyToOne(() => Pizza, pizza => pizza.images)
  pizza: IPizza;
}
