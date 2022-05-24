import { RequestHandler, Request, Response } from "express";
import { ContributorSignInService } from "../services/ContributorSignInService";

export class ContributorSignInController {
  handle: RequestHandler = async (req: Request, res: Response) => {
    let { e_mail, pass_word } = req.body;

    let excludePossibleBlanks = `${e_mail}`;
    let email = excludePossibleBlanks.trim();

    const service = new ContributorSignInService();
    const result = await service.execute({ email, pass_word });

    return res.status(200).json(result);
  };
}
