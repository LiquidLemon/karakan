const Command = require('./Command')

const ping = ({ message }, args) => {
    message.channel.send('pong ' + args.join(' '))
}

module.exports = new Command({
    name: 'ping',
    fun: ping
})
