"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
class AuthenticateService {
    static authenticate(req, res, next) {
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
    static authorize(req, res, next) {
    }
}
exports.AuthenticateService = AuthenticateService;
