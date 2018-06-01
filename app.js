//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// set up express 
var app = express();
var PORT = 7000;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

var tables =[];
var waitList=[];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/reserve", function (req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.post("api/reservations", function(req, res) {
    var newReservation = res.body; //this is the new reservation obj
    
})

