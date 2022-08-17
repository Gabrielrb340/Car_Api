import { Veiculo } from '../entity/Veiculo';
import { Endereco } from '../entity/Endereco';
import { Inscricao } from '../entity/Inscricao';
import { AppDataSource } from '../data-source';
import Usuario from '../entity/Usuario';
import IService from '../application/Interface/Service/IService';
import UsuarioRepository from '../repository/UserRepository';
import IUserService from '../application/Interface/Service/IUserService';
import InscricaoRepository from '../repository/InscricaoRepository';
import { TipoEndereco } from '../application/Enum/TipoEndereco';
const inscricaoRepository = new InscricaoRepository();

export default class InscricaoService implements IInscricaoService{
    constructor() {

    }
    async login(email: string, senha: string) {
        let response;
        try {
            var result = await inscricaoRepository.login(email,senha);
            return result.id;
            if(!result){
                throw new Error("Email ou senha incorretos");
            }
        } catch (error) {
            throw new Error("Email ou senha incorretos");
        }
    }

}