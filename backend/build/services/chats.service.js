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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserChat_1 = __importDefault(require("../database/models/UserChat"));
const Users_1 = __importDefault(require("../database/models/Users"));
const getAll = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const chats = yield UserChat_1.default.findAll({
        where: { userId: id }
    });
    const promises = chats.map(({ chatId }) => __awaiter(void 0, void 0, void 0, function* () {
        const userIds = yield UserChat_1.default.findAll({
            where: { chatId }
        });
        return userIds;
    }));
    const listOfChats = yield Promise.all(promises);
    const onlyId = listOfChats.flat().map(({ userId }) => userId);
    const result = [...new Set(onlyId)].filter((i) => i !== id);
    const usersChat = result.map((u) => __awaiter(void 0, void 0, void 0, function* () { return Users_1.default.findByPk(u); }));
    const promiseUsersChat = yield Promise.all(usersChat);
    const myUsersChat = promiseUsersChat.map((obj) => ({
        name: obj.name,
        lastName: obj.lastName,
        username: obj.username,
        image: obj.image,
    }));
    return { type: null, message: myUsersChat };
});
exports.default = {
    getAll,
};
