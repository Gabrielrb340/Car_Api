import { Acidente } from '../entity/Acidente';
import { Request } from '@hapi/hapi';
import { AppDataSource } from '../data-source';
import Usuario from '../entity/Usuario';
import IRepository from '../application/Interface/Repository/IRepository';
import { IUserRepository } from '../application/Interface/Repository/IUserRepository';
import { badImplementation } from '@hapi/boom';

export default class AcidenteRepository implements IRepository<Acidente>{
    getall() {
    }
    getById(id: string) {
    }
    softDelete(id: string) {
    }
    update(object: Acidente) {
    }
    async create(object: Acidente) {
        try {
           return await AppDataSource.getRepository(Acidente).save(object);
        } catch (error) {
            badImplementation('Something gone wrong')
        }
    }
 
  
}