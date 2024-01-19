const geese = require("../data/geese");
const ducks = require("../data/ducks");
const hens = require("../data/hens");

function handlerObj(req, res) {
  res.json(geese.concat(ducks, hens));
}
module.exports = handlerObj;
