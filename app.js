var express = require("express");

var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res) {
    res.render("index");
})

app.get("/login", function(req,res){
    res.render("login");
})

app.post("/", function(req,res){
    res.render("form");
})


app.listen(8080);
