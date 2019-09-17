import express, { response } from "express";
import { userRoutes } from "../routes/userRoutes"
import { AuthenticateService } from "../middleware/authenticate";
import { userController } from "../controller/userController";
import { cardRoutes } from "../routes/cardRoutes";
import { bankRoutes } from "../routes/bankRoutes";
// import { request } from "http";

export class Routes {
  constructor() {
  }
  public static configRoutes(app: express.Application): void {
    app.get('/', (req: express.Request, res: express.Response) => {
      res.status(200).json({ "Success": "Server is running" })
    });
    let userControllerObj = new userController();
    app.post('/register', userControllerObj.registerUser);
    app.post('/login', userControllerObj.login);
    // app.get('/myForm', (req,res)=>{
    //   res.send(
    //   `<html>
    //   <body>
    //   <form action = "/submitform" method = "post">
    //   <input type="text" name="" value="">
    //   <input type="submit">
    //   </form>
    //   </html>`  
    //   )
    // });
    // app.post('/submitform', (req,res)=>{
    //   console.log(req.body)
    //   res.send("form sent successfully")
    // });
    app.use(AuthenticateService.authenticate);
    app.use('/user', userRoutes);
    app.use('/card', cardRoutes);
    app.use('/bank', bankRoutes);
  }

}