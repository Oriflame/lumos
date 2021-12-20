const { getConfig } = require('../../../lib/index');
const config = getConfig({ srcFolder: '.', esm: true, node: true });
module.exports = config;
