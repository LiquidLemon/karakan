const Command = require('./Command')

const ping = (msg, args) => {
    msg.channel.send('pong ' + args.join(' '))
}

module.exports = new Command({
    name: 'ping',
    fun: ping
})
