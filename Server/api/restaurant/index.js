import restaurants from "../../database/restaurant"
import express from "express";

const Router = express.Router();

/**
 * Method: post
 * route:/create
 * purpose: post a new restaurant
 * params: none
 * Access: public 
 */
Router.post("/create", async (req, res) => {
    const restaurant = req.body;
    const newRestaurant = await restaurants.create(restaurant);
    res.status(200).send(newRestaurant);
})

/**
 * Method: get
 * route:/:_id
 * purpose: get restaurant based on id
 * params: _id
 * Access: public 
 */
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const restaurant = await restaurants.findById(_id);
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(200).json({ error: error.message });
    }
})

/**
 * Method: get
 * route:/
 * purpose: get restaurants in a particular city
 * params: none
 * query: ?city=ahmedabad
 * Access: public 
 */
Router.get("/", async (req, res) => {
    try {
        const { city } = req.query;
        console.log(city);
        const result = await restaurants.find({ city: city });
        console.log(result);
        if (restaurants.length === 0) {
            return res
                .status(404)
                .json({ error: "No restaurant found in this city." });
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(200).json({ error: error.message });
    }
})

/**
 * Method: get
 * route:/search/:searchString
 * purpose: get restaurants by search
 * params: none
 * Access: public 
 */
Router.get("/search/:searchString", async (req, res) => {
    try {
        const searchString = req.params.searchString;
        const restaurant = await restaurants.find({ name: { $regex: searchString, $options: "i" } })
        return res.status(200).json({ restaurant });
    } catch (error) {
        return res.status(200).json({ error: error.message });
    }
})

export default Router;