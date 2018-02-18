const Discord = require('discord.js')

const client = new Discord.Client()

const token = process.env.DISCORD_TOKEN || process.exit(1);

client.on('ready', () => {
    console.log("Locked & loaded")
})

client.on('message', msg => {
    console.log(msg.content)
    if (msg.content == '!ping') {
        msg.channel.send('pong')
    }
})

process.on('SIGINT', () => {
    console.log('Shutting down')
    client.destroy().then(process.exit)
})

client.login(token)
