const express = require("express");
const route = express();

const controller = require("./controller");
const auth = require("../middlewares/auth");

route.post("/register", controller.register);
route.post("/login", controller.login);
route.post("/auth", auth, controller.auth);

module.exports = route;
