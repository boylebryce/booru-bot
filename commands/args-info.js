module.exports = {
    name: 'args-info',
    description: 'Information about the arguments provided.',
    guildOnly: false,
    usage: '<space-separated arguments>',
    argsRequired: true,
    execute(message, args) {
        message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
    },
};