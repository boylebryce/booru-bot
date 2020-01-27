module.exports = {
    name: 'channel-info',
    description: 'Information about the current channel.',
    cooldown: 5,
    guildOnly: true,
    argsRequired: false,
    execute(message, args) {
        message.channel.send(`Channel name: ${message.channel.name}`
            + `\nChannel type: ${message.channel.type}`
            + `\nChannel id: ${message.channel.id}`
            + `\nChannel parent: ${message.channel.parent}`);
    },
};