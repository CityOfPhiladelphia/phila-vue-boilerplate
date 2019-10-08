module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/phila-ui/styles/functions.scss";
          @import "@/phila-ui/styles/colors.scss";
        `,
      },
    },
  },
};
