module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [],
    "rules": {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "quotemark": [true, "single"],
        "indent": ['warn', 4],
        "interface-name": false,
        "ordered-imports": false,
        "semi": ['error', 'never'],
        "quotes": ['error', 'single'],
        "object-literal-sort-keys": false,
        "max-classes-per-file": ['warn', 3],
        "no-consecutive-blank-lines": [false],
        "curly": ['error', "multi-line"],
        "variable-name": [true, "ban-keywords", "check-format", "allow-leading-underscore"],
        "member-ordering": false
    },
    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        },
        "parser": "babel-eslint",

    },
};
