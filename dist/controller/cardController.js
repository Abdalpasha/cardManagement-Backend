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
const cardServices_1 = require("../services/cardServices");
class CardController {
    createCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield cardServices_1.CardServices.createCard(req, res);
            res.json(result);
        });
    }
    getAllCards(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield cardServices_1.CardServices.getAllCards(req, res);
            res.json(result);
        });
    }
    getCardbyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield cardServices_1.CardServices.getCardById(req, res);
            res.json(result);
        });
    }
    updateCardbyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield cardServices_1.CardServices.updateCardbyId(req, res);
            res.json(result);
        });
    }
}
exports.CardController = CardController;
