import type { BabelConfig } from '@beemo/driver-babel';
import type { LumosEnvSetting } from '@oriflame/lumos-common';
import { NODE_TARGET, WEB_TARGET } from '@oriflame/lumos-common';

export interface Assumptions {
  arrayLikeIsIterable?: boolean;
  constantReexports?: boolean;
  constantSuper?: boolean;
  enumerableModuleMeta?: boolean;
  ignoreFunctionLength?: boolean;
  ignoreToPrimitiveHint?: boolean;
  iterableIsArray?: boolean;
  mutableTemplateObject?: boolean;
  noClassCalls?: boolean;
  noDocumentAll?: boolean;
  noIncompleteNsImportDetection?: boolean;
  noNewArrows?: boolean;
  objectRestNoSymbols?: boolean;
  privateFieldsAsProperties?: boolean;
  pureGetters?: boolean;
  setClassMethods?: boolean;
  setComputedProperties?: boolean;
  setPublicClassFields?: boolean;
  setSpreadProperties?: boolean;
  skipForOfIteratorClosing?: boolean;
  superIsCallableConstructor?: boolean;
}

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
  assumptions?: Assumptions;
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
  assumptions,
}: BabelOptions): BabelConfig {
  if (empty) {
    return {};
  }

  const config: BabelConfig = {
    babelrc: true,
    // @ts-expect-error -- not typed
    assumptions,
    babelrcRoots: workspaces,
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
