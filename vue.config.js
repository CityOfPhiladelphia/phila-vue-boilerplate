var buildConfig = require('./buildConfig');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  publicPath: buildConfig.publicPath,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@phila/phila-ui/src/assets/styles/scss/functions.scss";
          @import "~@phila/phila-ui/src/assets/styles/scss/colors.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "src/components/examples", to: "examples" },
        ],
      }),
    ],
  },
};
