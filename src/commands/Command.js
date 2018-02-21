class Command {
    constructor({ name, fun }) {
        this.name = name || ''
        this.fun = fun || (x => {})
    }

    resolve(msg, args) {
        this.fun(null, msg, args)
    }
}

module.exports = Command
