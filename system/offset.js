module.exports = {
  getRows: function (arr, page, size) {
    return arr.slice(page === 0 ? page : size * page, size);
  },
  getRowsFromReq: function (req, arr) {
    let { page, size } = req.params;

    page = page ? page - 1 : 0;
    size = size ? (size < 40 ? size : 20) : 20;

    return this.getRows(arr, page, size);
  },
  getById: function (req, arr) {
    const { id } = req.params;
    return arr.find((item) => item.id === id);
  },
};
