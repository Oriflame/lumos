import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import fs from 'fs';
import path from 'path';

const rootEnvFile = path.join(process.cwd(), '.env');

// Make sure that including paths.js after env.js will read .env variables.
delete require.cache[require.resolve('./constants')];

// Grab NODE_ENV and REACT_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.
const REACT_APP = /^react_app_/i;

function getClientEnvironment(mode: 'development' | 'production') {
  const NODE_ENV = mode;

  const dotenvFiles = [
    `${rootEnvFile}.${NODE_ENV}.local`,
    `${rootEnvFile}.${NODE_ENV}`,
    rootEnvFile,
  ];

  dotenvFiles.forEach((dotenvFile) => {
    if (fs.existsSync(dotenvFile)) {
      dotenvExpand(
        dotenv.config({
          path: dotenvFile,
        }),
      );
    }
  });

  const raw = Object.keys(process.env)
    .filter((key) => REACT_APP.test(key))
    .reduce<Record<string, unknown>>(
      (env, key) => {
        // eslint-disable-next-line no-param-reassign -- we need to mutate the new object
        env[key] = process.env[key];

        return env;
      },
      {
        // Useful for determining whether we’re running in production mode.
        // Most importantly, it switches React into the correct mode.
        NODE_ENV: process.env.NODE_ENV ?? 'development',
      },
    );
  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce<Record<string, string>>((env, key) => {
      // eslint-disable-next-line no-param-reassign -- we need to mutate the new object
      env[key] = JSON.stringify(raw[key]);

      return env;
    }, {}),
  };

  return stringified;
}

export default getClientEnvironment;
