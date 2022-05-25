import { ObjectID } from "typeorm";

export interface ModuleDTO {
  image: string;
  id?: ObjectID;
  Modulo?: string;
  description?: string;
  Total?: number;
  Aula?: string;
  Mapa?: string;
}
