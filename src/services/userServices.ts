import express from "express";
import { userModel } from "../models/userModel";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export class UserService {
    public static async registerUser(req: express.Request, res: express.Response) {
        try {
            let encryptedPassword = await bcrypt.hash(req.body.password, 14);
            req.body.password = encryptedPassword;
            let newUser = new userModel(req.body);
            await newUser.save();
            return newUser;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async login(req: express.Request, res: express.Response) {
        try {
            let userItem: any = await userModel.findOne({ "email": req.body.email }).exec();
            if (userItem) {
                let passwordMatch = await bcrypt.compare(req.body.password, userItem.password);
                if (passwordMatch) {
                    let options: jwt.SignOptions = { expiresIn: "2h" };
                    let payload = { "email": userItem.email, "name": userItem.name , "userId" : userItem._id};
                    let token = await jwt.sign(payload, "secret", options);
                    console.log("token generated is: " + token);
                    return { "token": token };
                } else {
                    return ("Password Incorrect");
                }
            } else {
                return ("User not registered by given Email")
            }
        }
        catch (err) {
            console.log(err);
            return (err);
        }
    }

    public static async getAllUser(req: express.Request, res: express.Response) {
        try {
            let allUsers = await userModel.find().exec();
            return (allUsers);
        } catch (err) {
            console.log(err);
            return (err);
        }
    }

    public static async getUserCards(req:any,res:express.Response){
        try{
            let userCards = await userModel.findById({_id: req.user.userId}).populate('myCards').exec();
            return (userCards);
        }
        catch(err){
            console.log(err);
            return (err);
        }
    }

    public static async assignCardstoUser(req:any,res:express.Response){
        try{
            let assignedCards = await userModel.update({_id:req.user.userId},req.body).exec();
            return (assignedCards);
        }
        catch(err){
            console.log(err);
            return(err);
        }
    }

    public static async getUserByEmail(req: express.Request, res: express.Response) {
        try {
            console.log("name from query string: ", req.query.email);
            let userItem = await userModel.findOne({ name: req.query.email }).exec();
            return (userItem);
        }
        catch (err) {
            console.log(err);
            return (err);
        }
    }

    public static async updateUserbyId(req: express.Request, res: express.Response) {
        try {
            let userItem: any = await userModel.findById(req.params.userId).exec();
            userItem.name = req.body.name;
            userItem.email = req.body.email;
            userItem.mobile = req.body.mobile;
            userItem.password = req.body.password;
            userItem.active = req.body.active;
            userItem.updatedDate = req.body.updatedDate;
            return userItem;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
}