import { RequestHandler, Request, Response } from "express";
import { CreateLessonService } from "../services/CreateLessonService";

export class CreateLessonController {
  handle: RequestHandler = async (req: Request, res: Response) => {
    let { name_module, name_lesson, map, nickname } = req.body;

    const service = new CreateLessonService();
    const result = await service.execute({
      name_module,
      name_lesson,
      map,
      nickname,
    });

    return res.json(result);
  };
}
