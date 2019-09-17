import express from "express";
import { bankModel } from "../models/bankModel";

export class BankService{
    public static async createBank(req:express.Request, res:express.Response){
        try{
            let newBank = new bankModel(req.body);
            await newBank.save();
            return newBank;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getAllBanks(req: express.Request, res: express.Response) {
        try {
            let allBanks = await bankModel.find().exec();
            return (allBanks);
        } catch (err) {
            console.log(err);
            return (err);
        }
    }

    public static async getBankByName(req: express.Request, res: express.Response) {
        try {
            console.log("name from query string: ", req.query.name);
            let bankItem = await bankModel.findOne({ name: req.query.name }).exec();
            return (bankItem);
        }
        catch (err) {
            console.log(err);
            return (err);
        }
    }

    public static async updateBankbyId(req:express.Request, res: express.Response){
        try {
            let userItem: any = await bankModel.findById(req.params.bankId).exec();
            userItem.name = req.body.name;
            userItem.updatedDate = req.body.updatedDate;
            userItem.active = req.body.active;
            return userItem;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
}