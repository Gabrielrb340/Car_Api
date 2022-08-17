import { badRequest, unauthorized } from "@hapi/boom";
import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import InscricaoService from "../service/inscricao.service";
import UsuarioService from "../service/usuario.service";

const inscricaoService = new InscricaoService();

export default class InscricaoController {
    constructor() {
    }

    public async login(request: any, h: ResponseToolkit): Promise<ResponseObject> {
        let response;
        try {        
            response = h.response({token:'Basic am9objpzZWNyZXQ=',id:await inscricaoService.login(request.params.email,request.params.password)});
            return response;
        } catch (error) {
            unauthorized()
        }

        return response;
    }
}