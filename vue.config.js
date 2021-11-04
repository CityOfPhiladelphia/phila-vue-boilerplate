const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@phila/phila-ui/src/assets/styles/scss/helpers.scss";
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
