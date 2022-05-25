import { Request, RequestHandler, Response } from "express";
import { ModuleService } from "../services/ModuleService";

export class ModuleController {
  handle: RequestHandler = async (req: Request, res: Response) => {
    const service = new ModuleService();

    const result = await service.execute();

    return res.json(result);
  };
}
