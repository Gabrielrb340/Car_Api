"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var Veiculo_1 = require("./entity/Veiculo");
var Acidente_1 = require("./entity/Acidente");
var Endereco_1 = require("./entity/Endereco");
var Inscricao_1 = require("./entity/Inscricao");
var typeorm_1 = require("typeorm");
var Usuario_1 = require("./entity/Usuario");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "local",
    database: "CarInsurance",
    synchronize: true,
    logging: true,
    entities: [Usuario_1.default, Inscricao_1.Inscricao, Endereco_1.Endereco, Acidente_1.Acidente, Veiculo_1.Veiculo],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map