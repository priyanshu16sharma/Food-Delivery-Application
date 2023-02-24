import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userDetails: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    orderDetails: [
        {
            food: [
                {
                    details: { type: mongoose.Types.ObjectId, ref: "foods" },
                    quantity: { type: Number, required: true },
                },
            ],
            paymode: { type: String, required: true },
            status: { type: String, default: "Placed" },
            paymentDetails: {
                itemTotal: { type: Number, required: true },
                promo: { type: Number, required: true },
                tax: { type: Number, require: true },
                razorpay_payment_id: { type: String, required: true },
            },
        },
    ],
}, {
    timestamps: true
})

const orders = mongoose.model("orders", orderSchema);
export default orders;