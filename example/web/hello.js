'use strict';

//loading http module
var http = require('http');

//creating http server
var server = http.createServer(function (req, res) {
	res.writeHead(200);
	res.write('Hello World!');
	res.end();
});

//server listening at port 3000
server.listen(3000);

//debug message
console.log("Server running at http://localhost:3000/");

