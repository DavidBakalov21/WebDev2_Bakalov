const express = require("express");
const cors = require("cors");
const handlerImg = require("./handlers/handlerImg");
const handlerDemo = require("./handlers/handlerDemo");
const handlerDemo2 = require("./handlers/handlerDemo2");
const handlerSound = require("./handlers/handlerSound");
const handlerFile = require("./handlers/handlerFile");
const handlerJSON = require("./handlers/handlerInfo");
const handlerType = require("./handlers/handlerType");
const handlerTypeId = require("./handlers/handlerTypeId");
const handlerObj = require("./handlers/handlerObj");
const handlerNotFound = require("./handlers/handlerNotFound");
const app = express();
const port = 1000;
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:1000",
];
const corsOptions = {
  origin: originFunction,
};

function originFunction(origin, callback) {
  if (whitelist.includes(origin) || !origin) {
    callback(null, true);
  } else {
    callback(new Error("Not allowed by CORS"));
  }
}
app.use(cors(corsOptions));
//const dir =fs.readdirSync('./')
//console.log(dir);
app.get("/file/:filename", handlerFile); //ok
app.get("/demo", handlerDemo); //ok
app.get("/demo2", handlerDemo2); //ok
app.get("/img", handlerImg); //ok
app.get("/sound", handlerSound); //ok
app.get("/objects/:type", handlerType); //ok
app.get("/objects/:type/:id", handlerTypeId); //ok
app.get("/objects", handlerObj); //ok
app.get("/info", handlerJSON); //ok
app.get("/*", handlerNotFound); //ok
app.listen(port, () => {
  console.log("listens");
});
