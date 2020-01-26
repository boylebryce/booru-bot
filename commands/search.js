const fetch = require('node-fetch');
const config = require('../config.json');

module.exports = {
    name: 'search',
    description: 'Search booru database for images with specified tags, and return a random result',
    execute(message, args) {
        let searchString = '';
        args.forEach(element => searchString += element + ' ');
        fetch(`${config.api}/search.php?search=${searchString}`)
            .then(response => {
                return response.json();
            }).then(response => {
                if (response.length) {
                    const index = Math.floor(Math.random() * response.length);
                    message.channel.send(`${config.images}/${response[index]['img_path']}`);
                }
                else {
                    message.reply('Sorry, no results!');
                }
            });
    },
};