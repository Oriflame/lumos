import { BeemoConfig } from '@beemo/core';

const config: BeemoConfig = {
  module: '@oriflame/lumos',
  drivers: ['babel', 'eslint', 'jest', 'prettier', 'typescript', 'webpack'],
  settings: {
    node: true,
    testsFolder: 'test',
    library: true,
  },
};

export default config;
