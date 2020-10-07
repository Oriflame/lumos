# Prettier Config

Factory functions for creating preset [Prettier](https://prettier.io/) configurations. Primarily
used in unison with the [Lumos](https://www.npmjs.com/package/@oriflame/lumos) CLI.

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
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  printWidth: 100,
  proseWrap: 'always',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}
```

### [Beemo/prettier](https://milesj.gitbook.io/beemo/driver/prettier)
