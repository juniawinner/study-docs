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
  name!: string;

  @Column()
  conceitual_map!: string;

  @Column()
  image!: string;

  @Column()
  contributor_nickname!: string;

  @CreateDateColumn()
  registration_date!: Date;
}
