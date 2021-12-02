const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  transpileDependencies: [ '@phila/phila-ui' ],
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
          // { from: "node_modules/@phila/phila-ui/src/assets/images/favicon.png", to: "favicon.png" },
        ],
      }),
    ],
  },
};
