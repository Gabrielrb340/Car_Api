"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcidenteRoute = void 0;
var acidente_controller_1 = require("../controllers/acidente.controller");
var controller = new acidente_controller_1.default();
exports.AcidenteRoute = [
    {
        method: "POST",
        path: "/acidente/create",
        handler: controller.criarAcidente
    }
];
//# sourceMappingURL=acidente-route.js.map