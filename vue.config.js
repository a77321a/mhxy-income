module.exports = {
  // chainWebpack: (config) => {},
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: "./public/app.ico",
        },
        mac: {
          icon: "./public/app.png",
        },
        productName: "收益助手",
      },
    },
  },
};
