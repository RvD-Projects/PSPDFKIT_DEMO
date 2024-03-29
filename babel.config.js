module.exports = function (api) {
  api.cache(false);

  if (process.env["ENV"] === "prod") {
    plugins.push([
      "transform-remove-console"
    ]);
  }

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [
    ["module:react-native-dotenv", {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
      "blocklist": null,
      //"allowlist": null,
      "safe": true,
      "allowUndefined": false,
      "verbose": false
    }],
    'react-native-reanimated/plugin'
  ];

  return {
    presets,
    plugins
  };
}