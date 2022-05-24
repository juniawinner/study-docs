import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Contributor {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  github!: string;

  @Column()
  nickname!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
