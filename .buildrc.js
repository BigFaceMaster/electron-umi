
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components/"),
      acore: path.resolve(__dirname, "src/acore/"),
      pages: `${__dirname}/src/pages`,
      models: `${__dirname}/src/models`,
      services: `${__dirname}/src/services`,
      plugin: `${__dirname}/src/plugin`,
      utils: `${__dirname}/src/utils`,
    }
  }
};
