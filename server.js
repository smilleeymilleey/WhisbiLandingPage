
const http = require('http');
const fs = require('fs');
var static = require('node-static');

const hostname = '127.0.0.1';
const port = 3000;


var file = new(static.Server)(__dirname);

const server = http.createServer((req, res) => {

  file.serve(req, res);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});