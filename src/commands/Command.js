const { LIST, InvalidArgumentsException } = require('../Arguments')
class Command {
    constructor({ name, args, fun, help }) {
        this.validateArgs(args)
        this.args = args || []
        this.name = name || ''
        this.fun = fun || (() => {})
        this.help = help || {}
    }

    resolve(ctx, args) {
        this.fun(ctx, args)
    }

    validateArgs(args) {
        const listCount = args.filter(arg => arg.type === LIST)
        if (listCount > 1) {
            throw new InvalidArgumentsException(
                'A command can only have one list in arguments'
            )
        }
    }
}

module.exports = Command
