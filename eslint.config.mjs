import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@next/next/recommended",
    "prettier",
)), {
    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 2021,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "prettier/prettier": ["error"],
        "@typescript-eslint/no-explicit-any": "off",
        "react/react-in-jsx-scope": "off",

        "react/jsx-filename-extension": [1, {
            extensions: [".ts", ".tsx"],
        }],

        "react/jsx-props-no-spreading": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/function-component-definition": "off",
        "react/require-default-props": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "@typescript-eslint/no-shadow": ["error"],

        "@typescript-eslint/no-unused-vars": ["warn", {
            argsIgnorePattern: "^_",
        }],

        "@typescript-eslint/ban-ts-comment": "off",
        "@next/next/no-img-element": "off",

        "import/no-unresolved": ["error", {
            ignore: ["^@/"],
        }],

        "import/no-cycle": "off",
        "import/extensions": "off",
        "import/order": "warn",
        "max-len": "off",
        "class-methods-use-this": "off",
        "linebreak-style": "off",
        "eol-last": "off",
        "object-curly-newline": "off",
        camelcase: "off",
        "no-shadow": "off",
        "no-plusplus": "off",

        "no-param-reassign": ["error", {
            props: true,
            ignorePropertyModificationsFor: ["state"],
        }],

        "import/prefer-default-export": "off",
        "arrow-body-style": "off",
    },
}];