import type { container } from 'webpack';

export interface WebpackOptions {
  analyzeBundle?: boolean;
  buildFolder?: string;
  port?: number | string;
  parallel?: boolean | number | string;
  root?: string;
  react?: boolean;
  sourceMaps?: boolean;
  publicPath?: string;
  srcFolder: string;
  entryPoint?: string;
  devServerContentBase?: string;
  host?: string;
  moduleFederationConfig?: ConstructorParameters<typeof container.ModuleFederationPlugin>[0];
  enableSharedModules?: boolean;
  sharedModulesManifestPath?: string;
  useTsBuild?: boolean;
}
