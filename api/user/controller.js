class UserController {
  async auth(req, res, next) {
    return res.json("/auth");
  }
  async login(req, res, next) {
    return res.json("/login");
  }
  async register(req, res, next) {
    return res.json("/regiter");
  }
}

module.exports = new UserController();
