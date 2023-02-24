import express from "express";
import DBconnect from "./database/connection";
import dotenv from "dotenv";
import auth from "./api/auth"
import restaurant from "./api/restaurant"
import passport from "passport";
import session from "express-session";
import bodyParser from "body-parser";
import privateRouteConfig from "./config/routeConfig";
import user from "./api/user";

privateRouteConfig(passport);


dotenv.config();
const app = express();

app.use(session({ secret: "ZomatoApp" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(bodyParser.json());

app.use("/user", user);
app.use("/auth", auth);
app.use("/r", restaurant);
const port = 8081;
app
    .get("/", (req, res) => {
        res.status(200).send({ data: "here" });
    })
    .listen(port, () => {
        //console.log("Server is up and running");
        DBconnect()
            .then(() => {
                console.log("Server is up and running");
            })
            .catch((error) => {
                console.log("Connection failed...");
                console.log(error.message);
            })
    })