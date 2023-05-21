const express = require("express");
const route = express();
const user = require("./user/routes");

route.use("/user", user);

module.exports = route;
