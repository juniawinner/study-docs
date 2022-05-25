import { ObjectID } from "typeorm";

export interface ContributorDTO {
  Nickname: string;
  id: ObjectID;
  Email?: string;
}
