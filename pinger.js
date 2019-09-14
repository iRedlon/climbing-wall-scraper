
// imports
const http = require("http");


function keepAlive() {
    setInterval(function() {
        let options = {
            host: "evening-lowlands-46615.herokuapp.com",
            port: 80,
            path: "/"
        };

        http.get(options, function(res) {
            res.on("data", function(chunk) {
                try {
                    console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on("error", function(err) {
            console.log("Error: " + err.message);
        });
    }, 1000 * 60 * 20);
}


module.exports = {
    keepAlive: keepAlive
};