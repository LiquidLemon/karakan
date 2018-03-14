const Command = require('./Command')
const { optional, string, list, LIST } = require('../Arguments')
const { monospace } = require('../Util')

const buildCommandUsage = (command, prefix) => {
    const args = command.args.map(arg => {
        let repr = arg.type === LIST
            ? `${arg.name}...`
            : arg.name

        repr = arg.required
            ? repr
            : `[${repr}]`

        return repr
    }).join(' ')

    return `${prefix}${command.name} ${args}`
}

const help = ({ message, commands, config }, [commandName]) => {

    if (typeof commandName === 'undefined') {
        const listing = commands.map(command => typeof command.help.short === 'undefined'
            ? `${config.prefix}${command.name}`
            : `${config.prefix}${command.name} - ${command.help.short}`
        ).join('\n')

        message.channel.send(monospace(listing))
    } else {
        const command = commands.find(c => c.name === commandName)
        if (typeof command === 'undefined') {
            message.channel.send("I don't know that one")
        } else {
            const usage = buildCommandUsage(command, config.prefix)
            const description = command.help.long || command.help.short
            message.channel.send(monospace(`${usage}\n${description}`))
        }
    }

}

module.exports = new Command({
    name: 'help',
    fun: help,
    args: [optional(list(string('command')))],
    help: {
        short: 'Display usage information',
        long: 'List all commands or specific information about a command'
    }
})
