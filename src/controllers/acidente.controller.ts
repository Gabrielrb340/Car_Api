import { badRequest, unauthorized } from "@hapi/boom";
import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import AcidenteService from "../service/acidente.service";
import InscricaoService from "../service/inscricao.service";
import UsuarioService from "../service/usuario.service";

const acidenteService = new AcidenteService();

export default class AcidenteController {
    constructor() {
    }

    public async criarAcidente(request: any, h: ResponseToolkit): Promise<ResponseObject> {
        let response;
        try {        
            response = h.response({token:'Basic am9objpzZWNyZXQ=',id:await acidenteService.criarAcidente(request.params.inscricaoid,request.payload)});
            return response;
        } catch (error) {
            badRequest()
        }

        return response;
    }
}