import { MongoEntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { Lesson } from "../entities/Lesson";
import { Module } from "../entities/Module";

type CreateModule = {
  name: string;
  description: string;
  name_lesson: string;
  map: string;
  nickname: string;
};

export class CreateModuleService {
  async execute({
    name,
    description,
    name_lesson,
    map,
    nickname,
  }: CreateModule) {
    let registration_date = new Date();

    const module = new Module();
    module.name = name;
    module.description = description;
    module.lessons = [
      new Lesson(name_lesson, map, nickname, registration_date),
    ];
    module.total_lessons = module.lessons.length;

    const manager = new MongoEntityManager(AppDataSource);

    await manager.save(module);

    return "Modulo criado com sucesso 🚀";
  }
}
