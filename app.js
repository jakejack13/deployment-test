const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!\n');
}

const server = http.createServer(requestListener);
console.log(server.address());
server.listen(8080);