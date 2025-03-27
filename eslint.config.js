import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
// import prettierPlugin from "eslint-plugin-prettier"; // Імпорт плагіна Prettier
// import prettierConfig from "eslint-config-prettier"; // Імпорт конфігурації Prettier

export default [
  {
    ignores: ["dist", "node_modules"],
  }, // Ігнорування директорій
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Застосовувати до цих типів файлів
    languageOptions: {
      ecmaVersion: "latest", // Найновіша версія ECMAScript
      sourceType: "module", // Використовувати модулі
      globals: globals.browser, // Глобальні змінні браузера
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }, // Підтримка JSX
      },
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      // prettier: prettierPlugin, // Реєстрація плагіна Prettier
    },
    rules: {
      ...js.configs.recommended.rules, // Базові рекомендації ESLint
      ...react.configs.recommended.rules, // Рекомендації для React
      ...reactHooks.configs.recommended.rules, // Рекомендації для react-hooks
      // ...prettierConfig.rules, // Додавання конфігурації Prettier вручну, щоб відключити конфлікти
      "react/jsx-uses-react": "error", // Забезпечити використання React у JSX
      "react/jsx-uses-vars": "error", // Уникати конфліктів незадіяних змінних
      "react/react-in-jsx-scope": "off", // Вимкнути вимогу на імпорт React у JSX
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^[A-Z_]",
        },
      ], // Ігнорувати глобальні або константи
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ], // Застереження щодо `react-refresh`
      // "prettier/prettier": "error",

      // Вмикаємо правило Prettier
    },
  },
];
