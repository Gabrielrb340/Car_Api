import { Endereco } from './../entity/Endereco';
import { Acidente } from './../entity/Acidente';
import { Veiculo } from '../entity/Veiculo';
import { Inscricao } from '../entity/Inscricao';
import { AppDataSource } from '../data-source';
import Usuario from '../entity/Usuario';
import IService from '../application/Interface/Service/IService';
import UsuarioRepository from '../repository/UserRepository';
import IUserService from '../application/Interface/Service/IUserService';
import InscricaoRepository from '../repository/InscricaoRepository';
import { TipoEndereco } from '../application/Enum/TipoEndereco';
import EnderecoRepository from '../repository/EnderencoRepository';
import AcidenteRepository from '../repository/acidenteRepository';
const inscricaoRepository = new InscricaoRepository();
const usuarioRepository = new UsuarioRepository();
const enderecoRepository = new EnderecoRepository();
const acidenteRepository = new AcidenteRepository();

export default class AcidenteService implements IAcidenteService{
    constructor() {

    }
    async criarAcidente(id: any, payload: any) {
        try {
            var inscricao = await inscricaoRepository.getById(payload.inscricaoId);
            var envolvido = await usuarioRepository.getByCpf(payload.cpfEnvolvido);
            if(!envolvido){
                var envolvidoCriadoId=  await usuarioRepository.create({
                    nome:payload.nomeEnvolvido,
                    sobrenome:payload.sobrenomeEnvolvido,
                    cpf:payload.cpfEnvolvido,
                    dataNascimento: new Date() // qualquer data aqui serve pois ele é um terceiro e precisa inserir a data correta caso crie uma conta no sistema
                })
                console.log("envolvidoinserido->>>>>>"+ envolvidoCriadoId)
            envolvido = await usuarioRepository.getByCpf(envolvidoCriadoId.raw.id);
            }
            if(envolvido && inscricao.usuario){
                let enderecoAcidente = new Endereco();
                enderecoAcidente.bairro = payload.bairro;
                enderecoAcidente.cep = payload.cep;
                enderecoAcidente.cidade = payload.cidade;
                enderecoAcidente.rua = payload.rua;
                enderecoAcidente.tipo_endereco = TipoEndereco.ACIDENTE;
                let enderecoInserido = await enderecoRepository.create(enderecoAcidente);
                console.log("Endereço inserido ", enderecoInserido)
                var enderecoAcidenteInserido = await enderecoRepository.getById(enderecoInserido.raw[0].id)
                console.log('retrieve endereco inserido' ,enderecoAcidenteInserido)
                if(enderecoAcidenteInserido){
                    let acidente = new Acidente();
                    acidente.causa = payload.motivo;
                    acidente.envolvido = [inscricao.usuario,envolvido];
                    acidente.data_acidente = payload.dataAcidente;
                    acidente.endereco = enderecoAcidenteInserido;
                    var result = await acidenteRepository.create(acidente);
                    console.log('Acidente Inserido-------->', result)
                }

            }
        } catch (error) {
            console.log(error)
        }
        
    }


}