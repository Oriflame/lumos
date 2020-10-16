/* eslint-disable @typescript-eslint/no-require-imports */
const { version } = require('../package.json');

export const VERSION = version;

// https://github.com/lerna/lerna/tree/master/commands/version#readme
export const LERNA_VERSION_ARGS = [
  'version',
  '--yes',
  // Only run on master
  '--allow-branch',
  'master',
  // Use the Beemo conventional commit preset
  '--conventional-commits',
  '--changelog-preset',
  '@oriflame/conventional-changelog',
  // Create a GitHub release
  '--create-release',
  'github',
  // Push changes to git
  '--push',
  // Alter commit message to skip CI
  '--message',
  'ci: release [ci skip].',
];

export const BANNER = `██╗     ██╗   ██╗███╗   ███╗ ██████╗ ███████╗
██║     ██║   ██║████╗ ████║██╔═══██╗██╔════╝
██║     ██║   ██║██╔████╔██║██║   ██║███████╗
██║     ██║   ██║██║╚██╔╝██║██║   ██║╚════██║ version: ${version}
███████╗╚██████╔╝██║ ╚═╝ ██║╚██████╔╝███████║
╚══════╝ ╚═════╝ ╚═╝     ╚═╝ ╚═════╝ ╚══════╝
`;
