"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupValidation = exports.loginValidation = void 0;
const login_validation_1 = __importDefault(require("./login.validation"));
exports.loginValidation = login_validation_1.default;
const singup_validation_1 = __importDefault(require("./singup.validation"));
exports.signupValidation = singup_validation_1.default;
