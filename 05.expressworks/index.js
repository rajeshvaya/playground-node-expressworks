// requires
var express = require('express');
var path = require('path');
var stylus = require('stylus');
var app = express();

// lets go
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);

