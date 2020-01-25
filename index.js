const config = require('./config.json');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(config.token);

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'search') {
        let searchString = '';
        args.forEach(element => searchString += element + ' ');
        fetch(`${config.api}/search.php?search=${searchString}`)
            .then(response => {
                return response.json();
            }).then(response => {
                if (response.length) {
                    const index = Math.floor(Math.random() * response.length);
                    message.channel.send(`${config.images}/${response[index]['img_path']}`)
                }
                else {
                    message.channel.send('Sorry, no results!');
                }
            });
    }
});