var express = require("express");
var app = express();
var port = process.eventNames.port || 8000;

app.get('/', function(req, res){
    res.status(200).send("Hello World!");
});

var server = app.listen(port, function () {
    console.log('node server is just fine! and running on port - ' + port);
});