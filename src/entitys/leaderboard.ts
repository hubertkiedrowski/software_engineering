import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class leaderboard extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  hightscoreRanking: number | undefined;

  @Column()
  username: string | undefined;

  @Column()
  hightscoreTime: number | undefined;

  @Column()
  hightscorevalue: number | undefined;
}
