const offset = require("../../system/offset");
const { news, tags: tagsDB } = require("../../ws");

class NewsController {
  async getNews(req, res, next) {
    let { tags } = req.query;
    if (tags) {
      try {
        JSON.parse(tags);
      } catch (err) {
        return res.json(offset.getRowsFromReq(req, news));
      }
      tags = JSON.parse(tags);
      let filtered = [];
      for (let tag of tags) {
        let finded = tagsDB.find((check) => check.title === tag);
        if (finded) {
          !filtered[finded.id] && filtered.push(finded.id);
        }
      }

      return res.json(
        offset.getRowsFromReq(
          req,
          news.filter((item) => filtered.find((check) => check === item.tagId))
        )
      );
    }
    return res.json(offset.getRowsFromReq(req, news));
  }
  async getOneNews(req, res, next) {
    let obj = offset.getById(req, news);
    if (!obj) {
      return res.status(404).json({ message: "PAGE_NOT_FOUND" });
    }
    return res.json(obj);
  }
}

module.exports = new NewsController();
