import mongoose from "mongoose";

export const bankSChema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    active: Boolean
});

export const bankModel = mongoose.model("bank", bankSChema);
