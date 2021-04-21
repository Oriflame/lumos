import { getConfig } from '@oriflame/config-webpack';
import { getSettings, getPackage } from '@oriflame/lumos-common';

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
} = getSettings();

const pkg = getPackage();

export = getConfig({
  analyzeBundle: !!process.env.WEBPACK_ANALYZE,
  parallel: process.env.WEBPACK_PARALLEL,
  port: process.env.PORT,
  react,
  sourceMaps: !!process.env.SOURCE_MAPS,
  buildFolder: process.env.LUMOS_BUILD_FOLDER || (pkg.lumos.settings.buildFolder && buildFolder),
  srcFolder,
  entryPoint: process.env.LUMOS_ENTRY_POINT ?? entryPoint,
  publicPath,
  root,
  devServerContentBase,
  host,
  moduleFederationConfig: moduleFederationConfig as NonNullable<
    Parameters<typeof getConfig>[0]['moduleFederationConfig']
  >,
});
