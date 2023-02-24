import mongoose from "mongoose";
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    images: [{
        location: {
            type: String, required: true,
        }
    }]
}, {
    timestamps: true
})

const images = mongoose.model("images", imageSchema);
export default images;