# `eslint-config-oriflame`

Sharable configuration for eslint.

## Installation

```sh
npm install --save-dev eslint-config-oriflame eslint
yarn add --dev eslint-config-oriflame eslint
```

## Usage

`.eslintrc.js`:

```javascript
module.exports = {
  root: true,
  extends: [
    'oriflame',
    'oriflame/node',
    'oriflame/typescript',
    'oriflame/future',
    'oriflame/prettier',
  ],
};
```

## Presets

- oriflame
  - Base preset containing bare configuration
- node
  - Enable rules for node
- typescript
  - Enable support for typescript
- nextjs
  - Enable support for next
- future
  - Enable esnext support
- prettier
  - Enable integration with prettier
  - This must be last
