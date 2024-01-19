const sendPage = require("./sends/sendPage");
function handlerDemo(req, res) {
  sendPage(req, res, "./assets/demo.html");
}

module.exports = handlerDemo;
