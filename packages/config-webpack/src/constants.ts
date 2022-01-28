export const NUMBER_REGEX = /^(0-9)*/;

export const INVALID_CHARS = /(\W)/g;

export const DEFAULT_MANIFEST_PATH = 'build/manifest.json';

export const DEFAULT_MANIFEST_PACKAGE = '@ori/shared-libs';

export const POSTCSS_SETTING = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    postcssOptions: {
      ident: 'postcss',
      plugins: [
        'postcss-flexbugs-fixes',
        [
          'postcss-preset-env',
          {
            autoprefixer: {
              flexbox: 'no-2009',
            },
          },
        ],
      ],
    },
  },
};
