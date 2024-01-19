const fs = require("fs");
function sendImg(req, res, path) {
  fs.readFile(path, function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(data);
    console.log("img");
    return res.end();
  });
}
module.exports = sendImg;
