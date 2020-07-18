"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controller/userController");
const express_1 = require("express");
let userControllerObj = new userController_1.userController();
exports.userRoutes = express_1.Router();
exports.userRoutes.get('/', userControllerObj.getAllUsers);
exports.userRoutes.get('/getUserByEmail', userControllerObj.getUserByEmail);
exports.userRoutes.put('/update/:userId', userControllerObj.updateUserbyId);
exports.userRoutes.get('/getUserCards', userControllerObj.getUserCards);
exports.userRoutes.put('/assignCards', userControllerObj.assignCardstoUser);