export const NUMBER_REGEX = /^(0-9)*/;

export const INVALID_CHARS = /([/@\-\W])/g;

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
            stage: 3,
          },
        ],
        'postcss-normalize',
      ],
    },
  },
};
