import mongoose from "mongoose";

export const cardSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    type: String,
    bank : {type:mongoose.SchemaTypes.ObjectId, ref : 'bank'},
    user : {type : mongoose.SchemaTypes.ObjectId, ref : 'user'}
})

export const cardModel = mongoose.model("card", cardSchema);