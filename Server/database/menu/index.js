import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: { type: String, required: true },
    items: [{
        type: mongoose.Types.ObjectId, ref: "foods"
    }],
    recommnded: [{
        type: mongoose.Types.ObjectId,
        ref: "foods",
        unique: true,
    }]
}, {
    timestamps: true
})

const menus = mongoose.model("menus", menuSchema);
export default menus;