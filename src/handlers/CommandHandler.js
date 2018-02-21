const Commands = require('../Commands')

const PREFIX = '!'

const CommandHandler = msg => {
    const content = msg.content
    if (content.indexOf(PREFIX) === 0) {
        const tokens = content.substr(PREFIX.length).split(' ')
        const [name, ...args] = tokens
        const command = Commands.find(c => c.name === name)
        if (command) {
            command.resolve(msg, args)
            return true
        }
    }
    return false
}

module.exports = CommandHandler
