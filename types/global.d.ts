import type { BeemoProcess } from '@beemo/core';

declare const __DEV__: boolean;

declare interface BeemoSettings {
  /**
   * Build folder depends on library if library=true then default is lib otherwise build
   * @default 'lib'
   */
  buildFolder: string;
  /**
   * Es modules build folder
   * @default 'esm'
   */
  esmBuildFolder: string;
  /**
   * Code coverage
   * @default 75
   */
  coverage: number;
  /**
   * Babel env settings
   * @see https://babeljs.io/docs/en/babel-preset-env#options
   * @default {}
   */
  env: LumosEnvSetting;
  /**
   * Enable graphql support
   * @default false
   */
  graphql: boolean;
  /**
   * Optimizations for library
   * @default false
   */
  library: boolean;
  /**
   * Enable support for esnext javascript
   * @default false
   */
  future: boolean;
  /**
   * Enable node optimizations
   * @default false
   */
  node: boolean;
  /**
   * Enable react support and optimizations
   * @default false
   */
  react: boolean;
  /**
   * Enable nextjs support
   */
  nextjs: boolean;
  /**
   * Source folder
   * @default 'src'
   */
  srcFolder: string;
  /**
   * Test folder
   * @default 'tests'
   */
  testsFolder: string;
  /**
   * Types folder
   * @default 'types'
   */
  typesFolder: string;
  /**
   * Webpack entry point
   * @default undefined
   */
  entryPoint?: string;
  /**
   * Webpack public path
   * @see https://webpack.js.org/guides/public-path/
   */
  publicPath?: string;
  /**
   * Change root folder
   * @default process.cwd()
   */
  root?: string;
  /**
   * Enable declaration only for typescript
   * @default false
   */
  declarationOnly?: boolean;
  /**
   * Change parallelism
   * @default 'auto'
   */
  parallel?: boolean | number | string;
  /**
   * Test result file name
   */
  testResultFileName?: string;
  /**
   * Disable babel config generation
   * @default false
   */
  emptyBabelConfig: boolean;
  /**
   * Allow js in typescript
   * @default false
   */
  allowJs: boolean;
  /**
   * Skip library check in typescript
   * @default false
   */
  skipLibCheck: boolean;
  /**
   * Change dev server content base
   */
  devServerContentBase?: string;
  /**
   * Change module federation config
   */
  moduleFederationConfig?: unknown;
  /**
   * Change webpack host
   */
  host?: string;
  /**
   * Enable shared modules
   */
  enableSharedModules?: boolean;
  /**
   * Path to shared module manifest
   */
  sharedModulesManifestPath?: string;
  /**
   * Enable console mocks
   * @default true
   */
  enableConsoleMocks?: boolean;
}

declare global {
  namespace NodeJS {
    interface Process {
      lumos?: BeemoProcess;
    }
  }
}
