export const NUMBER_REGEX = /^(0-9)*/;

export const INVALID_CHARS = /(\W)/g;

export const DEFAULT_MANIFEST_PATH = 'node_modules/@ori/shared-libs/build/manifest.json';

export const POSTCSS_SETTING = {
  loader: 'postcss-loader',
  options: {
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
