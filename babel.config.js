module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src",
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        envName: "ENVFILE",
        moduleName: "@env",
        path: ".env",
      },
    ],
  ],
};
