// requires
var express = require('express');
var fileUtils = require('./fileUtils');

// initialize
var PORT = process.argv[2];
var FILENAME = process.argv[3] || 'sample.txt';
var app = express();

// lets go
app.all('/books', function(req, res){
    fileUtils.readFile(FILENAME, function(err, data){
        if(err)
            res.send(JSON.parse(err));
        else
            res.send(JSON.parse(data));
    });
});
app.listen(PORT);
