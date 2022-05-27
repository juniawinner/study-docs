import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";
import { Lesson } from "./Lesson";

@Entity()
export class Module {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  total_lessons!: number;

  @Column((type) => Lesson)
  lessons!: Lesson[];
}
