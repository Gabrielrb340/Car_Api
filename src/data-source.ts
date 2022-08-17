import "reflect-metadata"

import { Veiculo } from './entity/Veiculo';
import { Acidente } from './entity/Acidente';
import { Endereco } from './entity/Endereco';
import { Inscricao } from './entity/Inscricao';
import { DataSource } from "typeorm"
import Usuario  from "./entity/Usuario"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "local",
    database: "CarInsurance",
    synchronize: true,
    logging: true,
    entities: [Usuario,Inscricao,Endereco,Acidente,Veiculo],
    migrations: [],
    subscribers: [],
})
