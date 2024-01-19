const sendPage = require("./sends/sendPage");
function handlerDemo2(req, res) {
  sendPage(req, res, "./assets/demo2.html");
}
module.exports = handlerDemo2;
