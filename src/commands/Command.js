class Command {
    constructor({ name, fun }) {
        this.name = name || ''
        this.fun = fun || (x => {})
    }

    resolve(msg, args) {
        this.fun(msg, args)
    }
}

module.exports = Command
