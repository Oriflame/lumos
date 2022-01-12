import type { BeemoConfig, Tool } from '@beemo/core';
import { requireModule } from '@boost/module';
import fs from 'fs';
import { join } from 'path';

import type { LumosSettings } from '../types';

let lumosSettingsCache: BeemoConfig<Partial<LumosSettings>>;

/**
 * Read lumos config settings
 * Try to read ts or js. Ts have precedence.
 * @param name {string}
 * @returns
 */
function readSettingsForTool(name: string) {
  let path = join(process.cwd(), '.config/lumos.ts');
  if (!fs.existsSync(path)) {
    path = join(process.cwd(), '.config/lumos.js');
  }

  lumosSettingsCache = requireModule<BeemoConfig<Partial<LumosSettings>>>(path).default;
  let foundDriverSettings = {};
  if (Array.isArray(lumosSettingsCache.drivers)) {
    const driver = lumosSettingsCache.drivers.find((item) => {
      if (typeof item === 'string') {
        return item === name;
      }
      if (Array.isArray(item)) {
        return item[0] === name;
      }

      return false;
    });
    if (driver && typeof driver !== 'string') {
      const [, config] = driver;
      foundDriverSettings = config;
    }
  } else if (typeof lumosSettingsCache.drivers !== 'undefined') {
    const driver = lumosSettingsCache.drivers[name];
    if (driver && typeof driver !== 'boolean') {
      foundDriverSettings = driver;
    }
  }

  return { ...lumosSettingsCache.settings, ...foundDriverSettings };
}

export function getSettings(instance: Tool | undefined, name?: string): LumosSettings {
  let settings: Partial<LumosSettings> = {};

  if (instance) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- expect the worst
    settings = { ...settings, ...instance.config?.settings };
  } else if (name) {
    settings = { ...settings, ...readSettingsForTool(name) };
  }

  return {
    buildFolder: settings.library ? 'lib' : 'build',
    esmBuildFolder: 'esm',
    coverage: 75,
    env: {},
    graphql: false,
    library: false,
    future: false,
    node: false,
    react: false,
    nextjs: false,
    enableModuleExports: false,
    srcFolder: 'src',
    testsFolder: 'tests',
    typesFolder: 'types',
    emptyBabelConfig: false,
    allowJs: false,
    skipLibCheck: false,
    enableConsoleMocks: true,
    enableSourceMaps: true,
    ...settings,
  };
}
