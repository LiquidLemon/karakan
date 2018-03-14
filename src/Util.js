const wrap = (text, wrapper) => [wrapper, text, wrapper].join('')

const monospace = text => wrap(text, '\n```\n')

module.exports = {
    wrap,
    monospace
}
