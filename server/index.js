// Dependencies
var fs = require("fs");
var http = require("http");

const requestHandler = (request, response) => {
  console.log(request.url);
  response.writeHead(200, { "Content-Type": "text/html" });
  var file = fs.createReadStream("./frontend/index.html");
  file.pipe(response);
  // response.end("../frontend/index.html");
};

const server = http.createServer(requestHandler);
server.run = function(port) {
  server.listen(port, err => {
    if (err) {
      return console.log("something bad happened", err);
    }

    console.log(`server is listening on http://localhost:${port}`);
  });
};

module.exports = server;
