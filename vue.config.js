const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/phone-input-review' : '',
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
