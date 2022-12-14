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
exports.Endereco = void 0;
var TipoEndereco_1 = require("../application/Enum/TipoEndereco");
var typeorm_1 = require("typeorm");
var Base_1 = require("./Base");
var Usuario_1 = require("./Usuario");
var Endereco = /** @class */ (function (_super) {
    __extends(Endereco, _super);
    function Endereco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Endereco.prototype, "rua", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Endereco.prototype, "bairro", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Endereco.prototype, "cidade", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Endereco.prototype, "cep", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: TipoEndereco_1.TipoEndereco }),
        __metadata("design:type", String)
    ], Endereco.prototype, "tipo_endereco", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Usuario_1.default; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Usuario_1.default)
    ], Endereco.prototype, "usuario", void 0);
    Endereco = __decorate([
        (0, typeorm_1.Entity)()
    ], Endereco);
    return Endereco;
}(Base_1.Base));
exports.Endereco = Endereco;
//# sourceMappingURL=Endereco.js.map