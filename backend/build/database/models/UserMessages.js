"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Chats_1 = __importDefault(require("./Chats"));
const Messages_1 = __importDefault(require("./Messages"));
const Users_1 = __importDefault(require("./Users"));
class UserMessages extends sequelize_1.Model {
}
UserMessages.init({
    user_id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    chat_id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    message_id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    sequelize: _1.default,
    modelName: 'user_messages',
    tableName: 'user_messages',
    timestamps: false,
    underscored: true,
});
UserMessages.belongsTo(Users_1.default, {
    foreignKey: 'user_id',
});
UserMessages.belongsTo(Chats_1.default, {
    foreignKey: 'chat_id',
});
UserMessages.belongsTo(Messages_1.default, {
    foreignKey: 'message_id',
});
exports.default = UserMessages;
