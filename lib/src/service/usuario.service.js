"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = require("./../entity/Veiculo");
var Endereco_1 = require("./../entity/Endereco");
var Inscricao_1 = require("./../entity/Inscricao");
var data_source_1 = require("../data-source");
var Usuario_1 = require("./../entity/Usuario");
var UserRepository_1 = require("../repository/UserRepository");
var InscricaoRepository_1 = require("../repository/InscricaoRepository");
var TipoEndereco_1 = require("../application/Enum/TipoEndereco");
var VeiculoRepository_1 = require("../repository/VeiculoRepository");
var usuarioRepository = new UserRepository_1.default();
var inscricaoRepository = new InscricaoRepository_1.default();
var veiculoRepository = new VeiculoRepository_1.default();
var UsuarioService = /** @class */ (function () {
    function UsuarioService() {
    }
    UsuarioService.prototype.updateUserById = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var inscricao, queryRunner, err_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 15, , 16]);
                        return [4 /*yield*/, inscricaoRepository.getById(id)];
                    case 1:
                        inscricao = _a.sent();
                        console.log(inscricao);
                        if (!inscricao) return [3 /*break*/, 13];
                        queryRunner = data_source_1.AppDataSource.createQueryRunner();
                        /// Iniciando transação para caso alguma falhar nada no BD mudar
                        /// TODO Passar o Query build como parametro no repositorio e passar os respectivos codigos para o mesmo
                        return [4 /*yield*/, queryRunner.connect()];
                    case 2:
                        /// Iniciando transação para caso alguma falhar nada no BD mudar
                        /// TODO Passar o Query build como parametro no repositorio e passar os respectivos codigos para o mesmo
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 8, 10, 12]);
                        return [4 /*yield*/, queryRunner.manager.update(Usuario_1.default, { id: inscricao.usuario.id }, {
                                nome: payload.nome,
                                sobrenome: payload.sobrenome
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.update(Endereco_1.Endereco, { usuario: inscricao.usuario }, {
                                bairro: payload.bairro,
                                cep: payload.cep,
                                cidade: payload.cidade,
                                rua: payload.rua,
                                tipo_endereco: TipoEndereco_1.TipoEndereco.INSCRICAO
                            })];
                    case 6:
                        _a.sent();
                        console.log("------------>TUDO DEU CERTO");
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 12];
                    case 8:
                        err_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 9:
                        _a.sent();
                        throw new Error("Something gone wrong" + err_1);
                    case 10: return [4 /*yield*/, queryRunner.release()];
                    case 11:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 12: return [3 /*break*/, 14];
                    case 13: throw new Error("Cpf já cadastrado");
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        error_1 = _a.sent();
                        throw new Error("Something gone wrong->" + error_1);
                    case 16: return [2 /*return*/, true];
                }
            });
        });
    };
    UsuarioService.prototype.createOrUpdateUsuario = function (object) {
        return __awaiter(this, void 0, void 0, function () {
            var inscricao, user, queryRunner, err_2, userInsertResult, insertedUser, inscricao_1, veiculo, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 24, , 25]);
                        return [4 /*yield*/, inscricaoRepository.getInscricaoByCpf(object.cpf)];
                    case 1:
                        inscricao = _a.sent();
                        return [4 /*yield*/, usuarioRepository.getByCpf(object.cpf)];
                    case 2:
                        user = _a.sent();
                        if (!(inscricao == null && user)) return [3 /*break*/, 16];
                        queryRunner = data_source_1.AppDataSource.createQueryRunner();
                        /// Iniciando transação para caso alguma falhar nada no BD mudar
                        /// TODO Passar o Query build como parametro no repositorio e passar os respectivos codigos para o mesmo
                        return [4 /*yield*/, queryRunner.connect()];
                    case 3:
                        /// Iniciando transação para caso alguma falhar nada no BD mudar
                        /// TODO Passar o Query build como parametro no repositorio e passar os respectivos codigos para o mesmo
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 11, 13, 15]);
                        return [4 /*yield*/, queryRunner.manager.update(Usuario_1.default, { cpf: object.cpf }, { data_nascimento: object.dataNascimento,
                                sobrenome: object.sobrenome,
                                nome: object.nome
                            })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.insert(Inscricao_1.Inscricao, {
                                email: object.emailAcesso,
                                password: object.password,
                                usuario: user
                            })];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.insert(Endereco_1.Endereco, {
                                bairro: object.bairro,
                                cep: object.cep,
                                cidade: object.cidade,
                                rua: object.rua,
                                tipo_endereco: TipoEndereco_1.TipoEndereco.INSCRICAO,
                                usuario: user
                            })];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.insert(Veiculo_1.Veiculo, {
                                placa: object.placa,
                                modelo: object.modelo,
                                ano: object.ano,
                                fabricante: object.fabricante,
                                usuario: user
                            })];
                    case 9:
                        _a.sent();
                        console.log("------------>TUDO DEU CERTO");
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 10:
                        _a.sent();
                        return [3 /*break*/, 15];
                    case 11:
                        err_2 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 12:
                        _a.sent();
                        throw new Error("Something gone wrong");
                    case 13: return [4 /*yield*/, queryRunner.release()];
                    case 14:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 15: return [3 /*break*/, 23];
                    case 16:
                        if (!(inscricao == null && user == null)) return [3 /*break*/, 22];
                        return [4 /*yield*/, usuarioRepository.create(object)];
                    case 17:
                        userInsertResult = _a.sent();
                        return [4 /*yield*/, usuarioRepository.getById(userInsertResult.raw[0].id)];
                    case 18:
                        insertedUser = _a.sent();
                        if (!insertedUser) return [3 /*break*/, 21];
                        inscricao_1 = new Inscricao_1.Inscricao();
                        inscricao_1.email = object.emailAcesso,
                            inscricao_1.password = object.password;
                        inscricao_1.usuario = insertedUser;
                        return [4 /*yield*/, inscricaoRepository.create(inscricao_1)];
                    case 19:
                        _a.sent();
                        veiculo = new Veiculo_1.Veiculo();
                        veiculo.ano = object.ano;
                        veiculo.fabricante = object.fabricante;
                        veiculo.ano = object.ano;
                        veiculo.modelo = object.modelo;
                        veiculo.placa = object.placa;
                        veiculo.usuario = insertedUser;
                        return [4 /*yield*/, veiculoRepository.create(veiculo)];
                    case 20:
                        _a.sent();
                        _a.label = 21;
                    case 21: return [3 /*break*/, 23];
                    case 22: throw new Error("Cpf já cadastrado");
                    case 23: return [3 /*break*/, 25];
                    case 24:
                        error_2 = _a.sent();
                        throw new Error("Something gone wrong->" + error_2);
                    case 25: return [2 /*return*/, true];
                }
            });
        });
    };
    UsuarioService.prototype.insert = function (object) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    UsuarioService.prototype.getall = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Method not implemented.');
            });
        });
    };
    UsuarioService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var UserRepository, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        UserRepository = new UserRepository_1.default();
                        return [4 /*yield*/, UserRepository.getById(id)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    UsuarioService.prototype.softDelete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Method not implemented.');
            });
        });
    };
    return UsuarioService;
}());
exports.default = UsuarioService;
//# sourceMappingURL=usuario.service.js.map