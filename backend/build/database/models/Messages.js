"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Users_1 = __importDefault(require("./Users"));
class Messages extends sequelize_1.Model {
}
Messages.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    message: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DATE,
        allowNull: false,
    }
}, {
    sequelize: _1.default,
    modelName: 'messages',
    tableName: 'messages',
    timestamps: false,
    underscored: true,
});
Messages.hasMany(Users_1.default, {
    foreignKey: 'user_id',
    as: 'userchats'
});
exports.default = Messages;
