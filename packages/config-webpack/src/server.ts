import { parse } from '@boost/args';
import execa from 'execa';
import path from 'path';

import { PORT } from './helpers';

// Remove node binary and script
const argv = process.argv.slice(1);

// Parse argv into a consumable object
const { options, rest } = parse<{
  help: boolean;
  path?: string;
  port?: number;
  entryPoint?: string;
  analyze?: boolean;
}>(argv, {
  options: {
    help: {
      description: 'Show the help menu',
      short: 'H',
      type: 'boolean',
    },
    path: {
      description: 'Relative path to project in monorepo',
      short: 'P',
      type: 'string',
    },
    port: {
      description: 'Dev server port',
      type: 'number',
      default: PORT,
    },
    entryPoint: {
      description: 'Webpack entry file path (relative to the root)',
      type: 'string',
    },
    analyze: {
      description: 'Analyze webpack build',
      type: 'boolean',
    },
  },
});

const NODE_ENV = process.env.NODE_ENV || 'development';
let LUMOS_ROOT: string | undefined;
const WEBPACK_ANALYZE = options.analyze?.toString();
const LUMOS_ENTRY_POINT = options.entryPoint?.toString();

if (options.path) {
  LUMOS_ROOT = path.join(process.cwd(), options.path);
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
    LUMOS_ROOT,
    WEBPACK_ANALYZE,
    LUMOS_ENTRY_POINT,
  },
  preferLocal: true,
  stdio: 'inherit',
});
