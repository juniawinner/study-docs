import { ObjectID } from "typeorm";

export interface ContributorDTO {
  nickname: string;
  id?: ObjectID;
  email?: string;
}
