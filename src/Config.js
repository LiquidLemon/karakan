const Logger = require('./Logger')
const config = require('../config')

const token = process.env.DISCORD_TOKEN

if (!token) {
    Logger.error('DISCORD_TOKEN is empty')
    process.exit(1)
}

const prefix = config.prefix || '!'

module.exports = {
    token,
    prefix
}
