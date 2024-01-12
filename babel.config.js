module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "ENVFILE",
          moduleName: "@env",
          path: ".env",
        },
      ],
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@infrastructure": "./src/infrastructure",
            "@assets": "./src/application/assets",
            "@components": "./src/application/components",
            "@hooks": "./src/application/hooks",
            "@models": "./src/application/models",
            "@screens": "./src/application/screens",
            "@styles": "./src/application/styles",
            "@utils": "./src/application/utils",
          },
        },
      ],
    ],
  };
};
