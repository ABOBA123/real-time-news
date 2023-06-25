const offset = require("../../system/offset");
const { tags } = require("../../ws");

class TagsController {
  async getTags(req, res, next) {
    return res.json(offset.getRowsFromReq(req, tags));
  }
  async getOneTag(req, res, next) {
    return res.json(offset.getById(req, tags));
  }
}

module.exports = new TagsController();
