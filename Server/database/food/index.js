import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        descript: { type: String, required: true },
        isVeg: { type: Boolean, required: true },
        isContainsEgg: { type: Boolean, required: true },
        category: { type: String, required: true },
        photos: {
            type: mongoose.Types.ObjectId,
            ref: "images",
        },
        price: { type: String, default: 150, required: true },
        addOns: [
            {
                type: mongoose.Types.ObjectId,
                ref: "foods",
            },
        ],
        restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "restaurants",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const foods = mongoose.model("foods", FoodSchema);
export default foods;