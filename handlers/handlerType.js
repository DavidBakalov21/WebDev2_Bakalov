const geese = require("../data/geese");
const ducks = require("../data/ducks");
const hens = require("../data/hens");
let types = {
  "geese": geese,
  "ducks": ducks,
  "hens": hens,
};
function handlerType(req, res) {
  const name = req.params.type;
  if (types[name]) {
    res.json(types[name]);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end("404 Not Found, type is wrong");
  }
}
module.exports = handlerType;
