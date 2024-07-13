import foods from "../../database/food";
import express from "express";

const Router = express.Router();
/**
 * Method: post
 * route:/
 * purpose: creates new food route
 * params: none
 * Access: public 
 */
Router.post("/create", async (req, res) => {
    try {
        const foodObject = req.body;
        const food = await foods.create(foodObject);

        return res.status(200).send(food);
    } catch (error) {
        return res.status(200).send({ error: error.message });
    }
})




/**
 * Method: get
 * route: /:_id
 * purpose: get food item by id
 * params: id
 * Access: public 
 */
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const food = await foods.findById(_id);
        if (!food) {
            return res.status(200).json({ success: false, detail: "no data with this id exist" });
        }

        return res.status(200).send({ food });
    } catch (error) {
        return res.status(200).json({ error: error.message });
    }
})

/**
 * Method: get
 * route: /r/:_id
 * purpose: get food item by restaurant id
 * params: id
 * Access: public 
 */
Router.get("/r/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const food = await foods.find({ restaurant: _id, })

        if (!food) {
            return res.status(200).json({ success: false, detail: "No food related to passed params found" });
        }

        return res.status(200).json(food);
    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
})

/**
 * Method: get
 * route: /category/:category
 * purpose: get food item by category
 * params: category
 * Access: public 
 */
Router.get("/category/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const food = await foods.find({ category: { $regex: category, $options: "i" } });

        return res.status(200).json({ food });
    } catch (error) {
        return res.status(200).json({ error: error.message });
    }
})

export default Router;