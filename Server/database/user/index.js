import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcryptjs";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, required: true },
    address: [{ detail: { type: String }, for: { type: String } }],
    password: { type: String, required: true },
}, {
    timestamps: true,
});

userSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "ZomatoApp");
};

userSchema.statics.findUserByEmailAndPhoneNumber = async ({ email, phoneNumber }) => {
    const usersbyemail = await users.findOne({ email });
    const usersbyphone = await users.findOne({ phoneNumber });

    if (usersbyemail || usersbyphone) { throw new Error("User Already Exist"); }

    return usersbyphone;
}

userSchema.statics.findUserByEmailAndPassword = async ({ email, password }) => {
    try {
        console.log(email + " " + password);
        const user = await users.findOne({ email });
        if (!user) throw new Error("User Doesnt Exist");
        const doespasswordmatch = bcrypt.compare(password, user.password);
        if (!doespasswordmatch) throw new Error("Enter valid credentials...");
        return user;
    } catch (error) {
        return res.status(200).send({ error: error.message });
    }
}

userSchema.pre("save", function (next) {
    const user = this;
    console.log(user);
    //if (!user.isModified('password')) { return next(); }
    console.log("apple" + user);
    bcrypt.genSalt(8, async (error, salt) => {
        if (error) { return next(error); }

        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) { return next(error) }

            user.password = hash;
            return next();
        })
    })
})


const users = mongoose.model("users", userSchema);
export default users;