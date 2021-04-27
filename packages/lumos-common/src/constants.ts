export const EXTS = ['.ts', '.tsx', '.js', '.jsx', '.json'];

export const TJSX_EXTS_GROUP = '{ts,tsx,js,jsx}';

export const JSX_EXTS_GROUP = '{js,jsx}';

export const TSX_EXTS_GROUP = '{ts,tsx}';

export const TJSX_EXT_PATTERN = /\.m?(t|j)sx?$/;

export const ASSET_EXT_PATTERN = /\.(ttf|eot|otf|svg|woff|woff2|mp3|png|jpg|jpeg|gif|ico)$/;

export const CSS_EXT_PATTERN = /\.(css|scss)$/;

export const CSS_MODULE_EXT_PATTERN = /\.module\.css$/;

export const GQL_EXT_PATTERN = /\.(gql|graphql)$/;

export const ALIAS_PATTERN = '~';

export const IGNORE_PATHS = [
  '.next/',
  'coverage/',
  'node_modules/',
  'public/',
  'esm/',
  'lib/',
  '!src/lib',
  'tmp/',
  'dist/',
  'build/',
];

export const NODE_VERSION = '12.16';

export const NODE_TARGET = { node: NODE_VERSION };

export const WEB_TARGET = { browsers: ['last 3 versions', 'not ie > 0'] };

export const SCAFFOLD_DEPS = [
  '@oriflame/conventional-changelog-lint-config',
  '@commitlint/cli',
  'husky',
  'lint-staged',
];
