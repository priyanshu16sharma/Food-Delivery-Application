import express from "express";
import passport from "passport";
import users from "../../database/user";
const Router = express.Router();

/**
 * Method: get
 * route: /user
 * purpose: get user based on passed token
 * params: none
 * Access: public 
 */
Router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    try {

        const { email, name, phoneNumber, address } = req.user;
        return res.status(200).json({ user: { email, name, phoneNumber, address } });
    } catch (error) {

        return res.status(200).send({ error: error.message });
    }
})

/**
 * Method: get
 * route: /user/:_id
 * purpose: get user based on id
 * params: _id
 * Access: public 
 */
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const user = await users.findById(_id);
        const { name } = user;
        if (!user) { res.status(200).send({ error: "no such user id found" }) };
        return res.status(200).send(name);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
})

/**
 * Method: put
 * route: /user/:_id
 * purpose: update user by id
 * params: _id
 * Access: private
 */
Router.put("/update/:_userId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const _id = req.params._userId;
        const userData = req.body.userData;
        userData.password = undefined;

        const updatedData = await users.findByIdAndUpdate(_id, { $set: userData }, { new: true });
        if (!updatedData) { res.status(200).send({ error: "couldnt update data" }) };
        return res.status(200).send(updatedData);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
})


export default Router;