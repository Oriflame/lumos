const { getConfig } = require('../../../lib/index');
const config = getConfig({ srcFolder: '.', react: true });
module.exports = config;
