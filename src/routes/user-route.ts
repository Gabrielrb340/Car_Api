import { Request, ResponseToolkit, ResponseObject, ServerRoute } from "@hapi/hapi";
import { AppDataSource } from "../data-source";
import UsuarioController from "../controllers/user-controller";
const controller = new UsuarioController();

export const UsuarioRoutes: ServerRoute[] = [
  {
    method: "POST",
    path: "/user",
    options: {
      auth: 'simple'
    },
    handler: controller.createUser
  },
  {
    method: "POST",
    path: "/user/createoredit",
    handler: controller.CreateOrUpdateUsuario
  },
  {
    method: "PUT",
    path: "/user/edit/{id}",
    options: {
      auth: 'simple'
    },
    handler: controller.UpdateUser
  },
  {
    method: "GET",
    path: "/user/{id}",
    options: {
      auth: 'simple'
    },
    handler: controller.getUser
  }
];
