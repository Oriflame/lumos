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
  enableModuleExports?: boolean;
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
  enableModuleExports = false,
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
    parserOpts: {
      ...(library && { sourceType: 'unambiguous' }),
    },
    presets: [
      [
        '@oriflame/babel-preset',
        {
          modules: esm,
          react,
          library,
          graphql,
          removePropTypes: !library && react,
          srcFolder,
          enableModuleExports,
          env: {
            targets: node ? NODE_TARGET : WEB_TARGET,
            ...env,
          },
        },
      ],
    ],
  };

  return config;
}
