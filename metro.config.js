// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver = {
  sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs', 'svg'],
  assetExts: ['glb', 'gltf', 'png', 'jpg','ttf', 'otf'],
};

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
}

module.exports = config;