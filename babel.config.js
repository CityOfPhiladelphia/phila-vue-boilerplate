const plugins = [];

if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') {
  plugins.push("transform-remove-console");
}

module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'usage',
        polyfills: [ 'es.array.iterator', 'es.promise', 'es.object.assign', 'es.promise.finally', 'es.array.find-index' ],
      },
    ],
  ],
  plugins,
};