"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userServices_1 = require("../services/userServices");
class userController {
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield userServices_1.UserService.registerUser(req, res);
            res.json(result);
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield userServices_1.UserService.getAllUser(req, res);
            res.json(result);
        });
    }
    getUserCards(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield userServices_1.UserService.getUserCards(req, res);
            res.json(result);
        });
    }
    assignCardstoUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield userServices_1.UserService.assignCardstoUser(req, res);
            res.json(result);
        });
    }
    getUserByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield userServices_1.UserService.getUserByEmail(req, res);
            res.json(result);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield userServices_1.UserService.login(req, res);
            res.json(result);
        });
    }
    updateUserbyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield userServices_1.UserService.updateUserbyId(req, res);
            res.json(result);
        });
    }
}
exports.userController = userController;
