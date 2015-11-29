'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send(req.query);
	res.end();
});

app.post('/', function(req, res) {
	req.pipe(res);
});

app.listen(3030);

