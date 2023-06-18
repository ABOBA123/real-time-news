require("dotenv").config();

const express = require("express");
const app = express();
let expressWsInstance = require("express-ws")(app);

const ws = require("./ws");

const api = require("./api/index");
const PORT = process.env.MAIN_PORT || 8080;

app.use(express.json());
app.use("/api", api);
ws.init(app);

app.listen(PORT, () => {
  console.log("server started on => " + PORT + " port");
});
