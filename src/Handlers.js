const fs = require('fs')
const path = require('path')

const handlersPath = path.join(__dirname, 'handlers')
const ignoredFiles = ['.', '..']
const handlerFiles = fs.readdirSync(handlersPath)
    .filter(c => !ignoredFiles.includes(c) && /\.js$/.test(c))

module.exports = handlerFiles.map(file => require(`./handlers/${file}`))
