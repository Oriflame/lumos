import { getConfig } from '@oriflame/config-webpack';

import { getSettings } from '../helpers/getSettings';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
const tool = (process.lumos || process.beemo)?.tool;

const settings = getSettings(tool, 'webpack');

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
  enableSourceMaps,
  sharedModulesPackage,
} = settings;

const config = getConfig({
  analyzeBundle: !!process.env.WEBPACK_ANALYZE,
  parallel: process.env.WEBPACK_PARALLEL,
  port: process.env.PORT,
  react,
  sourceMaps: process.env.SOURCE_MAPS ? Boolean(process.env.SOURCE_MAPS) : enableSourceMaps,
  buildFolder: process.env.LUMOS_WEBPACK_BUILD_FOLDER || buildFolder,
  srcFolder,
  entryPoint: process.env.LUMOS_WEBPACK_ENTRY_POINT || entryPoint,
  publicPath,
  root: process.env.LUMOS_WEBPACK_ROOT || root,
  devServerContentBase,
  host,
  moduleFederationConfig,
  enableSharedModules,
  sharedModulesManifestPath,
  sharedModulesPackage,
  monorepoRoot: process.env.LUMOS_WEBPACK_WORKSPACE_ROOT || undefined,
});

export default config;
