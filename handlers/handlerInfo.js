function handlerJSON(req, res) {
  const jsonData = {
    "endpoints": [
     
      {
        "path": "/demo",
        "method": "GET",
        "description": "sends demonstration html page number 1",
      },
      {
        "path": "/demo2",
        "method": "GET",
        "description": "sends demonstration html page number 2",
      },
      {
        "path": "/img",
        "method": "GET",
        "description": "sends image with smoking frog",
      },
      {
        "path": "/file/:filename",
        "method": "GET",
        "description": "sends any file (demo.html, demo2.html, frog.png, sl.mp3, text1.txt, text2.txt)",
        "query_parameters": "Specify in the query filename parameter",
      },
      {
        "path": "/objects/:type",
        "method": "GET",
        "description": "sends all objects of desired type (ducks, geese, hens)",
        "query_parameters": "Specify in the query type parameter",
      },
      {
        "path": "/objects/:type/:id",
        "method": "GET",
        "description": "sends all objects of desired type and id (ducks, geese, hens) , possible ids (1,2)",
        "query_parameters": "Specify in the query parameters id and type",
      },
      {
        "path": "/objects",
        "method": "GET",
        "description": "sends all objects",
      },
      {
        "path": "/slack",
        "method": "GET",
        "description": "sends sound from slack",
      }
    ]
  };
  res.json(jsonData);
}
module.exports = handlerJSON;
