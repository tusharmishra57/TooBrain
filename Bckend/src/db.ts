import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

const contentSchema = new Schema({
    link: {type: String},
    type: {type: String}, 
    title: {type: String},
    tags: {},
    userId: {}
})

const tagsSchema = new Schema({
    title: {type: String}
})

const linkSchema = new Schema({
    hash: {type: String},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: 'true'}
})

export const userModel = mongoose.model("user", userSchema)


