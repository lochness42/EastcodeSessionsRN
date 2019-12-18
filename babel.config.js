module.exports = {
  presets: ["module:metro-react-native-babel-preset", "@babel/preset-flow"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          test: "./test",
          underscore: "lodash",
          components: "./src/components"
        }
      }
    ]
  ]
};
