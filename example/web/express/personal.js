'use strict';

var express = require('express');

var app = express();

app.use(express.static('static'));

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/index.html', function() {
		res.end();
	});
});

app.listen(3000);

