// requires
var express = require('express');
var app = express();

// lets go
app.get('/home', function(req, res){
    res.end('Hello World!');
});

app.listen(process.argv[2]);
