import { getConfig } from '@oriflame/config-webpack';

import { getSettings } from '../helpers/getSettings';
import { LumosSettings } from '../types';

const { tool = {} } = process.lumos || process.beemo;

// Workaround for beemo
const envSettings = JSON.parse(process.env.LUMOS_SETTINGS || 'null') as LumosSettings;

const settings = getSettings(tool, envSettings);

const {
  srcFolder,
  react,
  entryPoint,
  publicPath,
  root,
  buildFolder,
  devServerContentBase,
  moduleFederationConfig,
  host,
  enableSharedModules,
  sharedModulesManifestPath,
} = settings;

const config = getConfig({
  analyzeBundle: !!process.env.WEBPACK_ANALYZE,
  parallel: process.env.WEBPACK_PARALLEL,
  port: process.env.PORT,
  react,
  sourceMaps: !!process.env.SOURCE_MAPS,
  buildFolder: process.env.LUMOS_BUILD_FOLDER || buildFolder,
  srcFolder,
  entryPoint: process.env.LUMOS_ENTRY_POINT || entryPoint,
  publicPath,
  root,
  devServerContentBase,
  host,
  moduleFederationConfig: moduleFederationConfig as NonNullable<
    Parameters<typeof getConfig>[0]['moduleFederationConfig']
  >,
  enableSharedModules,
  sharedModulesManifestPath,
});

export default config;
