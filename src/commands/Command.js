class Command {
    constructor({ name, fun }) {
        this.name = name || ''
        this.fun = fun || (x => {})
    }

    resolve(ctx, args) {
        this.fun(ctx, args)
    }
}

module.exports = Command
