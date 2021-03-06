const Discord = require('discord.js')
const Logger = require('./src/Logger')
const Handlers = require('./src/Handlers')
const Config = require('./src/Config')
const Commands = require('./src/Commands')

const client = new Discord.Client()

client.on('ready', () => {
    Logger.info('Locked & loaded')
})

client.on('message', msg => {
    if (msg.author.id !== client.user.id) {
        Logger.logMessage(msg)
        const context = {
            client,
            message: msg,
            logger: Logger,
            config: Config,
            commands: Commands
        }
        Handlers.some(h => h(context))
    }
})

process.on('SIGINT', () => {
    Logger.info('Shutting down...')
    client.destroy().then(process.exit)
})

client.login(Config.token)
