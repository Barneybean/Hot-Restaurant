//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = ("path");

// set up express 
var app = express();
var port = 7000;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

var tables =[];
var waitList=[];


app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/makeReservation", function (req, res){
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/viewTable", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"))
});


