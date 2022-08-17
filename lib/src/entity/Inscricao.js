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
exports.Inscricao = void 0;
var Endereco_1 = require("./Endereco");
var Usuario_1 = require("./Usuario");
var typeorm_1 = require("typeorm");
var Base_1 = require("./Base");
var Inscricao = /** @class */ (function (_super) {
    __extends(Inscricao, _super);
    function Inscricao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Inscricao.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Inscricao.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Usuario_1.default; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Usuario_1.default)
    ], Inscricao.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Endereco_1.Endereco; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Endereco_1.Endereco)
    ], Inscricao.prototype, "endereco", void 0);
    Inscricao = __decorate([
        (0, typeorm_1.Entity)()
    ], Inscricao);
    return Inscricao;
}(Base_1.Base));
exports.Inscricao = Inscricao;
//# sourceMappingURL=Inscricao.js.map