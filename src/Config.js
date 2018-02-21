const Logger = require('./Logger')
const token = process.env.DISCORD_TOKEN
if (!token) {
    logger.error('DISCORD_TOKEN is empty')
    process.exit();
}

module.exports = {
    token
}
