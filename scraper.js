const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://scripts.mit.edu/~mitoc/wall/';

const control_text = 'There are no hours posted at this time, check back soon!';


axios.get(url)
    .then(response => {
    console.log(getData(response.data));
})
    .catch(error => {
    console.log(error);
})

function handle_response(html) {
    const $ = cheerio.load(html);
    let text = "";
    $('table.timeline').each((i, elem) => {
        text = $(elem).text()
    })
    if(control_text !== text){
        send_matt_message.now()
    }
}
