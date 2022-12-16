"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get('/:chatId', middlewares_1.verifyJwt, controllers_1.messagesController.getAll);
router.post('/:chatId', middlewares_1.verifyJwt, controllers_1.messagesController.create);
exports.default = router;
