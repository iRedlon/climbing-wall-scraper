
// imports
const axios = require("axios");
const cheerio = require("cheerio");
const login = require("facebook-chat-api")

// constants
const url = "https://scripts.mit.edu/~mitoc/wall/";
const control_text = "There are no hours posted at this time, check back soon!";

const fb_email = require("./config/fbconfig").email;
const fb_password = require("./config/fbconfig").password;

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

    // Create simple echo bot
    login({email: fb_email, password: fb_password}, (err, api) => {
        if(err) return console.error(err);

        api.sendMessage("I AM OPEN.", "100000230284341")

    });

}
