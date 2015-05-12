// requires
var express = require('express');
var crypto = require('crypto');

// initialize
var PORT = process.argv[2];
var app = express();

// lets go
app.put('/message/:id', function(req, res){
    console.log(req.params.id);
    
    res.end(
        crypto.
        createHash('sha1').
        update(new Date().toDateString() + req.params.id).
        digest('hex')
    );
});

app.listen(PORT);
