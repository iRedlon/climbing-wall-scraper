
// imports
const express = require("express");


// constants
const port = process.env.PORT || 5000;
const app = express();


// config
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
  res.send("MIT Climbing Wall Scraper");
});


app.listen(port);
