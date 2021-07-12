module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@phila/phila-ui/src/assets/styles/scss/functions.scss";
          @import "~@phila/phila-ui/src/assets/styles/scss/colors.scss";
        `,
        sourceMap: true,
        sassOptions: {
          outputStyle: 'compressed',
        },
      },
    },
  },
};

