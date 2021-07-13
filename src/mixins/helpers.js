const getExamplesList = function () {
  let list = {};
  this.$router.options.routes.forEach(route => {
    if (route.name === "examples") {
      route.children.forEach(example => {
        let exampleCategory = example.meta.category || 'Other';

        if (!list[exampleCategory]) {
          list[exampleCategory] = {};
        }

        if (!list[exampleCategory][example.meta.component]) {
          list[exampleCategory][example.meta.component] = [];
        }

        list[exampleCategory][example.meta.component].push({
          name: example.name,
          label: example.meta.label,
          category: example.meta.category,
        });

      });
    }
  });
  return list;
};

export {
  getExamplesList,
};