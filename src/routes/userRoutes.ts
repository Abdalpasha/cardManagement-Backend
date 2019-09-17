import {userController} from "../controller/userController";
import {Router} from "express";

let userControllerObj = new userController();
export const userRoutes : Router = Router();

userRoutes.get('/', userControllerObj.getAllUsers);
userRoutes.get('/getUserByEmail', userControllerObj.getUserByEmail);
userRoutes.put('/update/:userId', userControllerObj.updateUserbyId);
userRoutes.get('/getUserCards', userControllerObj.getUserCards);
userRoutes.put('/assignCards', userControllerObj.assignCardstoUser);

