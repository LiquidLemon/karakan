const NUMBER = 'NUMBER'
const STRING = 'STRING'
const LIST   = 'LIST'

const optional = arg => {
    return {
        ...arg,
        required: false
    }
}

const required = arg => {
    return {
        ...arg,
        required: true
    }
}

const argument = (name, type) => {
    return {
        name: name.toUpperCase(),
        type
    }
}

const number = name => {
    return required(argument(name, NUMBER))
}

const string = name => {
    return required(argument(name, STRING))
}

const list = arg => {
    return required({
        ...arg,
        type: LIST,
        elements: arg.type
    })
}

const InvalidArgumentsException = message => {
    return {
        message,
        name: 'InvalidArgumentsException'
    }
}

module.exports = {
    NUMBER,
    STRING,
    LIST,
    required,
    optional,
    number,
    string,
    list,
    InvalidArgumentsException
}
