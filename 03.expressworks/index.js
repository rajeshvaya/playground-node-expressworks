// requires
var path = require('path');
var express = require('express');
var app = express();

// initialize
var PORT = process.argv[2];
var VIEWS_PATH = process.argv[3];
app.set('views', VIEWS_PATH || path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

// lets go
app.use('/home', function(req, res){
    res.render('index', {date: new Date().toDateString()});
});
app.listen(PORT);
