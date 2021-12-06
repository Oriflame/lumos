export interface LumosEnvSetting {
  targets?:
    | string[]
    | string
    | {
        browsers?: string[] | string;
        esmodules?: boolean;
        node?: string | 'current' | true;
        safari?: string | 'tp';
        [key: string]: unknown;
      };
  spec?: boolean;
  loose?: boolean;
  modules?: 'amd' | 'auto' | 'cjs' | 'commonjs' | 'systemjs' | 'umd' | false;
  debug?: boolean;
  include?: Array<RegExp | string>;
  exclude?: Array<RegExp | string>;
  useBuiltIns?: 'entry' | 'usage' | false;
  forceAllTransforms?: boolean;
  configPath?: string;
  ignoreBrowserslistConfig?: boolean;
  shippedProposals?: boolean;
}

export interface LumosSettings {
  buildFolder: string;
  esmBuildFolder: string;
  coverage: number;
  docsFolder: string;
  env: LumosEnvSetting;
  graphql: boolean;
  library: boolean;
  future: boolean;
  node: boolean;
  react: boolean;
  nextjs: boolean;
  srcFolder: string;
  testsFolder: string;
  declarationDir: string;
  typesFolder: string;
  entryPoint?: string;
  publicPath?: string;
  root?: string;
  declarationOnly?: boolean;
  parallel?: boolean | number | string;
  testResultFileName?: string;
  emptyBabelConfig: boolean;
  allowJs: boolean;
  skipLibCheck: boolean;
  devServerContentBase?: string;
  moduleFederationConfig?: unknown;
  host?: string;
  decorators?: false;
  enableSharedModules?: boolean;
  sharedModulesManifestPath?: string;
  enableConsoleMocks?: boolean;
}

const { tool } = process.beemo;

export function getSettings(): LumosSettings {
  const instance = tool;
  const settings: Partial<LumosSettings> = {};

  Object.assign(settings, instance.config.settings);

  return {
    buildFolder: 'lib',
    esmBuildFolder: 'esm',
    coverage: 75,
    docsFolder: 'docs',
    env: {},
    graphql: false,
    library: false,
    future: false,
    node: false,
    react: false,
    nextjs: false,
    srcFolder: 'src',
    testsFolder: 'tests',
    typesFolder: 'types',
    emptyBabelConfig: false,
    allowJs: false,
    skipLibCheck: false,
    enableConsoleMocks: true,
    decorators: false,
    declarationDir: 'dts',
    ...settings,
  };
}
