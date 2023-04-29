import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ schema: 'public', name: 'Pizza' })
export class Pizza extends BaseEntity {
  @PrimaryColumn()
  id: number

  @Column()
  title: string
}