
// imports
const express = require("express");
const scrape = require("./scraper.js").scrape;
const startkeepalive = require("./pinger.js").startKeepAlive()


// constants
const port = process.env.PORT || 5000;
const app = express();


app.get("/", function(req, res) {
  res.send("MIT Climbing Wall Scraper");
});


app.listen(port);

startkeepalive
setInterval(scrape, 1000 * 60 * 5);



