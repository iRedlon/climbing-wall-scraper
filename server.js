
// imports
const express = require("express");
const scraper = require("./scraper.js");


// constants
const port = process.env.PORT || 5000;
const app = express();


app.get("/", function(req, res) {
  res.send("MIT Climbing Wall Scraper");
});


app.listen(port);


