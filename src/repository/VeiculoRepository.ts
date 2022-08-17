import { Veiculo } from './../entity/Veiculo';
import { Acidente } from '../entity/Acidente';
import { AppDataSource } from '../data-source';
import IRepository from '../application/Interface/Repository/IRepository';
import { badImplementation } from '@hapi/boom';

export default class VeiculoRepository implements IRepository<Veiculo>{
    getall() {
    }
    getById(id: string) {
    }
    softDelete(id: string) {
    }
    update(object: Veiculo) {
    }
    async create(object: Veiculo) {
        try {
           return await AppDataSource.getRepository(Veiculo).save(object);
        } catch (error) {
            badImplementation('Something gone wrong')
        }
    }
 
  
}