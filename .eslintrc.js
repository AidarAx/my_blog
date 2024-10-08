module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
        "@feature-sliced"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next",
        "react-hooks"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "i18next/no-literal-string": ['error', {markupOnly: true}],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
        "react/display-name": "off",
        "@typescript-eslint/no-dynamic-delete": "warn",
        "@typescript-eslint/unbound-method": "warn",
        "@typescript-eslint/no-invalid-void-type": "warn",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "import/no-internal-modules": 'warn'
    }
}
