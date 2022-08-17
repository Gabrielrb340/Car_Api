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
var inscricao_route_1 = require("./src/routes/inscricao-route");
var user_route_1 = require("./src/routes/user-route");
var Hapi = require("@hapi/hapi");
var data_source_1 = require("./src/data-source");
var Bcrypt = require("bcrypt");
var acidente_route_1 = require("./src/routes/acidente-route");
var users = {
    john: {
        username: 'john',
        password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',
        name: 'John Doe',
        id: '2133d32a'
    }
};
var validate = function (request, username, password) { return __awaiter(void 0, void 0, void 0, function () {
    var user, isValid, credentials;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(username, password);
                user = users[username];
                if (!user) {
                    return [2 /*return*/, { credentials: null, isValid: false }];
                }
                return [4 /*yield*/, Bcrypt.compare(password, user.password)];
            case 1:
                isValid = _a.sent();
                credentials = { id: user.id, name: user.name };
                return [2 /*return*/, { isValid: isValid, credentials: credentials }];
        }
    });
}); };
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.app = Hapi.server({
                            host: '127.0.0.1',
                            port: '4000',
                            routes: {
                                cors: true
                            }
                        });
                        data_source_1.AppDataSource.initialize();
                        return [4 /*yield*/, this.app.register(require('@hapi/basic'))];
                    case 1:
                        _a.sent();
                        this.app.auth.strategy('simple', 'basic', { validate: validate });
                        this.app.route(user_route_1.UsuarioRoutes);
                        this.app.route(inscricao_route_1.InscricaoRoute);
                        this.app.route(acidente_route_1.AcidenteRoute);
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.start = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.app) === null || _a === void 0 ? void 0 : _a.start())];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return App;
}());
var app = new App();
exports.default = app;
//# sourceMappingURL=main.js.map