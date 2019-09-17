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
const CardModel_1 = require("../models/CardModel");
class CardServices {
    static createCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newCard = new CardModel_1.cardModel(req.body);
                yield newCard.save();
                return newCard;
            }
            catch (err) {
                console.log(err);
                ;
                return err;
            }
        });
    }
    static getAllCards(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allCards = yield CardModel_1.cardModel.find().populate('bank').populate('user').exec();
                return (allCards);
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
    static getCardById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cardItem = yield CardModel_1.cardModel.findById(req.params.userId).exec();
                return (cardItem);
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
    static updateCardbyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("name from query string: ", req.query.email);
                let cardItem = yield CardModel_1.cardModel.findById(req.params.cardId).exec();
                cardItem.name = req.body.name;
                cardItem.type = req.body.type;
                return (cardItem);
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
}
exports.CardServices = CardServices;
