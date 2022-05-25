import { AppDataSource } from "../database";
import { Module } from "../entities/Module";

export const ModuleRepository = () => {
  return AppDataSource.getMongoRepository(Module);
};
