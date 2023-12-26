import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class leaderboard extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  highscoreRanking: number | undefined;

  @Column()
  username: string | undefined;

  @Column()
  highscoreTime: number | undefined;

  @Column()
  highscorevalue: number | undefined;
}
