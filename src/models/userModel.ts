import mongoose, { SchemaTypes } from "mongoose";


export const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    mobile: String,
    password: String,
    active: Boolean,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default:Date.now },
    myCards : [{type: mongoose.SchemaTypes.ObjectId, ref : 'card'}],
    role : {type: String, enum:["user", "admin"], default: "user"}
});

export const userModel = mongoose.model("user", userSchema)