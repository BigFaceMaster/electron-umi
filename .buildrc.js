const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components/'),
      pages: `${__dirname}/src/pages`,
      models: `${__dirname}/src/models`,
      services: `${__dirname}/src/services`,
      utils: `${__dirname}/src/utils`,
    },
  },
};
