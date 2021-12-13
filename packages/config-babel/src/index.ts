import type { BabelConfig } from '@beemo/driver-babel';
import { LumosEnvSetting, NODE_TARGET, WEB_TARGET } from '@oriflame/lumos-common';

const { tool } = process.beemo;

interface BabelOptions {
  env?: LumosEnvSetting;
  esm?: boolean;
  graphql?: boolean;
  library?: boolean;
  node?: boolean;
  react?: boolean;
  empty?: boolean;
  srcFolder: string;
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
}: BabelOptions): BabelConfig {
  if (empty) {
    return {};
  }

  const config: BabelConfig = {
    babelrc: true,
    babelrcRoots: tool.project.getWorkspaceGlobs({ relative: true }),
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
