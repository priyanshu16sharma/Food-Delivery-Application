import { restaurants } from "../../database/allModels"
import express from "express";

const Router = express.Router();

/**
 * Method: get
 * route:/:_id
 * purpose: get restaurant based on id
 * params: _id
 * Access: public 
 */
Router.get("/:_id", (req, res) => {
    try {
        const { _id } = req.params;
        const restaurant = restaurants.findById(_id);
        res.status(200).json({ restaurant });
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
Router.get("/", (req, res) => {
    try {
        const { city } = req.query;
        const result = restaurants.find({ city });
        return res.status(200).json({ result });
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
Router.get("/search/:searchString", (req, res) => {
    try {
        const searchString = req.params.searchString;
        const restaurant = restaurants.find({ name: { $regex: searchString, $option: "i" } })
        return res.status(200).json({ restaurant });
    } catch (error) {
        return res.status(200).json({ error: error.message });
    }
})

export default Router;