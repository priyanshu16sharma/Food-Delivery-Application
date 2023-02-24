import users from "../../database/user";
import express from "express";
const Router = express.Router();

Router.post("/signup", async (req, res) => {
    try {
        await users.findUserByEmailAndPhoneNumber(req.body.credentials);
        const newUser = await users.create(req.body.credentials);
        console.log(newUser + " " + newUser._id);
        const token = newUser.generateJwtToken();

        return res.status(200).json({
            token: token,
            success: true
        })
    } catch (error) {
        res.status(501).json({ error: error.message });
    }

})

Router.post("/signIn", async (req, res) => {
    try {
        const user = await users.findUserByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        return res.status(200).json({ user: "Welcome " + user.name, token: token });
    } catch (error) {
        return res.status(200).send({ error: error.message });
    }
})

Router.post("/lolu", (req, res) => {
    console.log(req.body);
    return res.status(200).send({ state: "Ok" });
})

export default Router;