import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { IPizza } from './IPizza.interface';
import { Category } from '../category/Category';
import { Type } from '../type/Type';
import { Size } from '../size/Size';
import { Images } from '../images/Images';

@Entity({ schema: 'public', name: 'Pizza' })
export class Pizza extends BaseEntity implements IPizza {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  title: string;

  @Column({ length: 255 })
  description: string;

  @Column()
  price: number;

  @Column({ length: 500 })
  logo: string;

  @Column()
  rating: number;

  @Column()
  categoryId: number;

  @OneToMany(() => Images, image => image.pizza)
  images: Images[];

  @ManyToOne(() => Category, category => category.pizzas)
  category: Category;

  @ManyToMany(() => Type, type => type.pizzas)
  @JoinTable({
    name: "pizza_type",
    joinColumn: {
      name: "pizzaId",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "typeId",
      referencedColumnName: "id"
    },
  })
  types: Type[];

  @ManyToMany(() => Size, size => size.pizzas)
  @JoinTable({
    name: "pizza_size",
    joinColumn: {
      name: "pizzaId",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "sizeId",
      referencedColumnName: "id"
    },
  })
  sizes: Size[];
}
