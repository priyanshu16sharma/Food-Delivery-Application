import express from 'express';
import menus from '../../database/menu';
import images from '../../database/images';

const Router = express.Router();

/**
 * Method: post
 * route: /add
 * purpose: post a menu
 * params: none
 * Access: public 
 */
Router.post("/create", async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const menu = await menus.create(data);
        return res.status(200).send(menu);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
})

/**
 * Method: get
 * route: /:_id
 * purpose: get menu based on id
 * params: id
 * Access: public 
 */
Router.get("/list/:_id", async (req, res) => {
    try {
        const _id = req.params._id;
        const menu = await menus.findById(_id);
        if (!menu) {
            return res.status(200).send({ error: "no menu with this id exists" });
        }

        return res.status(200).send(menu);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
})

/**
 * Method: get
 * route: /:_id
 * purpose: get images based on id
 * params: id
 * Access: public 
 */
Router.get("/image/:_id", async (req, res) => {
    try {
        const _id = req.params._id;
        const image = await images.findById(_id);
        if (!image) {
            return res.status(200).send({ error: "no menu with this id exists" });
        }

        return res.status(200).send(image);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
})
export default Router;