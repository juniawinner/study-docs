import { Router } from "express";
import { ContributorSignInController } from "./controllers/ContributorSignInController";
import { ContributorSignUpController } from "./controllers/ContributorSignUpController";
import { ModuleController } from "./controllers/ModuleController";
import { ModuleLessonController } from "./controllers/ModuleLessonController";

export const routes = Router();

routes.get("/", new ModuleController().handle);

routes.get("/modulos/:id", new ModuleLessonController().handle);

routes.post(
  "/cadastro/contribuidores",
  new ContributorSignUpController().handle
);

routes.post("/login/contribuidores", new ContributorSignInController().handle);
