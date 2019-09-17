import express from "express";
import { CardServices } from "../services/cardServices";

export class CardController {
    public async createCard(req: express.Request, res: express.Response) {
        let result = await CardServices.createCard(req, res);
        res.json(result);
    }

    public async getAllCards(req: express.Request, res: express.Response) {
        let result = await CardServices.getAllCards(req, res);
        res.json(result);
    }

    public async getCardbyId(req: express.Request, res: express.Response) {
        let result = await CardServices.getCardById(req, res);
        res.json(result);
    }

    public async updateCardbyId(req: express.Request, res: express.Response) {
        let result = await CardServices.updateCardbyId(req, res);
        res.json(result);
    }
}