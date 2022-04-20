module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".ts", ".tsx", ".js", ".json"],
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            routes: "./src/routes",
            types: "./src/types",
            themes: "./src/themes",
            assets: "./assets",
          },
        },
      ],
    ],
  };
};
