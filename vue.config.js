module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        directories: {
          buildResources: "build"
        },
        asar: true,
        win: {
          target: "nsis"
        },
        mac: {
          category: "public.app-category.productivity"
        },
        linux: {
          category: "Development"
        },
        deb: {
          packageCategory: "devel"
        }
      }
    }
  }
};
