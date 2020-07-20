module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        directories: {
          buildResources: "build",
          output: "dist"
        },
        asar: true,
        files: [
          "dist_electron/**/*",
          "src/background.js",
          "background.js",
          "!**/node_modules/**/{CHANGELOG.md,README.md,README,readme.md,readme}",
          "!node_modules/**/*.js.map",
          "!node_modules/**/*.ts.map",
          "!node_modules/**/{*.vcxproj,*.vcxproj.filters}",
          "!node_modules/**/build/Release/{*.lib,*.exp,*.ilk,*.pdb,*.iobj,*.ipdb}",
          "!node_modules/**/build/Release/obj"
        ],
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
