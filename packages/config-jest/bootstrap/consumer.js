const { getSettings, fromRoot } = require('@oriflame/lumos-common');
const fs = require('fs');

const { tool } = process.beemo;

// Import a custom setup file from the consumer
const { testFolder } = tool.config.settings;
const jsSetup = fromRoot(`./${testFolder}/setup.js`);
const tsSetup = fromRoot(`./${testFolder}/setup.ts`);

if (fs.existsSync(tsSetup)) {
  require(tsSetup);
} else if (fs.existsSync(jsSetup)) {
  require(jsSetup);
}
