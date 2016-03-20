var express = require('express');
var app = express();

app.get('/', function(request,response){
	response.send("May the force be with you!!");
});

app.get('/hello', function(request,response){
	response.send("hello");
});
module.exports=app;