import express from "express";
import { BankService } from "../services/bankServices";

export class BankController {

    public async createBank(req: express.Request, res: express.Response) {
        let result = await BankService.createBank(req, res);
        res.json(result);
    }

    public async getAllBanks(req: express.Request, res: express.Response) {
        let result = await BankService.getAllBanks(req, res);
        res.json(result);
    }

    public async getBankByName(req: express.Request, res: express.Response) {
        let result = await BankService.getBankByName(req, res);
        res.json(result);
    }

    public async updateBank(req: express.Request, res: express.Response) {
        let result = await BankService.updateBankbyId(req, res);
        res.json(result);
    }
}

