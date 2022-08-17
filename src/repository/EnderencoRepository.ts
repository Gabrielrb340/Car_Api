import { badImplementation } from '@hapi/boom';
import { AppDataSource } from './../data-source';
import { TipoEndereco } from './../application/Enum/TipoEndereco';
import { Endereco } from './../entity/Endereco';
import IRepository from '../application/Interface/Repository/IRepository';
import app from '../../main';

export default class EnderecoRepository implements IRepository<Endereco>{
    getall() {
    }
    async getById(id: string) {
        try {
            return await AppDataSource.getRepository(Endereco).createQueryBuilder('endereco').where("endereco.id=:id",{id:id}).getOne()
        } catch (error) {
            throw badImplementation("Bad implementation on endereço")   
        }
    }
    softDelete(id: string) {
    }
    update(object: Endereco) {
    }
    async create(object: Endereco) {
        try {
            return await AppDataSource.getRepository(Endereco).insert(object);
        } catch (error) {
            badImplementation('Something gone wrong on insert statement')
        }
    }
 
  
}