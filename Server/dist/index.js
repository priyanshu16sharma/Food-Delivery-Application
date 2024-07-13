"use strict";

var _express = _interopRequireDefault(require("express"));
var _connection = _interopRequireDefault(require("./database/connection"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _auth = _interopRequireDefault(require("./api/auth"));
var _restaurant = _interopRequireDefault(require("./api/restaurant"));
var _passport = _interopRequireDefault(require("passport"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _routeConfig = _interopRequireDefault(require("./config/routeConfig"));
var _user = _interopRequireDefault(require("./api/user"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _routeConfig.default)(_passport.default);
_dotenv.default.config();
const app = (0, _express.default)();
app.use((0, _expressSession.default)({
  secret: "ZomatoApp"
}));
app.use(_passport.default.initialize());
app.use(_passport.default.session());
app.use(_express.default.json());
app.use(_bodyParser.default.json());
app.use("/user", _user.default);
app.use("/auth", _auth.default);
app.use("/r", _restaurant.default);
const port = 8081;
app.get("/", (req, res) => {
  res.status(200).send({
    data: "here"
  });
}).listen(port, () => {
  //console.log("Server is up and running");
  (0, _connection.default)().then(() => {
    console.log("Server is up and running");
  }).catch(error => {
    console.log("Connection failed...");
    console.log(error.message);
  });
});