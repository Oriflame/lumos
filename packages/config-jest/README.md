# Jest Config

Factory functions for creating preset [Jest](https://jestjs.io/) configurations. Primarily used in
unison with the [Lumos](https://www.npmjs.com/package/@ori-open/lumos) CLI.

## Extending config

**Update package.json:**

```json
{
  "lumos": {
    "jest": {
      "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
    }
  }
}
```

**Create file in configs folder:**

`configs/eslint.js`

```js
modules.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
```

## Settings

### Main settings

```ts
export interface JestOptions {
  graphql?: boolean;
  react?: boolean;
  node?: boolean;
  srcFolder: string;
  testsFolder: string;
  threshold?: number;
  workspaces?: string[];
  testingLibrary?: boolean;
  testResultFileName?: string;
}
```

### Default values

```ts
({
  graphql = false, // Enables/disables support for react
  react = false, // Enables/disabled support for react
  node = false, // Enables/disables support for node
  testingLibrary = false, // Enables/disabled testing library
  threshold = 40, // code coverage threshold
  testResultFileName = 'TEST-RESULTS.xml', // junit output filename
});
```

### [Beemo/jest](https://milesj.gitbook.io/beemo/driver/jest)
