import { badRequest } from "@hapi/boom";
import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import Usuario from "../entity/Usuario";
import UsuarioService from "../service/usuario.service";

const usuarioService = new UsuarioService();

export default class UsuarioController {
    constructor() {
    }

    public async getUser(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
        let response;
        try {
            var result = await usuarioService.getById(request.params.id);
            response = h.response(result);
            return response
        } catch (error) {
            console.log(error)
        }

        return response;
    }
    public async createUser(request: any, h: ResponseToolkit): Promise<ResponseObject> {
        try {
            var result = await usuarioService.insert(request.payload);
            var response = h.response({ "success": true });
        } catch (error) {
            console.log(error)
            throw badRequest(error);
        }

        return response;
    }
    public async CreateOrUpdateUsuario(request: any, h: ResponseToolkit): Promise<ResponseObject> {
        try {
            var result = await usuarioService.createOrUpdateUsuario(request.payload as CadastroRequest);
            var response = h.response({ "success": true });
        } catch (error) {
            console.log(error)
            throw badRequest(error);
        }

        return response;
    }
    public async UpdateUser(request: any, h: ResponseToolkit): Promise<ResponseObject> {
        let response;
        try {
            var result = await usuarioService.updateUserById(request.params.id,request.payload);
            response = h.response({success:result});
            return response
        } catch (error) {
            throw badRequest(error);
        }
    }
}