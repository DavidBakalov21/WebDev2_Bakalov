const geese = require("../data/geese");
const ducks = require("../data/ducks");
const hens = require("../data/hens");
let types = {
  "geese": geese,
  "ducks": ducks,
  "hens": hens,
};
function handlerTypeId(req, res) {
  const name = req.params.type;
  const ID = req.params.id;
  if (types[name]) {
    res.json(types[name].filter((obj) => obj.id == ID));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end("404 Not Found, type is wrong");
  }
}
module.exports = handlerTypeId;
