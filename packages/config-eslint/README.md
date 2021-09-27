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
module.exports = {
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
};
```

## Settings

### Main settings

```ts
export interface ESLintOptions {
  future?: boolean;
  node?: boolean;
  typescript?: boolean;
  nextjs?: boolean;
  prettier?: boolean;
}
```

### Default values

```ts
{
  future = false,
  node = false,
  typescript = false,
  nextjs = false,
  prettier = false,
}
```

### Settings

- future
  - Enables rules for new es features
- node
  - Enables rules for node js development
- typescript
  - Enables typescript rules
- nextjs
  - Enables Next.js rules
- prettier
  - Enables integration with prettier

### CLI Options

- `--fix`
  - Try to fix autofixable problems.

**Example:**

```bash
lumos eslint --fix
```
