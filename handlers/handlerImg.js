const sendImg = require("./sends/sendImg");
function handlerImg(req, res) {
  sendImg(req, res, "./assets/frog.png");
  console.log("img")
}
module.exports = handlerImg;
