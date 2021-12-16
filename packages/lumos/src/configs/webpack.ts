import { BeemoConfig } from '@beemo/core';
import { requireModule } from '@boost/module';
import { getConfig } from '@oriflame/config-webpack';
import fs from 'fs';
import { join } from 'path';

import { getSettings } from '../helpers/getSettings';
import { LumosSettings } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
const tool = (process.lumos || process.beemo)?.tool;

let lumosSettings: Partial<LumosSettings> | undefined;
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (!tool) {
  let path = join(process.cwd(), '.config/lumos.ts');
  if (!fs.existsSync(path)) {
    path = join(process.cwd(), '.config/lumos.js');
  }

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
