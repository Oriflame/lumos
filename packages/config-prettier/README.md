# Prettier Config

Factory functions for creating preset [Prettier](https://prettier.io/) configurations. Primarily
used in union with the [Lumos](https://www.npmjs.com/package/@oriflame/lumos) CLI.

## Extending config

**Update package.json:**


```json
{
  "lumos": {
    "prettier": {
      "arrowParens": "avoid"
    }
  }
}
```

**Create file in configs folder:**

`configs/prettier.js`

```js
modules.exports = {
  arrowParens: 'avoid',
};
```

## Default config

```js
{
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  requirePragma: false,
  proseWrap: 'always',
}
```
