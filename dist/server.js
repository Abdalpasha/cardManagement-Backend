"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyparser = __importStar(require("body-parser"));
const db_1 = require("./startup/db");
const routes_1 = require("./startup/routes");
class UserApp {
    constructor() {
        this.app = express_1.default();
        this.app.listen(3000, 'localhost', (req, res) => {
            console.log("server is started and running on port 3000");
        });
        this.configBodyParser();
        routes_1.Routes.configRoutes(this.app);
        db_1.Db.connectToMongoDb();
    }
    configBodyParser() {
        //code to view the Body
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: false }));
    }
}
exports.userApp = new UserApp();
