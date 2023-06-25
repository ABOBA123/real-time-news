const express = require("express");
const route = express();

const controller = require("./controller");

route.get("/", controller.getNews);
route.get("/:id", controller.getOneNews);

module.exports = route;
