import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "studyDocs",
  synchronize: false,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
