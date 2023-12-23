import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
@Entity()
export class user extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  username: string | undefined;

  @Column()
  firstName: string | undefined;

  @Column()
  lastName!: string | undefined;

  @Column()
  mail!: string | undefined;

  @Column()
  progress!: number | undefined;

  @Column()
  secredPassword!: string;
}
