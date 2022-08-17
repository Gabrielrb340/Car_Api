"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscricaoRoute = void 0;
var inscricao_controller_1 = require("../controllers/inscricao.controller");
var controller = new inscricao_controller_1.default();
exports.InscricaoRoute = [
    {
        method: "POST",
        path: "/inscricao/login",
        handler: controller.login
    }
];
//# sourceMappingURL=inscricao-route.js.map