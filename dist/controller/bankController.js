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
const bankServices_1 = require("../services/bankServices");
class BankController {
    createBank(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield bankServices_1.BankService.createBank(req, res);
            res.json(result);
        });
    }
    getAllBanks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield bankServices_1.BankService.getAllBanks(req, res);
            res.json(result);
        });
    }
    getBankByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield bankServices_1.BankService.getBankByName(req, res);
            res.json(result);
        });
    }
    updateBank(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield bankServices_1.BankService.updateBankbyId(req, res);
            res.json(result);
        });
    }
}
exports.BankController = BankController;
