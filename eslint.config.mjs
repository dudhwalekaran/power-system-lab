import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { ESLint } from "eslint"; // Importing ESLint for rule checks

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    parser: "@typescript-eslint/parser", // Specify the parser for TypeScript/JSX
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module", // Enable modules (import/export)
    },
    rules: {
      // Your custom rules
    },
  },
];
