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
const bankModel_1 = require("../models/bankModel");
class BankService {
    static createBank(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newBank = new bankModel_1.bankModel(req.body);
                yield newBank.save();
                return newBank;
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
    static getAllBanks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allBanks = yield bankModel_1.bankModel.find().exec();
                return (allBanks);
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
    static getBankByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("name from query string: ", req.query.name);
                let bankItem = yield bankModel_1.bankModel.findOne({ name: req.query.name }).exec();
                return (bankItem);
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
    static updateBankbyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userItem = yield bankModel_1.bankModel.findById(req.params.bankId).exec();
                userItem.name = req.body.name;
                userItem.updatedDate = req.body.updatedDate;
                userItem.active = req.body.active;
                return userItem;
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
}
exports.BankService = BankService;
