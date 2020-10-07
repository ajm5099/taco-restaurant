// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Taco Restaurant");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
