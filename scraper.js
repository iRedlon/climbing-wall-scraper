
// imports
const axios = require("axios");
const cheerio = require("cheerio");
const login = require("facebook-chat-api");


// constants
const url = "https://scripts.mit.edu/~mitoc/wall/";
const fb_email = require("./config/fbconfig").email;
const fb_password = require("./config/fbconfig").password;
const control_text = "There are no hours posted at this time, check back soon!";


// globals
let current_text = "";


function scrape() {
    axios.get(url)
        .then(res => {
            handleRes(res);
        })
        .catch(err => {
            console.log(err);
        });
}

function handleRes(res) {
    const $ = cheerio.load(res.data);

    let table_text = $("table.timeline").text();

    if (table_text !== current_text && table_text !== control_text)
    {
        let name = $("div.entry.open div.name").text();
        let time = $("div.entry.open div.time").text();

        login({email: fb_email, password: fb_password}, (err, api) => {
            if (err) return console.error(err);

            let message = `I'm open! ${name} is here from ${time}`;
            api.sendMessage(message, "100000230284341");
            current_text = table_text;
        });
    }
}


module.exports = {
    scrape: scrape
};
