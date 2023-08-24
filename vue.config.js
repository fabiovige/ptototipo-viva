const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/prototipo/" : "/",
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[name].[ext]",
        outputPath: "assets/pdfs/",
      })
      .end();
  },
});
