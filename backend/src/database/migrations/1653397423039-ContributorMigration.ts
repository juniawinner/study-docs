import { MigrationInterface } from "typeorm";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";

export class ContributorMigration1653397423039 implements MigrationInterface {
  public async up(mongoQueryRunner: MongoQueryRunner): Promise<void> {
    const createIndex = await mongoQueryRunner.createCollectionIndex(
      "contributor",
      { email: 1, password: 1, github: 1, nickname: 1 },
      { unique: true }
    );
    console.log("Created indexes =>", createIndex);

    const insertResult = await mongoQueryRunner.insertOne("contributor", {
      email: "junia.winner@gmail.com",
      password: "teste123",
      github: "https://github.com/juniawinner",
      nickname: "juniawinner",
      createdAt: Date(),
    });
    console.log("Inserted documents =>", insertResult);
  }

  public async down(mongoQueryRunner: MongoQueryRunner): Promise<void> {}
}
