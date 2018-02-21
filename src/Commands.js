const fs = require('fs')
const path = require('path')

const commandsPath = path.join(__dirname, 'commands')
const ignoredFiles = ['.', '..', 'Command.js']
const commandFiles = fs.readdirSync(commandsPath)
    .filter(c => !ignoredFiles.includes(c) && /\.js$/.test(c))

module.exports = commandFiles.map(file => require(`./commands/${file}`))
