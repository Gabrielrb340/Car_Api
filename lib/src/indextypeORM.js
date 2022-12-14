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
var Veiculo_1 = require("./entity/Veiculo");
var Endereco_1 = require("./entity/Endereco");
var Inscricao_1 = require("./entity/Inscricao");
var data_source_1 = require("./data-source");
var Usuario_1 = require("./entity/Usuario");
var TipoEndereco_1 = require("./application/Enum/TipoEndereco");
var md5_1 = require("ts-md5/dist/md5");
data_source_1.AppDataSource.initialize().then(function () { return __awaiter(void 0, void 0, void 0, function () {
    var user, carro, endereco, subscription;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Inserting a new user into the database...");
                user = new Usuario_1.default();
                user.nome = "Timber";
                user.sobrenome = "Saw";
                user.data_nascimento = new Date();
                user.cpf = "08995072636";
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(user)];
            case 1:
                _a.sent();
                carro = new Veiculo_1.Veiculo();
                carro.fabricante = 'ford';
                carro.ano = 2017;
                carro.modelo = 'focus';
                carro.usuario = user;
                carro.placa = 'aaa';
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(carro)];
            case 2:
                _a.sent();
                endereco = new Endereco_1.Endereco();
                endereco.bairro = "Nossa senhora de fatima";
                endereco.cidade = "Ibirit??";
                endereco.cep = '32410053';
                endereco.tipo_endereco = TipoEndereco_1.TipoEndereco.INSCRICAO;
                endereco.rua = "Paulino Evangelista";
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(endereco)];
            case 3:
                _a.sent();
                subscription = new Inscricao_1.Inscricao();
                subscription.endereco = endereco;
                subscription.usuario = user;
                subscription.email = "Gabriel@test.com";
                subscription.password = md5_1.Md5.hashStr('test');
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(subscription)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); }).catch(function (error) { return console.log(error); });
//# sourceMappingURL=indextypeORM.js.map