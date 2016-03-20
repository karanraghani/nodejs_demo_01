var express = require('express');
var app = express();

const motivations = require('motivations');

app.get('/', function(request,response){
	response.send("May the force be with you!!");
});

app.get('/hello', function(request,response){
	response.send(motivations[1]);
});
module.exports=app;
