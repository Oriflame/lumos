# ESLint Config

Factory functions for creating preset [ESLint](https://eslint.org) configurations. Primarily used in
union with the [Lumos](https://www.npmjs.com/package/@oriflame/lumos) CLI.

## Extending config


**Update package.json:**

```json
{
  "lumos": {
    "eslint": {
      "rules": {
        "react-hooks/exhaustive-deps": "off"
      }
    }
  }
}
```

**Create file in configs folder:**

`configs/eslint.js`

```js
modules.exports = {
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
};
```

## Settings

### Main settings

```ts
export interface ESLintOptions {
  next?: boolean;
  node?: boolean;
  prettier?: boolean;
  typescript?: boolean;
}
```

### Default values

```ts
{
  next = false,
  node = false,
  prettier = false,
  typescript = false,
}
```

### CLI Options

- `--fix`
  - Try to fix autofixable problems.

**Example:**

```bash
lumos eslint --fix
```
