// requires
var express = require('express');

// initialize
var PORT = process.argv[2];
var app = express();

// lets go
app.get('/search', function(req, res){
    res.send(req.query)    
});

app.listen(PORT);
