module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@infrastructure": "./src/infrastructure",
            "@assets": "./src/application/assets",
            "@components": "./src/application/components",
            "@hooks": "./src/application/hooks",
            "@screens": "./src/application/screens",
            "@utils": "./src/application/utils",
          },
        },
      ],
    ],
  };
};
