import { Inscricao } from './../entity/Inscricao';
import { AppDataSource } from '../data-source';
import Usuario  from '../entity/Usuario';
import IRepository from '../application/Interface/Repository/IRepository';
import { IUserRepository } from '../application/Interface/Repository/IUserRepository';
import IInscricaoRepository from '../application/Interface/Repository/IInscricaoRepository';
import { unauthorized } from '@hapi/boom';

export default class InscricaoRepository implements IInscricaoRepository, IRepository<Inscricao>{

    constructor() {
    }
    async login(email: string, senha: string) {
        try {
            var result = await AppDataSource.getRepository(Inscricao).findOneBy({
                password:senha,
                email:email
            }) 
            return result;
        } catch (error) {
            unauthorized();
        }
      }
    async getInscricaoByCpf(cpf:string) {
        try {
            var result = await AppDataSource.getRepository(Inscricao).createQueryBuilder('inscricao').innerJoin('inscricao.usuario','usuario').where("usuario.cpf = :cpf",{cpf:cpf}).getOne();
            return result;
            } catch (error) {
                throw new Error("Houve um erro ao buscar a inscrição !"+ error);        
            }    
        }
    getall() {
        throw new Error('Method not implemented.');
    }
    async getById(id: string) {
        try {
            var result = await AppDataSource.getRepository(Inscricao).createQueryBuilder('inscricao').innerJoinAndSelect('inscricao.usuario','usuario').where("Inscricao.id = :id",{id:id}).getOne();
            return result;
            } catch (error) {
                throw new Error("Houve um erro ao buscar a inscrição !"+ error);        
            }       }
    softDelete(id: string) {
        throw new Error('Method not implemented.');
    }
    update(object: Inscricao) {
        throw new Error('Method not implemented.');
    }
    async create(object: Inscricao) {
        return await AppDataSource.getRepository(Inscricao).createQueryBuilder()
        .insert()
        .into(Inscricao)
        .values({
          email:object.email,
          password:object.password,
          usuario:object.usuario
        })
        .execute()
    }

    
}