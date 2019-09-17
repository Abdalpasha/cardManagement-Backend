"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.cardSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    type: String,
    bank: { type: mongoose_1.default.SchemaTypes.ObjectId, ref: 'bank' },
    user: { type: mongoose_1.default.SchemaTypes.ObjectId, ref: 'user' }
});
exports.cardModel = mongoose_1.default.model("card", exports.cardSchema);
