import { getConfig } from '@oriflame/config-webpack';
import { getSettings } from '@oriflame/lumos-common';

const {
  srcFolder,
  react,
  entryPoint,
  publicPath,
  root,
  buildFolder,
  devServerContentBase,
} = getSettings();

export = getConfig({
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
});
