import { getConfig } from '@ori-open/config-next';
import { getSettings } from '@ori-open/lumos-common';

const { srcFolder, root, buildFolder, nextTarget } = getSettings();

export = getConfig({
  buildFolder: (process.env.LUMOS_BUILD_FOLDER as string) || buildFolder,
  analyzeBundle: !!process.env.ANALYZE,
  srcFolder: (process.env.LUMOS_SRC_FOLDER as string) || srcFolder,
  target: (process.env.LUMOS_TARGET as typeof nextTarget) || nextTarget,
  root,
});
