"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Acidente_1 = require("./Acidente");
var Veiculo_1 = require("./Veiculo");
var typeorm_1 = require("typeorm");
var Base_1 = require("./Base");
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Usuario.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Usuario.prototype, "sobrenome", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamptz' }),
        __metadata("design:type", Date)
    ], Usuario.prototype, "data_nascimento", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Usuario.prototype, "cpf", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Veiculo_1.Veiculo; }, function (veiculo) { return veiculo.usuario; }),
        __metadata("design:type", Array)
    ], Usuario.prototype, "carro", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function (type) { return Acidente_1.Acidente; }, function (acidente) { return acidente.envolvido; }),
        __metadata("design:type", Array)
    ], Usuario.prototype, "acidente", void 0);
    Usuario = __decorate([
        (0, typeorm_1.Entity)()
    ], Usuario);
    return Usuario;
}(Base_1.Base));
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map