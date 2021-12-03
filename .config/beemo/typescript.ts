import { TypeScriptConfig } from '@beemo/driver-typescript';

const config: TypeScriptConfig = {
  compilerOptions: {
    skipLibCheck: true,
    module: 'commonjs',
  },
};

export default config;
