import "reflect-metadata";
import { DataSource } from "typeorm";
import { Contributor } from "../entities/Contributor";
import { Lesson } from "../entities/Lesson";
import { Module } from "../entities/Module";
import { ModuleMigration1653378185094 } from "./migrations/1653378185094-ModuleMigration";
import { ContributorMigration1653397423039 } from "./migrations/1653397423039-ContributorMigration";

export const AppDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "studyDocs",
  synchronize: false,
  logging: false,
  entities: [Contributor, Module, Lesson],
  migrations: [ContributorMigration1653397423039, ModuleMigration1653378185094],
  subscribers: [],
});
