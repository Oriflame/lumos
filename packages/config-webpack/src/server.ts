import { parse } from '@boost/args';
import execa from 'execa';
import path from 'path';

import { PORT } from './helpers';

/**
 * Try to naively lookup webpack config in parent folder. Only looks for 'webpack.config.js'.
 *
 * @param { string } rootDir - start directory
 * @param { number = 0 } level - current level of the of the lookup. Maximum is 6
 * @throws { Error } When level exceeds 6
 * @returns { string } Absolute path with webpack config
 */
function findWebpackConfig(rootDir: string, level = 0): string {
  if (level > 5) {
    console.error('Depth of webpack config exceeded 5 exiting');
    throw new Error("Webpack config wasn't found");
  }

  try {
    require.resolve(path.join(rootDir, './webpack.config.js'));

    return rootDir;
  } catch (error) {
    // We don't need to do anything with error
  }

  return findWebpackConfig(path.join(rootDir, '..'), level + 1);
}

// Remove node binary and script
const argv = process.argv.slice(2);

// Parse argv into a consumable object
const { options, rest } = parse<{
  help: boolean;
  root: string;
  port: number;
  entryPoint: string;
  env: string;
}>(argv, {
  options: {
    help: {
      description: 'Show the help menu',
      short: 'h',
      type: 'boolean',
    },
    root: {
      description: 'Relative path to project in monorepo',
      short: 'r',
      type: 'string',
    },
    port: {
      description: 'Dev server port',
      type: 'number',
      short: 'p',
      default: PORT,
    },
    entryPoint: {
      description: 'Webpack entry file path (relative to the root)',
      type: 'string',
    },
    env: {
      description: 'Node env',
      type: 'string',
      short: 'e',
    },
  },
});

const NODE_ENV = options.env || process.env.NODE_ENV || 'development';
let LUMOS_WEBPACK_ROOT: string | undefined;
const LUMOS_WEBPACK_ENTRY_POINT = options.entryPoint.toString();
const originalCwd = process.cwd();

if (options.root) {
  LUMOS_WEBPACK_ROOT = path.join(originalCwd, options.root);
} else {
  const rootPath = findWebpackConfig(originalCwd);

  if (rootPath) {
    LUMOS_WEBPACK_ROOT = originalCwd;
    process.chdir(rootPath);
  }
}

let port: number | string = process.env.PORT || PORT;

const args: string[] = [...rest];

if (options.port) {
  port = options.port;
}

// Unix socket
if (Number.isNaN(Number.parseInt(port.toString(), 10))) {
  args.push('--socket', port.toString());
} else {
  args.push('--port', port.toString());
}

execa('webpack', ['serve', ...args], {
  cwd: process.cwd(),
  env: {
    NODE_ENV,
    LUMOS_WEBPACK_ROOT,
    LUMOS_WEBPACK_ENTRY_POINT,
  },
  preferLocal: true,
  stdio: 'inherit',
});
