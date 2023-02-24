import express from 'express';
import passport from 'passport';
import orders from '../../database/order';

const Router = express.Router();

/**
 * Method: get
 * route: /
 * purpose: get orders placed by user
 * params: none
 * Access: private
 */
Router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const user = req.user;
        const order = await orders.findOne({ user: user._id });
        if (!order) {
            return res.status(200).send({ message: "No orders for this user" });
        }
        return res.status(200).send(order);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
})

export default Router;