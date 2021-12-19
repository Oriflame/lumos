module.exports = {
  preset: 'jest-preset-oriflame',
  'moduleNameMapper': {
    '@eslint/eslintrc/universal': '@eslint/eslintrc/dist/eslintrc-universal.cjs',
    'eslint/use-at-your-own-risk': 'eslint/lib/unsupported-api.js'
  }
};
