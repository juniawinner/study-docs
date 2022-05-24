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

  @ObjectIdColumn()
  contributor_id!: ObjectID;

  @CreateDateColumn()
  registration_date!: Date;
}
