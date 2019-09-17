import{BankController}from "../controller/bankController";
import {Router} from "express";

let bankControllerObj = new BankController();
export const bankRoutes : Router = Router();

bankRoutes.post('/createBank', bankControllerObj.createBank);
bankRoutes.get('/' , bankControllerObj.getAllBanks);
bankRoutes.get('/getByName', bankControllerObj.getBankByName);
bankRoutes.put('/update/:bankId', bankControllerObj.updateBank);