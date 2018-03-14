const Command = require('./Command')
const { optional, list, string } = require('../Arguments')

const ping = ({ message }, args) => {
    message.channel.send(`pong ${args.join(' ')}`)
}

module.exports = new Command({
    name: 'ping',
    args: [optional(list(string('data')))],
    fun: ping,
    help: {
        short: "Tests bot's response",
        long: 'Returns the same message with `ping` substituted for `pong`'
    }
})
