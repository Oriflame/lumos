import type { WebpackConfig as BeemoWebpackConfig } from '@beemo/driver-webpack';
import type { Configuration } from 'webpack-dev-server';

export interface WebpackConfig extends BeemoWebpackConfig {
  devServer?: Configuration;
}
