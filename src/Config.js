const Logger = require('./Logger')
const token = process.env.DISCORD_TOKEN
if (!token) {
    Logger.error('DISCORD_TOKEN is empty')
    process.exit(1);
}

module.exports = {
    token
}
