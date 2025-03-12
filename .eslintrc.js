module.exports = {
  extends: [
    "plugin:sonarjs/recommended-legacy",
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "plugin:@next/next/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "next/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "antd",
            group: "external",
            position: "after",
          },
          {
            pattern: "@App/**",
            group: "internal",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-cycle": "off",
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],
    "arrow-body-style": "off",
    "no-restricted-exports": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "all",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "import/newline-after-import": "off",
    "react-hooks/exhaustive-deps": "off",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "prettier/prettier": "error",
    "sonarjs/todo-tag": "warn",
    "sonarjs/no-nested-conditional": "warn",
    "sonarjs/function-return-type": "warn",
    "sonarjs/no-nested-template-literals": "warn",
    "sonarjs/no-nested-functions": "warn",
    "sonarjs/unused-import": "warn",
    "sonarjs/sonar-no-unused-vars": "warn",
    "sonarjs/no-dead-store": "warn",
    "sonarjs/no-commented-code": "warn",
    "sonarjs/cognitive-complexity": ["error", 20],
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  plugins: ["sonarjs", "react", "jsx-a11y"],
  overrides: [
    {
      files: ["**/*.mjs"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
    },
  ],
};
