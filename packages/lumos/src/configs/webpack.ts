import { getConfig } from '@oriflame/config-webpack';
import { getSettings } from '@oriflame/lumos-common';

const { tool } = process.beemo;

const settings = getSettings();
const { options } = tool.driverRegistry.get('babel');

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
} = { ...settings, ...options };

export = getConfig({
  analyzeBundle: !!process.env.WEBPACK_ANALYZE,
  parallel: process.env.WEBPACK_PARALLEL,
  port: process.env.PORT,
  react,
  sourceMaps: !!process.env.SOURCE_MAPS,
  buildFolder:
    process.env.LUMOS_BUILD_FOLDER || ((tool.config.settings.buildFolder as string) && buildFolder),
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
