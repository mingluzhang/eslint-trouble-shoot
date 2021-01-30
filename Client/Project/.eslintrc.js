/* cspell:disable */
/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "tsconfigRootDir": __dirname,
        "sourceType": "module"
    },
    "plugins": [
        // "deprecation",
        "react",
        "eslint-plugin-jsdoc",
        "@typescript-eslint"
    ],
    // "extends": [
    //     "extend:recommended",
    //     "plugin:@typescript-eslint/recommended"
    // ],
    "ignorePatterns": [
        "/**/__mockdata__",
        "/**/__mocks__",
        "/Tests",
        "/**/*.spec.ts",
        "/**/*.spec.tsx",
        "/**/*.Generated*.ts"
    ],
    "rules": {
        "array-bracket-spacing": "error",
        "brace-style": "off",
        "@typescript-eslint/brace-style": [
            "error",
            "1tbs"
        ],
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": "error",
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": "error",
        "indent": "off",
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                "CallExpression": {
                    "arguments": "first"
                },
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                },
                "SwitchCase": 1
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": true
                }
            }
        ],
        "@typescript-eslint/member-ordering": [
            "error",
            {
                "classes": [
                    "public-static-field",
                    "private-static-field",
                    "public-instance-field",
                    "private-instance-field",
                    "public-static-method",
                    "private-static-method",
                    "public-constructor",
                    "private-constructor",
                    "public-instance-method",
                    "private-instance-method"
                ]
            }
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "default",
                "format": ["camelCase"]
            },
            {
                "selector": "typeParameter",
                "format": ["PascalCase"],
                "leadingUnderscore": "forbid",
            },
            {
                "selector": ["enumMember", "classProperty", "typeProperty"],
                "leadingUnderscore": "forbid",
                "format": ["PascalCase", "camelCase"]
            },
            {
                "selector": ["class", "interface", "enum", "typeAlias"],
                "leadingUnderscore": "forbid",
                "format": ["PascalCase"]
            },
            {
                "selector": ["variable"],
                "modifiers": ["const"],
                "leadingUnderscore": "forbid",
                "format": ["camelCase", "UPPER_CASE"]
            },
            {
                "selector": ["parameter"],
                "leadingUnderscore": "allow",
                "format": ["camelCase"]
            },
            {
                "selector": "objectLiteralProperty",
                "leadingUnderscore": "forbid",
                "format": ["PascalCase", "camelCase"]
            },
            {
                "selector": "classProperty",
                "format": null,  // For some special cases
                "filter": {
                    "regex": "_Name",
                    "match": true,
                }
            },
        ],
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-unused-expressions": [
            "error",
            {
                "allowTernary": true,
                "allowShortCircuit": false
            }
        ],
        "@typescript-eslint/no-var-requires": "off",
        "quotes": "off",
        "@typescript-eslint/quotes": [
            "error",
            "double"
        ],
        "semi": "off",
        "@typescript-eslint/semi": [
            "error"
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/typedef": [
            "error",
            {
                "propertyDeclaration": true
            }
        ],
        "capitalized-comments": [
            "error",
            "always",
            {
                "ignorePattern": "cspell|cSpell",
            }
        ],
        "curly": [
            "error",
            "all"
        ],
        "default-case": "error",
        // "deprecation/deprecation": "error",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "always",
            {
                "null": "ignore"
            }
        ],
        "guard-for-in": "error",
        "keyword-spacing": "error",
        "id-blacklist": "error",
        "id-match": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        // "lines-around-comment": [
        //     "error",
        //     {
        //         "beforeBlockComment": true,
        //         "afterBlockComment": false,
        //         "beforeLineComment": true,
        //         "afterLineComment": false,
        //         "allowBlockStart": true,  // Currently not effect for TS. Issue being tracked.
        //         "allowBlockEnd": true,
        //         "allowObjectStart": true,
        //         "allowObjectEnd": true,
        //         "allowArrayStart": true,
        //         "allowArrayEnd": true,
        //         "allowClassStart": true,
        //     }
        // ],
        "max-len": [
            "error",
            {
                "code": 160
            }
        ],
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": "error",
        "no-constructor-return": "error",
        "no-debugger": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-restricted-globals": "off",
        "no-restricted-properties": "off",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": [
            "error",
            {
                "allow": ["_Name"]
            }
        ],
        "no-unused-labels": "error",
        "no-useless-constructor": "error",
        "no-var": "error",
        "object-curly-spacing": ["error", "always"],
        "prefer-const": "error",
        "radix": "error",
        "react/no-string-refs": "error",
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never"
            }
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-unary-ops": [
            "error",
            {
                "words": false,
                "nonwords": false
            }
        ],
        "padded-blocks": [
            "error", "never"
        ]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
