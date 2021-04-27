module.exports = {
  "extends": [
    "./packages/config-eslint/lib/presets/base",
    "./packages/config-eslint/lib/presets/next",
    "./packages/config-eslint/lib/presets/node",
    "./packages/config-eslint/lib/presets/typescript",
    "./packages/config-eslint/lib/presets/prettier"
  ],
  "env": {
    "node": true
  },
  "rules": {
    "import/prefer-default-export": "off",
    "@typescript-eslint/interface-name-prefix": "off"
  }
};