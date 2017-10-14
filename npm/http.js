// var http = require('http');
// var port = 3000;

// var server = http.createServer(function (request, response) {
//   return response.end('Hello World!');
// });

// server.listen(port);

// or even:

require('http').createServer((request, response) => response.end('hello world!')).listen(3000);