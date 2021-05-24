//Config vars based on env and git branch name
const shouldBuild = process.env.NODE_ENV === 'production' && process.env.VUE_APP_GIT_BRANCH;
const branch = process.env.VUE_APP_GIT_BRANCH;

module.exports = {
  branch,
  publicPath: shouldBuild ? `./${branch}` : '',
  // outputDir: shouldBuild ? `dist/${branch}` : 'dist',
  vueRouterBase: shouldBuild ? `/${branch}/` : '/',
};
