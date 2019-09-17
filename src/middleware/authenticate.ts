import * as jwt from "jsonwebtoken";
import * as express from "express";

export class AuthenticateService {
    public static authenticate(req: any, res: express.Response, next: any) {
        let token = req.header("Authorization");
        if (token == null) {
            res.json("Access Denied");
        }
        try {
            let decodedData = jwt.verify(token, "secret");
            req.user = decodedData;
            next();
        }
        catch (err) {
            console.log(err);
            return (err);
        }
    }

    public static authorize(req:any, res:express.Response,next:any){
        
    }
}