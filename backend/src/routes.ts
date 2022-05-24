import { Router } from "express";
import { ContributorSignInController } from "./controllers/ContributorSignInController";
import { ContributorSignUpController } from "./controllers/ContributorSignUpController";

export const routes = Router();

routes.post(
  "/cadastro/contribuidores",
  new ContributorSignUpController().handle
);

routes.post("/login/contribuidores", new ContributorSignInController().handle);
