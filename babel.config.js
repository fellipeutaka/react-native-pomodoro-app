module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          paths: [
            {
              root: __dirname,
              rootPathPrefix: "@pomodoro/",
              rootPathSuffix: "src",
            },
          ],
        },
      ],
    ],
  };
};
