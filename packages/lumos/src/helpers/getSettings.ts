import { Tool } from '@beemo/core';

import { LumosSettings } from '../types';

const settingsCache: Partial<LumosSettings> = {};

export function getSettings(
  instance?: Partial<Tool>,
  settings?: Partial<LumosSettings>,
): LumosSettings {
  Object.assign(settingsCache, instance?.config?.settings || settings || {});

  return {
    buildFolder: settingsCache.library ? 'lib' : 'build',
    esmBuildFolder: 'esm',
    coverage: 75,
    env: {},
    graphql: false,
    library: false,
    future: false,
    node: false,
    react: false,
    nextjs: false,
    srcFolder: 'src',
    testsFolder: 'tests',
    typesFolder: 'types',
    emptyBabelConfig: false,
    allowJs: false,
    skipLibCheck: false,
    enableConsoleMocks: true,
    ...settingsCache,
  };
}
