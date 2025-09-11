import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import react from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommendedTypeChecked,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
            react.configs.recommended,
            reactDom.configs.recommended,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            parser: tseslint.parser,
            globals: globals.browser,
            parserOptions: {
                projectService: true,
                project: ["./tsconfig.node.json", "./tsconfig.app.json"],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // Put rules you want to override here
            "react-x/no-class-component": "warn",
            "react-dom/no-dangerously-set-innerhtml": "warn",
        },
    },
]);
