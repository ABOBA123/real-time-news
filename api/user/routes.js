const express = require("express");
const route = express();

const controller = require("./controller");

route.post("/auth", controller.auth);
route.post("/login", controller.login);
route.post("/register", controller.register);

module.exports = route;
