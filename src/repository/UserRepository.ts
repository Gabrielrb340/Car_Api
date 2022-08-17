import { Request } from '@hapi/hapi';
import { AppDataSource } from '../data-source';
import Usuario from '../entity/Usuario';
import IRepository from '../application/Interface/Repository/IRepository';
import { IUserRepository } from '../application/Interface/Repository/IUserRepository';

export default class UsuarioRepository implements IUserRepository, IRepository<Usuario>{

  constructor() {
  }
  

  
  async create(object: any) {
    return await AppDataSource.getRepository(Usuario).createQueryBuilder()
      .insert()
      .into(Usuario)
      .values({
        nome: object.nome,
        sobrenome: object.sobrenome,
        cpf: object.cpf,
        data_nascimento:object.dataNascimento
      })
      .execute()
  }

  async getall() {
    throw new Error('Method not implemented.');
  }
  async getById(id: string) {
    try {
      var result = await AppDataSource.getRepository(Usuario).createQueryBuilder('user').where("user.id = :id", { id: id }).getOne();
      return result;
    } catch (error) {
      throw new Error("Houve um erro ao buscar o Usuario!" + error);
    }
  }
  async getByCpf(cpf: string) {
    try {
      console.log(AppDataSource)
      var result = await AppDataSource.getRepository(Usuario).createQueryBuilder('user').where("user.cpf = :cpf", { cpf: cpf }).getOne();
      return result;
    } catch (error) {
      throw new Error("Houve um erro ao buscar o Usuario!" + error);
    }
  }
  async softDelete(id: string) {
    throw new Error("");
  }
  async update(object: Usuario) {
    try {
      var result = await AppDataSource
        .createQueryBuilder()
        .update(Usuario)
        .set({
          nome: object.nome,
          sobrenome: object.sobrenome,
          data_nascimento: object.data_nascimento
        })
        .where("id = :id", { id: object.cpf })
        .execute()
      return result;
    } catch (error) {
      throw new Error("Houve um erro ao atualizar o Usuario!");
    }
  }
  async updateByCpf(request: CadastroRequest) {
    try {
      var result = await AppDataSource
        .createQueryBuilder()
        .update(Usuario)
        .set({
          nome: request.nome,
          sobrenome: request.sobrenome,
          data_nascimento: request.dataNascimento
        })
        .where("id = :id", { id: request.cpf })
        .execute()
      return result;
    } catch (error) {
      throw new Error("Houve um erro ao atualizar o Usuario!");
    }  
  }
}