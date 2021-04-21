module.exports = {
  "extends": [
    "eslint-config-airbnb",
    "./packages/config-eslint/lib/rules/eslint",
    "./packages/config-eslint/lib/rules/eslint-comments",
    "./packages/config-eslint/lib/rules/promise",
    "./packages/config-eslint/lib/rules/import",
    "./packages/config-eslint/lib/rules/react",
    "./packages/config-eslint/lib/rules/a11y",
    "./packages/config-eslint/lib/rules/node",
    "./packages/config-eslint/lib/rules/typescript",
    "./packages/config-eslint/lib/rules/jest",
    "./packages/config-eslint/lib/rules/testing-library",
    "./packages/config-eslint/lib/rules/prettier"
  ],
  "env": {
    "node": true
  },
  "rules": {
    "import/prefer-default-export": "off",
    "@typescript-eslint/interface-name-prefix": "off"
  }
};