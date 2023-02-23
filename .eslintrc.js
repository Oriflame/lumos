module.exports = {
  root: true,
  extends: [
    '@oriflame/eslint-config',
    '@oriflame/eslint-config/node',
    '@oriflame/eslint-config/typescript',
    '@oriflame/eslint-config/future',
    '@oriflame/eslint-config/lib/presets/SECRET_CONFIG_DO_NOT_USE_THIS',
    '@oriflame/eslint-config/prettier',
  ],
  env: {
    node: true,
  },
};
