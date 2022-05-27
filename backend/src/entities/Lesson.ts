import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Lesson {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  name: string;

  @Column()
  conceitual_map: string;

  @Column()
  contributor_nickname: string;

  @CreateDateColumn()
  registration_date: Date;

  constructor(
    name: string,
    conceitual_map: string,
    contributor_nickname: string,
    registration_date: Date
  ) {
    (this.name = name),
      (this.conceitual_map = conceitual_map),
      (this.contributor_nickname = contributor_nickname),
      (this.registration_date = registration_date);
  }
}
