import { container } from 'webpack';

export interface WebpackOptions {
  analyzeBundle?: boolean;
  buildFolder?: string;
  port?: string | number;
  parallel?: boolean | string | number;
  root?: string;
  react?: boolean;
  sourceMaps?: boolean;
  publicPath?: string;
  srcFolder: string;
  entryPoint?: string;
  devServerContentBase?: string;
  host?: string;
  moduleFederationConfig?: ConstructorParameters<typeof container.ModuleFederationPlugin>[0];
}
