
// imports
const axios = require("axios");
const cheerio = require("cheerio");


// constants
const url = "https://scripts.mit.edu/~mitoc/wall/";
const control_text = "There are no hours posted at this time, check back soon!";


axios.get(url)
    .then(res => {
        console.log(handleRes(res));
    })
    .catch(err => {
        console.log(err);
    });


function handleRes(res) {
    const $ = cheerio.load(res.data);

    let text = $("table.timeline").text();

    if (control_text !== text) {
        // TODO: Add FB message
    }
}
