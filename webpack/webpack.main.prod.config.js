const merge = require('webpack-merge');

const baseConfig = require('./webpack.main.config');

module.exports = merge.smart(baseConfig, {
  target: 'electron-main',
  entry: {
    main: './electron/main.js',
  },
  mode: 'production',
});
