import mongoose from "mongoose";
import { Schema } from "mongoose";
const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});
const contentSchema = new Schema({
    link: { type: String },
    type: { type: String },
    title: { type: String },
    tags: {},
    userId: {}
});
const tagsSchema = new Schema({});
export const userModel = mongoose.model("user", userSchema);
//# sourceMappingURL=db.js.map