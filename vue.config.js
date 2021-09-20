const shouldBuild = process.env.NODE_ENV === 'production' && process.env.VUE_APP_GIT_BRANCH;

module.exports = {
  publicPath: shouldBuild ? `/${process.env.VUE_APP_GIT_BRANCH}/` : '/',
  transpileDependencies: [ '@phila/phila-ui' ],
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
};
