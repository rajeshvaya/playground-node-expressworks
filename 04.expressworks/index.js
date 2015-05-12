// requires
var express = require('express');
var stylus = require('stylus');
var bodyParser = require('body-parser');
var app = express();

// initialize
var PORT = process.argv[2];
app.use(bodyParser.urlencoded({extended: false}));


// lets go
app.post('/form', function(req, res){
    res.end(req.body.str.split('').reverse().join(''));
});
app.listen(PORT);
