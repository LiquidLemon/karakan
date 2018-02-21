const Commands = require('../Commands')

const PREFIX = '!'

const CommandHandler = ctx => {
    const content = ctx.message.content
    if (content.indexOf(PREFIX) === 0) {
        const tokens = content.substr(PREFIX.length).split(' ')
        const [name, ...args] = tokens
        const command = Commands.find(c => c.name === name)
        if (command) {
            command.resolve(ctx, args)
            return true
        }
    }
    return false
}

module.exports = CommandHandler
