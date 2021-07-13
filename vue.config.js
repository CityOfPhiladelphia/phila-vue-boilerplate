const shouldBuild = process.env.NODE_ENV === 'production' && process.env.VUE_APP_GIT_BRANCH;

module.exports = {
  publicPath: shouldBuild ? `/${process.env.VUE_APP_GIT_BRANCH}/` : '/',
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
