import {CardController} from "../controller/cardController";
import {Router} from "express";

let cardControllerObject = new CardController();
export const cardRoutes : Router = Router();

cardRoutes.post('/createCard', cardControllerObject.createCard);
cardRoutes.get('/', cardControllerObject.getAllCards);
cardRoutes.get('/:cardId', cardControllerObject.getCardbyId);
cardRoutes.put('/update/:cardId', cardControllerObject.updateCardbyId);
