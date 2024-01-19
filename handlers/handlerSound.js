const sendSound = require("./sends/sendSound");
function handlerSound(req, res) {
  sendSound(req, res, "./assets/sl.mp3");
}
module.exports = handlerSound;
