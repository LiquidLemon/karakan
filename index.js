const Discord = require('discord.js')
const Logger = require('./src/Logger')
const Handlers = require('./src/Handlers')

const client = new Discord.Client()

const token = process.env.DISCORD_TOKEN || process.exit(1);

client.on('ready', () => {
    Logger.info("Locked & loaded")
})

client.on('message', msg => {
    Logger.info(msg.content)
    Handlers.some(h => h(msg))
})

process.on('SIGINT', () => {
    Logger.info('Shutting down...')
    client.destroy().then(process.exit)
})

client.login(token)
