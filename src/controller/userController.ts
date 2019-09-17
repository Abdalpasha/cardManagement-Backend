import express from "express";
import { UserService } from "../services/userServices";

export class userController {
    public async registerUser(req: express.Request, res: express.Response) {
        let result = await UserService.registerUser(req, res);
        res.json(result);
    }

    public async getAllUsers(req: express.Request, res: express.Response) {
        let result = await UserService.getAllUser(req, res);
        res.json(result);
    }

    public async getUserCards(req:express.Request, res:express.Response){
        let result = await UserService.getUserCards(req,res);
        res.json(result);
    }

    public async assignCardstoUser(req:express.Request, res:express.Response){
        let result = await UserService.assignCardstoUser(req,res);
        res.json(result);
    }

    public async getUserByEmail(req: express.Request, res: express.Response) {
        let result = await UserService.getUserByEmail(req, res);
        res.json(result);
    }

    public async login(req: express.Request, res: express.Response) {
        let result = await UserService.login(req, res);
        res.json(result);
    }

    public async updateUserbyId(req: express.Request, res: express.Response) {
        let result = await UserService.updateUserbyId(req, res);
        res.json(result);
    }
}