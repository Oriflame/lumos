import type { BabelConfig } from '@beemo/driver-babel';
import { LumosEnvSetting, NODE_TARGET, WEB_TARGET } from '@oriflame/lumos-common';

interface BabelOptions {
  env?: LumosEnvSetting;
  esm?: boolean;
  graphql?: boolean;
  library?: boolean;
  node?: boolean;
  react?: boolean;
  empty?: boolean;
  srcFolder: string;
  workspaces?: string[];
}

export function getConfig({
  env = {},
  esm = false,
  graphql = false,
  library = false,
  node = false,
  react = false,
  empty = false,
  srcFolder,
  workspaces,
}: BabelOptions): BabelConfig {
  if (empty) {
    return {};
  }

  const config: BabelConfig = {
    babelrc: true,
    babelrcRoots: workspaces,
    comments: false,
    presets: [
      [
        'oriflame',
        {
          modules: esm,
          react,
          library,
          graphql,
          removePropTypes: !library && react,
          targets: node ? NODE_TARGET : WEB_TARGET,
          srcFolder,
          env,
        },
      ],
    ],
  };

  return config;
}
