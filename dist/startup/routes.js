"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = require("../routes/userRoutes");
const authenticate_1 = require("../middleware/authenticate");
const userController_1 = require("../controller/userController");
const cardRoutes_1 = require("../routes/cardRoutes");
const bankRoutes_1 = require("../routes/bankRoutes");
// import { request } from "http";
class Routes {
    constructor() {
    }
    static configRoutes(app) {
        app.get('/', (req, res) => {
            res.status(200).json({ "Success": "Server is running" });
        });
        let userControllerObj = new userController_1.userController();
        app.post('/register', userControllerObj.registerUser);
        app.post('/login', userControllerObj.login);
        app.get('/myForm', (req, res) => {
            res.send(`<html>
      <body>
      <form action = "/submitform" method = "post">
      <input type="text" name="" value="">
      <input type="submit">
      </form>
      </html>`);
        });
        app.post('/submitform', (req, res) => {
            console.log(req.body);
            res.send("form sent successfully");
        });
        app.use(authenticate_1.AuthenticateService.authenticate);
        app.use('/user', userRoutes_1.userRoutes);
        app.use('/card', cardRoutes_1.cardRoutes);
        app.use('/bank', bankRoutes_1.bankRoutes);
    }
}
exports.Routes = Routes;
