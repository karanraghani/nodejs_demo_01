var port='8080';
var host='0.0.0.0';

var express = require('express');
var app=express();//returns instance of express

app.use(require('./app/index.js')) // or '/app' as it looks for index.js  

app.listen(port,host);
console.log("server is listening");
