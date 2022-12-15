"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupMiddleware = exports.loginMiddleware = void 0;
const login_middleware_1 = __importDefault(require("./login.middleware"));
exports.loginMiddleware = login_middleware_1.default;
const singup_middleware_1 = __importDefault(require("./singup.middleware"));
exports.signupMiddleware = singup_middleware_1.default;
