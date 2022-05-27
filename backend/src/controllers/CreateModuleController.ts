import { RequestHandler, Request, Response } from "express";
import { CreateModuleService } from "../services/CreateModuleService";

export class CreateModuleController {
  handle: RequestHandler = async (req: Request, res: Response) => {
    let { name, description, name_lesson, map, nickname } = req.body;

    const service = new CreateModuleService();
    const result = await service.execute({
      name,
      description,
      name_lesson,
      map,
      nickname,
    });

    return res.json(result);
  };
}
