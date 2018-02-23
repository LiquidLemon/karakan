const { createLogger, format, transports } = require('winston')
const { combine, printf, timestamp } = format

const formatter = printf(log =>
    `${log.timestamp} [${log.level}]: ${log.message}`
)

const Logger = createLogger({
    transports: [
        new transports.Console({
            format: combine(timestamp(), formatter)
        }),
        new transports.File({
            timestamp: true,
            level: 'info',
            filename: 'bot.log'
        })
    ]
})

Logger.logMessage = function ({ content, author, guild, channel}) {
    this.info(`[${guild.name}#${channel.name}] <${author.username}#${author.discriminator}>: ${content}`)
}

module.exports = Logger
