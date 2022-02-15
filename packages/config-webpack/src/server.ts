/* eslint-disable @typescript-eslint/no-unnecessary-type-arguments */
import { parse } from '@boost/args';
import execa from 'execa';
import path from 'path';

import { PORT } from './helpers';

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

if (options.root) {
  LUMOS_WEBPACK_ROOT = path.join(process.cwd(), options.root);
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
