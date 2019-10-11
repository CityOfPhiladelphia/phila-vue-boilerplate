module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~phila-ui/src/styles/functions.scss";
          @import "~phila-ui/src/styles/colors.scss";
        `,
      },
    },
  },
};
