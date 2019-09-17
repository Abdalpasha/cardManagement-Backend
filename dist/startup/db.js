"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Db {
    static connectToMongoDb() {
        mongoose_1.default.connect(this.connectionString, { useNewUrlParser: true })
            .then(() => { console.log("Db connection success"); })
            .catch(err => {
            console.log("Db connection failed");
            console.log(err);
        });
    }
    ;
}
Db.connectionString = "mongodb://localhost:27017/CardManagement";
exports.Db = Db;
;
