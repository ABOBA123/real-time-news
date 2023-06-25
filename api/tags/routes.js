const express = require("express");
const route = express();

const controller = require("./controller");

route.get("/", controller.getTags);

module.exports = route;
