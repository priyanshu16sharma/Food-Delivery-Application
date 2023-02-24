"use strict";

var _express = _interopRequireDefault(require("express"));
var _connection = _interopRequireDefault(require("./database/connection"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _auth = _interopRequireDefault(require("./api/auth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const app = (0, _express.default)();
app.use(_express.default.json());
app.use("/auth", _auth.default);
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