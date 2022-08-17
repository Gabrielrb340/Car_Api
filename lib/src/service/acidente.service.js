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
var Endereco_1 = require("./../entity/Endereco");
var Acidente_1 = require("./../entity/Acidente");
var UserRepository_1 = require("../repository/UserRepository");
var InscricaoRepository_1 = require("../repository/InscricaoRepository");
var TipoEndereco_1 = require("../application/Enum/TipoEndereco");
var EnderencoRepository_1 = require("../repository/EnderencoRepository");
var acidenteRepository_1 = require("../repository/acidenteRepository");
var inscricaoRepository = new InscricaoRepository_1.default();
var usuarioRepository = new UserRepository_1.default();
var enderecoRepository = new EnderencoRepository_1.default();
var acidenteRepository = new acidenteRepository_1.default();
var AcidenteService = /** @class */ (function () {
    function AcidenteService() {
    }
    AcidenteService.prototype.criarAcidente = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var inscricao, envolvido, envolvidoCriadoId, enderecoAcidente, enderecoInserido, enderecoAcidenteInserido, acidente, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 10, , 11]);
                        return [4 /*yield*/, inscricaoRepository.getById(payload.inscricaoId)];
                    case 1:
                        inscricao = _a.sent();
                        return [4 /*yield*/, usuarioRepository.getByCpf(payload.cpfEnvolvido)];
                    case 2:
                        envolvido = _a.sent();
                        if (!!envolvido) return [3 /*break*/, 5];
                        return [4 /*yield*/, usuarioRepository.create({
                                nome: payload.nomeEnvolvido,
                                sobrenome: payload.sobrenomeEnvolvido,
                                cpf: payload.cpfEnvolvido,
                                dataNascimento: new Date() // qualquer data aqui serve pois ele é um terceiro e precisa inserir a data correta caso crie uma conta no sistema
                            })];
                    case 3:
                        envolvidoCriadoId = _a.sent();
                        console.log("envolvidoinserido->>>>>>" + envolvidoCriadoId);
                        return [4 /*yield*/, usuarioRepository.getByCpf(envolvidoCriadoId.raw.id)];
                    case 4:
                        envolvido = _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!(envolvido && inscricao.usuario)) return [3 /*break*/, 9];
                        enderecoAcidente = new Endereco_1.Endereco();
                        enderecoAcidente.bairro = payload.bairro;
                        enderecoAcidente.cep = payload.cep;
                        enderecoAcidente.cidade = payload.cidade;
                        enderecoAcidente.rua = payload.rua;
                        enderecoAcidente.tipo_endereco = TipoEndereco_1.TipoEndereco.ACIDENTE;
                        return [4 /*yield*/, enderecoRepository.create(enderecoAcidente)];
                    case 6:
                        enderecoInserido = _a.sent();
                        console.log("Endereço inserido ", enderecoInserido);
                        return [4 /*yield*/, enderecoRepository.getById(enderecoInserido.raw[0].id)];
                    case 7:
                        enderecoAcidenteInserido = _a.sent();
                        console.log('retrieve endereco inserido', enderecoAcidenteInserido);
                        if (!enderecoAcidenteInserido) return [3 /*break*/, 9];
                        acidente = new Acidente_1.Acidente();
                        acidente.causa = payload.motivo;
                        acidente.envolvido = [inscricao.usuario, envolvido];
                        acidente.data_acidente = payload.dataAcidente;
                        acidente.endereco = enderecoAcidenteInserido;
                        return [4 /*yield*/, acidenteRepository.create(acidente)];
                    case 8:
                        result = _a.sent();
                        console.log('Acidente Inserido-------->', result);
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return AcidenteService;
}());
exports.default = AcidenteService;
//# sourceMappingURL=acidente.service.js.map