require("dotenv").config();

const express = require("express");
const app = express();

const api = require("./api/index");
const PORT = process.env.MAIN_PORT || 8080;

app.use("/api", api);

app.listen(PORT, () => {
  console.log("server started on => " + PORT + " port");
});
