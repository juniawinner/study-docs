import { AppDataSource } from "../database";
import { Contributor } from "../entities/Contributor";

export const ContributorRepository = () => {
  return AppDataSource.getMongoRepository(Contributor);
};
