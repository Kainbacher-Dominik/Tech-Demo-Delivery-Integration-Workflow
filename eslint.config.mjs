import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
        afterAll: "readonly",
        beforeAll: "readonly",
        afterEach: "readonly",
        beforeEach: "readonly",
        test: "readonly",
        it: "readonly",
        __dirname: "readonly",
        process: "readonly"
      },
    },
  },
  { files: ["**/*.spec.js", "**/*.test.js"], languageOptions: { globals: globals.jest } },
  pluginJs.configs.recommended,
];
