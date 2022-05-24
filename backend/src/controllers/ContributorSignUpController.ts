import { RequestHandler, Request, Response } from "express";
import { ContributorSignUpService } from "../services/ContributorSignUpService";

export class ContributorSignUpController {
  handle: RequestHandler = async (req: Request, res: Response) => {
    let { e_mail, git_hub, pass_word } = req.body;

    let excludePossibleBlanks1 = `${e_mail}`;
    let email = excludePossibleBlanks1.trim();

    let excludePossibleBlanks2 = `${git_hub}`;
    let github = excludePossibleBlanks2.trim();

    const service = new ContributorSignUpService();
    const result = await service.execute({ email, github, pass_word });

    return res.json(result);
  };
}
