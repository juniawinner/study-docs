import { Request, RequestHandler, Response } from "express";
import { ModuleDTO } from "../dtos/ModuleDTO";
import { ModuleRepository } from "../repositories/ModuleRepository";

export class ModuleLessonController {
  handle: RequestHandler = async (req: Request, res: Response) => {
    let promises: any[] = [];

    const repository = ModuleRepository();

    const keyParams = await repository.findOneBy(req.params.id);

    keyParams?.lessons
      .sort(function (a, b) {
        return a.name.localeCompare(b.name);
      })
      .forEach(async (lesson) => {
        let dto: ModuleDTO = {
          Aula: lesson.name,
          Mapa: lesson.conceitual_map,
        };

        promises.push(dto);
      });

    await Promise.all(promises)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.error("Ops! Erro durante o processo:", err);
      });

    return res.json(promises);
  };
}
