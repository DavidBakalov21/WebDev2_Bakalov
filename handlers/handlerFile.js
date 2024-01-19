const sendImg = require("./sends/sendImg");
const sendPage = require("./sends/sendPage");
const sendSound = require("./sends/sendSound");
const sendTxt = require("./sends/sendText");
function handlerText(req, res) {
  const name = req.params.filename;
  let nameModified = "./assets/" + name;
  console.log(nameModified);
  const type = name.split(".")[1];
  console.log(type);
  if (type == "html") {
    sendPage(req, res, nameModified);
  } else if (type == "txt") {
    sendTxt(req, res, nameModified);
  } else if (type == "png") {
    sendImg(req, res, nameModified);
  } else if (type == "mp3") {
    sendSound(req, res, nameModified);
  }else{
    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end("404 Not Found");
  }
}
module.exports = handlerText;
