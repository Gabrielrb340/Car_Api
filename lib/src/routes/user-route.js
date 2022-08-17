"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRoutes = void 0;
var user_controller_1 = require("../controllers/user-controller");
var controller = new user_controller_1.default();
exports.UsuarioRoutes = [
    {
        method: "POST",
        path: "/user",
        options: {
            auth: 'simple'
        },
        handler: controller.createUser
    },
    {
        method: "POST",
        path: "/user/createoredit",
        handler: controller.CreateOrUpdateUsuario
    },
    {
        method: "PUT",
        path: "/user/edit/{id}",
        options: {
            auth: 'simple'
        },
        handler: controller.UpdateUser
    },
    {
        method: "GET",
        path: "/user/{id}",
        options: {
            auth: 'simple'
        },
        handler: controller.getUser
    }
];
//# sourceMappingURL=user-route.js.map