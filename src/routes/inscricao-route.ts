import { Request, ResponseToolkit, ResponseObject, ServerRoute } from "@hapi/hapi";
import { AppDataSource } from "../data-source";
import UsuarioController from "../controllers/user-controller";
import InscricaoController from "../controllers/inscricao.controller";
const controller = new InscricaoController();

export const InscricaoRoute: ServerRoute[] = [
  {
    method: "POST",
    path: "/inscricao/login",
    handler: controller.login
  }
]
