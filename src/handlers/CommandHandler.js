const Commands = require('../Commands')

const CommandHandler = ctx => {
    const content = ctx.message.content
    if (content.indexOf(ctx.config.prefix) === 0) {
        const tokens = content.substr(ctx.config.prefix.length).split(' ')
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
