module.exports = {
    name: 'channel-info',
    description: 'Information about the current channel.',
    guildOnly: true,
    argsRequired: false,
    execute(message, args) {
        message.channel.send(`Channel name: ${message.channel.name}`);
    },
};