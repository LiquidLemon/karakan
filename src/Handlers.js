const handlerNames = [
    'CommandHandler'
]

module.exports = handlerNames.map(n => require(`./handlers/${n}`))

