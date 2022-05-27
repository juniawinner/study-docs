import { Lesson } from "../entities/Lesson";
import { ModuleRepository } from "../repositories/ModuleRepository";

type CreateModule = {
  name_module: string;
  name_lesson: string;
  map: string;
  nickname: string;
};

export class CreateLessonService {
  async execute({ name_module, name_lesson, map, nickname }: CreateModule) {
    const repository = ModuleRepository();

    const search = await repository.find({
      select: { name: true },
      where: { name: `${name_module}` },
    });

    if (search.find(async (data) => data.name)) {
      search.find(async (data) => {
        let registration_date = new Date();

        let new_lessons = new Lesson(
          name_lesson,
          map,
          nickname,
          registration_date
        );

        let total_lessons = data.lessons.push(new_lessons);

        const lessons = Object.assign(data.lessons);

        await repository.update(data.id, { total_lessons, lessons });
      });

      return `Aula criada com sucesso no módulo: ${name_module} 🚀`;
    } else {
      return `O módulo ${name_module} ainda não existe ☹️`;
    }
  }
}
