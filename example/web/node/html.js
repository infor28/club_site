'use strict';

//loading modules
var fs = require('fs');
var http = require('http');

//reading html file
fs.readFile('index.html', function(err, data) {

	if(err) throw err;		//handling error

	//creating http server
	var server = http.createServer(function(req, res) {

		//sending response header
		res.writeHead(200, {
			'Content-Length': data.length,
			'Content-Type': 'text/html'
		});
		res.write(data);	//sending response body
		res.end();			//ending response

	});

	server.listen(3000);	//listening at port 3000

	console.log("Server running at http://localhost:3000/");

});

