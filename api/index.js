const express = require("express");
const route = express();
const user = require("./user/routes");
const news = require("./news/routes");
const tags = require("./tags/routes");

route.use("/user", user);
route.use("/news", news);
route.use("/tags", tags);

module.exports = route;
