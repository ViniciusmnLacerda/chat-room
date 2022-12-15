"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapError_1 = __importDefault(require("../utils/mapError"));
const schemas_1 = require("../utils/schemas");
const signupMiddleware = (req, res, next) => {
    const user = req.body;
    const { error } = schemas_1.signupSchema.validate(user);
    if (error) {
        const { type } = error.details[0];
        const { message } = error.details[0];
        console.log('TYPE: ', type);
        return res.status((0, mapError_1.default)(type)).json({ message });
    }
    next();
};
exports.default = signupMiddleware;
