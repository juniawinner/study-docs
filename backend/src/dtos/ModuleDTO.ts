import { ObjectID } from "typeorm";

export interface ModuleDTO {
  id?: ObjectID;
  Modulo?: string;
  description?: string;
  Total?: number;
  Aula?: string;
  Mapa?: string;
}
