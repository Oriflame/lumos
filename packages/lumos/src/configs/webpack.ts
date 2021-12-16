import { BeemoConfig } from '@beemo/core';
import { PathResolver } from '@boost/common';
import { requireModule } from '@boost/module';
import { getConfig } from '@oriflame/config-webpack';

import { getSettings } from '../helpers/getSettings';
import { LumosSettings } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
const tool = (process.lumos || process.beemo)?.tool;

let lumosSettings: Partial<LumosSettings> | undefined;
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (!tool) {
  const resolver = new PathResolver();

  resolver
    .lookupFilePath('.config/lumos.ts', process.cwd())
    .lookupFilePath('.config/lumos.js', process.cwd());

  const path = await resolver.resolvePath();
  lumosSettings = requireModule<BeemoConfig<Partial<LumosSettings>>>(path).default.settings;
}

const settings = getSettings(tool, lumosSettings);

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
