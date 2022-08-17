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
var data_source_1 = require("../data-source");
var Usuario_1 = require("../entity/Usuario");
var UsuarioRepository = /** @class */ (function () {
    function UsuarioRepository() {
    }
    UsuarioRepository.prototype.create = function (object) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Usuario_1.default).createQueryBuilder()
                            .insert()
                            .into(Usuario_1.default)
                            .values({
                            nome: object.nome,
                            sobrenome: object.sobrenome,
                            cpf: object.cpf,
                            data_nascimento: object.dataNascimento
                        })
                            .execute()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuarioRepository.prototype.getall = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Method not implemented.');
            });
        });
    };
    UsuarioRepository.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Usuario_1.default).createQueryBuilder('user').where("user.id = :id", { id: id }).getOne()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error("Houve um erro ao buscar o Usuario!" + error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsuarioRepository.prototype.getByCpf = function (cpf) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(data_source_1.AppDataSource);
                        return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Usuario_1.default).createQueryBuilder('user').where("user.cpf = :cpf", { cpf: cpf }).getOne()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error("Houve um erro ao buscar o Usuario!" + error_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsuarioRepository.prototype.softDelete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("");
            });
        });
    };
    UsuarioRepository.prototype.update = function (object) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, data_source_1.AppDataSource
                                .createQueryBuilder()
                                .update(Usuario_1.default)
                                .set({
                                nome: object.nome,
                                sobrenome: object.sobrenome,
                                data_nascimento: object.data_nascimento
                            })
                                .where("id = :id", { id: object.cpf })
                                .execute()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error("Houve um erro ao atualizar o Usuario!");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsuarioRepository.prototype.updateByCpf = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, data_source_1.AppDataSource
                                .createQueryBuilder()
                                .update(Usuario_1.default)
                                .set({
                                nome: request.nome,
                                sobrenome: request.sobrenome,
                                data_nascimento: request.dataNascimento
                            })
                                .where("id = :id", { id: request.cpf })
                                .execute()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error("Houve um erro ao atualizar o Usuario!");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UsuarioRepository;
}());
exports.default = UsuarioRepository;
//# sourceMappingURL=UserRepository.js.map