import { Veiculo } from './entity/Veiculo';
import { Endereco } from './entity/Endereco';
import { Inscricao } from './entity/Inscricao';
import { AppDataSource } from "./data-source"
import  Usuario  from "./entity/Usuario"
import { TipoEndereco } from './application/Enum/TipoEndereco';
import {Md5} from 'ts-md5/dist/md5';

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new Usuario()
    user.nome = "Timber"
    user.sobrenome = "Saw"
    user.data_nascimento = new Date();
    user.cpf = "08995072636"
    await AppDataSource.manager.save(user)
    

    const carro = new Veiculo();
    carro.fabricante = 'ford'
    carro.ano = 2017 
    carro.modelo = 'focus'
    carro.usuario = user;
    carro.placa='aaa';
    await AppDataSource.manager.save(carro);
    
    const endereco =  new Endereco();
    endereco.bairro = "Nossa senhora de fatima"
    endereco.cidade = "Ibirité";
    endereco.cep = '32410053'
    endereco.tipo_endereco = TipoEndereco.INSCRICAO;
    endereco.rua = "Paulino Evangelista"
    await AppDataSource.manager.save(endereco);

    const subscription = new Inscricao();
    subscription.endereco = endereco;
    subscription.usuario = user;
    subscription.email= "Gabriel@test.com"
    subscription.password= Md5.hashStr('test')

    await AppDataSource.manager.save(subscription)


}).catch(error => console.log(error))
