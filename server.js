
// imports
const express = require("express");
const scrape = require("./scraper.js").scrape;


// constants
const port = process.env.PORT || 5000;
const app = express();


app.get("/", function(req, res) {
  res.send("MIT Climbing Wall Scraper");
});


app.listen(port);


setInterval(scrape, 1000 * 60 * 5);


