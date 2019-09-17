import express from "express";
import { cardModel } from "../models/CardModel";

export class CardServices {
    public static async createCard(req: express.Request, res: express.Response) {
        try {
            let newCard = new cardModel(req.body);
            await newCard.save();
            return newCard;
        }
        catch (err) {
            console.log(err);;
            return err;
        }
    }

    public static async getAllCards(req: express.Request, res: express.Response) {
        try {
            let allCards = await cardModel.find().populate('bank').populate('user').exec();
            return (allCards);
        } catch (err) {
            console.log(err);
            return (err);
        }
    }

    public static async getCardById(req: express.Request, res: express.Response) {
        try {
            let cardItem = await cardModel.findById(req.params.userId).exec();
            return (cardItem);
        }
        catch (err) {
            console.log(err);
            return (err);
        }
    }
    public static async updateCardbyId(req: express.Request, res: express.Response) {
        try {
            console.log("name from query string: ", req.query.email);
            let cardItem: any = await cardModel.findById(req.params.cardId).exec();
            cardItem.name = req.body.name;
            cardItem.type = req.body.type;
            return (cardItem);
        }
        catch (err) {
            console.log(err);
            return (err);
        }
    }
}