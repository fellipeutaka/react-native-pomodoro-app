module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".js", ".json"],
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            routes: "./src/routes",
          },
        },
      ],
    ],
  };
};
