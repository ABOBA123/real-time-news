const { users, SECRET_KEY_JWT } = require("../../ws");
const jwt = require("jsonwebtoken");

function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY_JWT, { expiresIn: "1h" });
}

class UserController {
  async auth(req, res, next) {
    const { id, email } = req.user;
    let token = generateToken({ id: id, email });
    return res.json(token);
  }
  async login(req, res, next) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json("Choose the fields");
    }

    let checkUser = users.find((user) => user.name === email);
    if (!checkUser) {
      return res.status(400).json("Not correct values");
    }

    if (checkUser.password !== password) {
      return res.status(400).json("Not correct values");
    }

    let token = generateToken({ id: checkUser?.id, email });

    return res.json(token);
  }
  async register(req, res, next) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json("Choose the fields");
    }

    console.log(users);

    let checkUser = users.find((user) => user.name === email);
    if (checkUser) {
      return res.status(400).json("Email is exists");
    }

    users.push({ id: users.length, name: email, password: password });

    return res.status(200).json("Registered!");
  }
}

module.exports = new UserController();
