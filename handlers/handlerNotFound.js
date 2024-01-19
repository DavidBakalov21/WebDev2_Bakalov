function handlerNotFound(req, res) {
  res.writeHead(404, { "Content-Type": "text/html" });
  return res.end("404 Not Found");
}
module.exports = handlerNotFound;
