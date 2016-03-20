var express = require('express');
var app = express();

const motivations = require('motivations');

const pickOne = require('pick-one');
app.get('/', function(request,response){
	response.send("May the force be with you!!");
});


app.get('/hello', function(request,response){
	response.send(pickOne(motivations));
});
module.exports=app;
