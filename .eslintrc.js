module.exports = {
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "semi": [
            "error",
            "never"
        ],
        "curly": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "eqeqeq": "error",
        "no-var": "warn",
        "prefer-const": "warn",
        "prefer-template": "warn",
        "prefer-spread": "warn",
        "prefer-rest-params": "warn"
    }
};
