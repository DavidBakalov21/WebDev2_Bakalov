const fs = require("fs");
function sendSound(req, res, path) {
  fs.readFile(path, function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "audio/mpeg" });
    res.write(data);
    console.log("sound");
    return res.end();
  });
}
module.exports = sendSound;
