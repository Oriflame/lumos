import { ESLintConfig } from '@beemo/driver-eslint';

const config: ESLintConfig = {
  env: {
    node: true,
  },
  extends: ['./packages/config-eslint/lib/presets/SECRET_CONFIG_DO_NOT_USE_THIS'],
  ignore: [
    '*.config.js',
    'packages/config-babel/test/fixtures/**/*',
    'packages/config-eslint/test/**/*',
    'packages/config-eslint/tools/check-rules/**/*',
  ],
};

export default config;
