"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const userModel_1 = require("../models/userModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
class UserService {
    static registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let encryptedPassword = yield bcrypt_1.default.hash(req.body.password, 14);
                req.body.password = encryptedPassword;
                let newUser = new userModel_1.userModel(req.body);
                yield newUser.save();
                return newUser;
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userItem = yield userModel_1.userModel.findOne({ "email": req.body.email }).exec();
                if (userItem) {
                    let passwordMatch = yield bcrypt_1.default.compare(req.body.password, userItem.password);
                    if (passwordMatch) {
                        let options = { expiresIn: "2h" };
                        let payload = { "email": userItem.email, "name": userItem.name, "userId": userItem._id };
                        let token = yield jwt.sign(payload, "secret", options);
                        console.log("token generated is: " + token);
                        return { "token": token };
                    }
                    else {
                        return ("Password Incorrect");
                    }
                }
                else {
                    return ("User not registered by given Email");
                }
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
    static getAllUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allUsers = yield userModel_1.userModel.find().exec();
                return (allUsers);
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
    static getUserCards(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userCards = yield userModel_1.userModel.findById({ _id: req.user.userId }).populate('myCards').exec();
                return (userCards);
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
    static assignCardstoUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let assignedCards = yield userModel_1.userModel.update({ _id: req.user.userId }, req.body).exec();
                return (assignedCards);
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
    static getUserByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("name from query string: ", req.query.email);
                let userItem = yield userModel_1.userModel.findOne({ name: req.query.email }).exec();
                return (userItem);
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
    static updateUserbyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userItem = yield userModel_1.userModel.findById(req.params.userId).exec();
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
        });
    }
}
exports.UserService = UserService;
