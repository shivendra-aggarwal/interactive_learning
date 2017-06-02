var http = require("http");
var express = require("express");
var app = express();

app.get("/",function(req,res){
	res.send("<html><body><h1>Express Js</h1></body></html>")
});

app.get("/api/users",function(req,res){
	res.set("Content-Type","application/json");
	res.send({ name: "Shawn", isValid: true, group: "Admin"});
})

//Basic server creation
//var server = http.createServer(function(req,res){
//	console.log(req.url);
//	res.write("<html><body><h1>"+req.url+"</h1></body></html>");
//	res.end();
//});

var server = http.createServer(app);

server.listen(3000);