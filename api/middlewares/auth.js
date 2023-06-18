const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY_JWT } = require("../../ws");

module.exports = async function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Не авторизован" });
    }
    const decoded = jwt.verify(token, SECRET_KEY_JWT);
    if (!decoded) {
      return res.status(401).json({ message: "Не авторизован" });
    }

    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: "Не авторизован" });
  }
};
