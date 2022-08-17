import { ServerRoute } from "@hapi/hapi";
import AcidenteController from "../controllers/acidente.controller";
const controller = new AcidenteController();

export const AcidenteRoute: ServerRoute[] = [
  {
    method: "POST",
    path: "/acidente/create",
    handler: controller.criarAcidente
  }
]
