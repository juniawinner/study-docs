import { Router } from "express";
import { ContributorSignInController } from "./controllers/ContributorSignInController";
import { ContributorSignUpController } from "./controllers/ContributorSignUpController";
import { CreateModuleController } from "./controllers/CreateModuleController";
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

//Rotas privadas
routes.post("/dashboard/modules", new CreateModuleController().handle);

routes.post("/dashboard/lessons");
