var express = require("express");
var app = express();
var port = process.eventNames.port || 8000;

app.get('/', function(req, res){
    res.status(200).send("Hello World!");
});

app.get('/test', function(req, res){
    // talk to database
    // format the data
    // respond back
});

var server = app.listen(port, function () {
    console.log('node server is just fine! and running on port - ' + port);
});