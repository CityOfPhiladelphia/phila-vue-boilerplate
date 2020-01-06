module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@phila/phila-ui/src/styles/functions.scss";
          @import "~@phila/phila-ui/src/styles/colors.scss";
        `,
      },
    },
  },
};
