module.exports = {
    name: 'args-info',
    description: 'Information about the arguments provided.',
    usage: '<space-separated arguments>',
    args: true,
    execute(message, args) {
        message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
    },
};