import { Veiculo } from './../entity/Veiculo';
import { Endereco } from './../entity/Endereco';
import { Inscricao } from './../entity/Inscricao';
import { AppDataSource } from '../data-source';
import Usuario from './../entity/Usuario';
import IService from '../application/Interface/Service/IService';
import UsuarioRepository from '../repository/UserRepository';
import IUserService from '../application/Interface/Service/IUserService';
import InscricaoRepository from '../repository/InscricaoRepository';
import { TipoEndereco } from '../application/Enum/TipoEndereco';
import { version } from 'os';
import VeiculoRepository from '../repository/VeiculoRepository';
const usuarioRepository = new UsuarioRepository();
const inscricaoRepository = new InscricaoRepository();
const veiculoRepository = new VeiculoRepository();

export default class UsuarioService implements IUserService, IService<Usuario>{
    constructor() {

    }
    async updateUserById(id: any,payload:any) {
        try {
            var inscricao = await inscricaoRepository.getById(id);
            console.log(inscricao)
            if (inscricao) { /// previamente cadastrado com terceiro
                const queryRunner = AppDataSource.createQueryRunner()
                /// Iniciando transação para caso alguma falhar nada no BD mudar
                /// TODO Passar o Query build como parametro no repositorio e passar os respectivos codigos para o mesmo
                await queryRunner.connect()

                await queryRunner.startTransaction()

                try {
                    await queryRunner.manager.update(Usuario,{id:inscricao.usuario.id},{
                        nome:payload.nome,
                        sobrenome:payload.sobrenome
                    })

                    await queryRunner.manager.update(Endereco,{usuario:inscricao.usuario},{
                        bairro:payload.bairro,
                        cep:payload.cep,
                        cidade:payload.cidade,
                        rua:payload.rua,
                        tipo_endereco:TipoEndereco.INSCRICAO
                    })
                    console.log("------------>TUDO DEU CERTO")
                    await queryRunner.commitTransaction()                    
                } catch (err) {
                    await queryRunner.rollbackTransaction()
                    throw new Error("Something gone wrong"+ err)
                } finally {
                    await queryRunner.release()
                }

            }
            else {
                throw new Error("Cpf já cadastrado");
            }
        } catch (error) {
            throw new Error("Something gone wrong->" + error);
        }
        return true;    
    }

    async createOrUpdateUsuario(object: CadastroRequest) {
        try {
            var inscricao = await inscricaoRepository.getInscricaoByCpf(object.cpf);
            var user = await usuarioRepository.getByCpf(object.cpf)
            if (inscricao == null && user) { /// previamente cadastrado com terceiro
                const queryRunner = AppDataSource.createQueryRunner()
                /// Iniciando transação para caso alguma falhar nada no BD mudar
                /// TODO Passar o Query build como parametro no repositorio e passar os respectivos codigos para o mesmo
                await queryRunner.connect()

                await queryRunner.startTransaction()

                try {
                    await queryRunner.manager.update(Usuario,{cpf:object.cpf},{data_nascimento:object.dataNascimento,
                    sobrenome:object.sobrenome,
                    nome:object.nome
                    });
                    await queryRunner.manager.insert(Inscricao,{
                        email:object.emailAcesso,
                        password:object.password,
                        usuario:user
                    })
                    await queryRunner.manager.insert(Endereco,{
                        bairro:object.bairro,
                        cep:object.cep,
                        cidade:object.cidade,
                        rua:object.rua,
                        tipo_endereco:TipoEndereco.INSCRICAO,
                        usuario:user
                    })
                    await queryRunner.manager.insert(Veiculo,{
                        placa:object.placa,
                        modelo:object.modelo,
                        ano:object.ano,
                        fabricante:object.fabricante,
                        usuario:user
                    })
                    console.log("------------>TUDO DEU CERTO")
                    await queryRunner.commitTransaction()                    
                } catch (err) {
                    await queryRunner.rollbackTransaction()
                    throw new Error("Something gone wrong")
                } finally {
                    await queryRunner.release()
                }

            }
            else if(inscricao==null && user==null){ /// nunca cadastrado de nenhuma maneira
                var userInsertResult = await usuarioRepository.create(object);
                var insertedUser = await usuarioRepository.getById(userInsertResult.raw[0].id)
                if(insertedUser){
                    let inscricao = new Inscricao();
                    inscricao.email = object.emailAcesso,
                    inscricao.password = object.password;
                    inscricao.usuario = insertedUser;
                    await inscricaoRepository.create(inscricao);

                    let veiculo = new Veiculo();
                    veiculo.ano = object.ano;
                    veiculo.fabricante = object.fabricante;
                    veiculo.ano = object.ano;
                    veiculo.modelo = object.modelo;
                    veiculo.placa = object.placa;
                    veiculo.usuario = insertedUser;
                    await veiculoRepository.create(veiculo);
                }
            }
            else {
                throw new Error("Cpf já cadastrado");
            }
        } catch (error) {
            throw new Error("Something gone wrong->" + error);
        }
        return true;
    }
    async insert(object: any) {

    }
    async getall() {
        throw new Error('Method not implemented.');
    }

    async getById(id: string) {
        var UserRepository = new UsuarioRepository();
        var result = await UserRepository.getById(id);
        return result;
    }

    async softDelete(id: string) {
        throw new Error('Method not implemented.');
    }


}